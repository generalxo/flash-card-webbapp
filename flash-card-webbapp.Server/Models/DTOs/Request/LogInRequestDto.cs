using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class LogInRequestDto
    {
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
