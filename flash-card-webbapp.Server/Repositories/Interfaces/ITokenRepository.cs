using Microsoft.AspNetCore.Identity;

namespace flash_card_webbapp.Server.Repositories.Interfaces
{
    public interface ITokenRepository
    {
        string CreateJWTToken(IdentityUser user, List<string> roles);

        public string? ParseTokenToUserId(string token);
    }
}
