using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace flash_card_webbapp.Server.Repositories.Repos
{
    public class TokenRepository : ITokenRepository
    {
        private readonly IConfiguration _configuration;
        private const string JwtKey = "Jwt:Key";
        private const string JwtIssuer = "Jwt:Issuer";
        private const string JwtAudience = "Jwt:Audience";
        private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler = new();


        public TokenRepository(IConfiguration configuration, JwtSecurityTokenHandler jwtSecurityTokenHandler)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _jwtSecurityTokenHandler = jwtSecurityTokenHandler;
        }


        public string CreateJWTToken(IdentityUser user, List<string> roles)
        {
            try
            {
                if(user == null)
                    return string.Empty;

                if (roles.Count < 1 || roles == null)
                    return string.Empty;

                // Claims
                var claims = new List<Claim>
                {
                    new("userId", user.Id)
                };
                claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

                // Security key from configuration
                var key = _configuration[JwtKey];
                if (string.IsNullOrEmpty(key))
                    throw new InvalidOperationException("JWT key is not configured.");

                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                // Create the token
                var token = new JwtSecurityToken(
                    _configuration[JwtIssuer],
                    _configuration[JwtAudience],
                    claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: credentials
                );

                return _jwtSecurityTokenHandler.WriteToken(token);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
            return string.Empty;
            
        }


        public string? ParseTokenToUserId(string input)
        {
            try
            {
                if (!input.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
                    return null;
                string token = input["Bearer ".Length..].Trim();

                var decodedToken = _jwtSecurityTokenHandler.ReadJwtToken(token);
                if(decodedToken == null)
                    return null;

                var userIdClaim = decodedToken.Claims.FirstOrDefault(c => c.Type == "userId");
                if(userIdClaim == null)
                    return null;

                string? userId = userIdClaim?.Value;
                if (string.IsNullOrEmpty(userId))
                    return null;

                return userId;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
            return null;
        }
    }
}
