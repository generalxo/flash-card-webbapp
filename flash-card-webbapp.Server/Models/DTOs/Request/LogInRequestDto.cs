using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class LogInRequestDto
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
