using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Request
{
    public class CreateCardRequestDto
    {
        [Required(ErrorMessage = "DeckId is requiered")]
        public Guid DeckId { get; set; }
        [Required(ErrorMessage = "Title is requiered")]
        public string? Title { get; set; }
        [Required(ErrorMessage = "Question is requiered")]
        public string? Question { get; set; }
        [Required(ErrorMessage = "Answer is requiered")]
        public string? Answer { get; set; }
        [Required(ErrorMessage = "BlankPos is requiered")]
        public int BlankPos { get; set; }
        public string? OptionString { get; set; }
    }
}
