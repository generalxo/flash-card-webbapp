using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Services
{
    public class UserService
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly ITokenRepository _tokenRepository;
        public UserService(UserManager<UserModel> userManager, ITokenRepository tokenRepository)
        {
            _userManager = userManager;
            _tokenRepository = tokenRepository;
        }

        public async Task<string?> LoginUser(LogInRequestDto model)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user is null)
                    return null;

                if(await _userManager.CheckPasswordAsync(user, model.Password) is false)
                    return null;

                var roles = await _userManager.GetRolesAsync(user);
                if(roles is not null)
                {
                    var token = _tokenRepository.CreateJWTToken(user, [.. roles]);
                    if(string.IsNullOrEmpty(token))
                        return null;

                    return token;
                }
            }
            catch (Exception ex)
            {
                //Handle this better later with a logger
                Debug.WriteLine(ex.Message);
            }

            return null;
        }

        public async Task<UserModel?> RegisterUser(RegisterRequestDto model)
        {
            try
            {
                var user = new UserModel
                {
                    Email = model.Email,
                    UserName = model.Email
                };

                var identityResult = await _userManager.CreateAsync(user, model.Password);
                if(!identityResult.Succeeded)
                    return null;
                
                return user;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return null;
        }

        public async Task<bool> AddRoleToUser(UserModel user, string role)
        {
            var identityResult = await _userManager.AddToRoleAsync(user, role);
            return identityResult.Succeeded;
        }

        public string? GetTokenUserId(string token)
        {
            return _tokenRepository.GetTokenUserId(token);
        }
    }
}
