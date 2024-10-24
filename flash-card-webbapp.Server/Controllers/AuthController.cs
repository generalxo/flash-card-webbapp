using flash_card_webbapp.Server.Helpers;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/auth")]
    [Authorize(Roles = RoleName.Admin)]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;

        public AuthController(UserService userService)
        {
            _userService = userService;
        }

        //[ValidateAntiForgeryToken] ADD ME!!!

        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto requestModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Sorry, it did not work this time");

                var user = await _userService.RegisterUser(requestModel);
                if (user == null)
                    return BadRequest("Sorry, it did not work this time");

                if (!await _userService.AddRoleToUser(user, RoleName.User))
                {
                    // Delete the user here if the role was not added. User requires a role for Authorization
                    return BadRequest("Sorry, it did not work this time");
                }

                return Ok("User created successfully");
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return BadRequest("Sorry, it did not work this time");
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login(LogInRequestDto logInRequestDto)
        {
            // test@test.com Test123
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Sorry, it did not work this time");

                var token = await _userService.LoginUser(logInRequestDto);
                if (string.IsNullOrEmpty(token))
                    return BadRequest("Sorry, it did not work this time");

                var response = new
                {
                    Token = token,
                    Info = "Logged in successfully"
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("logout")]
        public IActionResult Logout()
        {
            try
            {
                Response.Cookies.Append("token", "", new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTime.Now.AddDays(-1)
                });

                return Ok("Logged out successfully");
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest("Logout failed");
        }

    }
}
