using flash_card_webbapp.Server.Data;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ITokenRepository _tokenRepository;
        private readonly ApplicationDbContext _context;


        public AuthController(UserManager<IdentityUser> userManager, ITokenRepository tokenRepository, ApplicationDbContext context)
        {
            _userManager = userManager;
            _tokenRepository = tokenRepository;
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto registerRequestDto)
        {
            var identityUser = new IdentityUser
            {
                UserName = registerRequestDto.Username,
                Email = registerRequestDto.Username

            };
            var identityResult = await _userManager.CreateAsync(identityUser, registerRequestDto.Password);

            if (identityResult.Succeeded)
            { 
                List<string> userRole = new() { "Admin" };
                identityResult = await _userManager.AddToRolesAsync(identityUser, userRole);
                if (identityResult.Succeeded)
                {
                    // Add new user to db
                    var user = new UserModel
                    {
                        Id = Guid.NewGuid().ToString(),
                        Email = registerRequestDto.Username
                    };
                    await _context.Users.AddAsync(user);
                    await _context.SaveChangesAsync();
                    return Ok("The user was registered! You can now login");
                }

            }
            return BadRequest("Sorry, it did not work this time");
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LogInRequestDto logInRequestDto)
        {
            var user = await _userManager.FindByEmailAsync(logInRequestDto.Username);

            if (user != null)
            {
                var checkPasswordResult = await _userManager.CheckPasswordAsync(user, logInRequestDto.Password);
                if (checkPasswordResult)
                {
                    // get a role for the user
                    var roles = await _userManager.GetRolesAsync(user);
                    if (roles != null)
                    {
                        var jwttoken = _tokenRepository.CreateJWTToken(user, roles.ToList());
                        var response = new LogInResponseDto
                        {
                            AccessToken = jwttoken
                        };
                        return Ok(response);
                    }
                }
            }
            return BadRequest("username or password was incorrect");
        }
    }
}
