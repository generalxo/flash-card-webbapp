using flash_card_webbapp.Server.Migrations;
using System.ComponentModel.DataAnnotations;
using static flash_card_webbapp.Server.Models.MiscModels.Enums;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class CreateCardRequestDto
    {
        [Required(ErrorMessage = "DeckId is requiered")]
        public string? DeckId { get; set; }
        
        [Required(ErrorMessage = "Question is requiered")]
        public string? Question { get; set; }
        
        [Required(ErrorMessage = "Answer is requiered")]
        public string? Answer { get; set; }
        
        [Required(ErrorMessage = "Strictness is requiered")]
        public StrictnessLevel Strictness { get; set; }
        
        public string? OptionString { get; set; }
    }
}
