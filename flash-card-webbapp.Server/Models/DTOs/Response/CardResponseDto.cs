using flash_card_webbapp.Server.Models.DbModels;
using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Response
{
    public class CardResponseDto(CardModel cardModel)
    {
        [Required]
        public string? Question { get; set; } = cardModel.Question;
        [Required]
        public string? Answer { get; set; } = cardModel.Answer;
        [Required]
        public string? OptionString { get; set; } = cardModel.OptionString;
        [Required]
        public int Streak { get; set; } = cardModel.Streak;
        [Required]
        public int BlankPos { get; set; } = cardModel.BlankPos;
    }
}
