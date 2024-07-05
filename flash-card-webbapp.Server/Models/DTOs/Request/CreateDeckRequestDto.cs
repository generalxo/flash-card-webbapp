using flash_card_webbapp.Server.Models.DbModels;
using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class CreateDeckRequestDto
    {
        [Required(ErrorMessage = "Id is requiered")]
        public string? Id { get; set; }
        [Required(ErrorMessage = "Title is requiered")]
        public string? Title { get; set; }
        [Required(ErrorMessage = "CardCount is requiered")]
        public int CardCount { get; set; }
    }
}
