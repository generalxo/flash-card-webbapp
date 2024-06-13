using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

//namespace flash_card_webbapp.Server.Repositories.Repos
//{
//    public class TokenRepository : ITokenRepository
//    {
//        private readonly IConfiguration _configuration;

//        public TokenRepository(IConfiguration configuration)
//        {
//            _configuration = configuration;
//        }
//        public string CreateJWTToken(IdentityUser user, List<string> roles)
//        {
//            // Create claims
//            var claims = new List<Claim>();
//            claims.Add(new Claim(ClaimTypes.Name, user.UserName));
//            claims.Add(new Claim(ClaimTypes.Email, user.Email));

//            for (int i = 0; i < roles.Count; i++)
//            {
//                claims.Add(new Claim(ClaimTypes.Role, roles[i]));
//            }
//            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
//            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
//            var token = new JwtSecurityToken(
//                _configuration["Jwt:Issuer"],
//                _configuration["Jwt:Audience"],
//                claims,
//                expires: DateTime.Now.AddMinutes(20),
//                signingCredentials: credentials);
//            return new JwtSecurityTokenHandler().WriteToken(token);
//        }
//    }
//}

namespace flash_card_webbapp.Server.Repositories.Repos
{
    public class TokenRepository : ITokenRepository
    {
        private readonly IConfiguration _configuration;
        private const string JwtKey = "Jwt:Key";
        private const string JwtIssuer = "Jwt:Issuer";
        private const string JwtAudience = "Jwt:Audience";

        public TokenRepository(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public string CreateJWTToken(IdentityUser user, List<string> roles)
        {
            ArgumentNullException.ThrowIfNull(user);
            ArgumentNullException.ThrowIfNull(roles);

            // Claims
            var claims = new List<Claim>
            {
                new(ClaimTypes.Name, user.UserName),
                new(ClaimTypes.Email, user.Email)
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
                expires: DateTime.Now.AddMinutes(20),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}