using flash_card_webbapp.Server.Models.DbModels;
using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class CreateDeckRequestDto
    {
        [Required(ErrorMessage = "Title is requiered")]
        public string? Title { get; set; }
    }
}
