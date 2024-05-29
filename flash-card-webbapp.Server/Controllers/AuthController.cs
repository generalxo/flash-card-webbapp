using flash_card_webbapp.Server.Data;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Models.MiscModels;
using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/auth")]
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
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto requstModel)
        {
            // code for db actions needs to be moved to a service funtion

            if(ModelState.IsValid is false)
                return BadRequest("Invalid data");

            var identityUser = new IdentityUser
            {
                UserName = requstModel.Email,
                Email = requstModel.Email
            };
            var identityResult = await _userManager.CreateAsync(identityUser, requstModel.Password);

            if (identityResult.Succeeded)
            { 
                List<string> userRole = new() { RoleName.User };
                identityResult = await _userManager.AddToRolesAsync(identityUser, userRole);
                if (identityResult.Succeeded)
                {
                    return Ok("The user was registered! You can now login");
                }
            }
            return BadRequest("Sorry, it did not work this time");
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LogInRequestDto logInRequestDto)
        {
            // code for db actions needs to be moved to a service funtion
            var user = await _userManager.FindByEmailAsync(logInRequestDto.Email);

            if (user != null)
            {
                var checkPasswordResult = await _userManager.CheckPasswordAsync(user, logInRequestDto.Password);
                if (checkPasswordResult)
                {
                    // get a role for the user
                    var roles = await _userManager.GetRolesAsync(user);
                    if (roles != null)
                    {
                        var jwttoken = _tokenRepository.CreateJWTToken(user, [.. roles]);
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
