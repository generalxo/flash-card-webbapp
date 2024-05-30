using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class RegisterRequestDto
    {
        [Required]
        [NotNull]
        [MinLength(1)] // Change me to 2 or 3 later!
        public string? Username { get; set; }

        [Required]
        [NotNull]
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        
        [Required]
        [NotNull]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
