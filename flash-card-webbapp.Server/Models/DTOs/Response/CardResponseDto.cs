using flash_card_webbapp.Server.Models.DbModels;
using System.ComponentModel.DataAnnotations;

namespace flash_card_webbapp.Server.Models.DTOs.Response
{
    public class CardResponseDto
    {
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Question { get; set; }
        [Required]
        public string? Answer { get; set; }
        [Required]
        public string? OptionString { get; set; }
        [Required]
        public int Streak { get; set; }
        [Required]
        public int BlankPos { get; set; }

        public CardResponseDto(CardModel cardModel)
        {
            Question = cardModel.Question;
            Answer = cardModel.Answer;
            OptionString = cardModel.OptionString;
            Streak = cardModel.Streak;
            BlankPos = cardModel.BlankPos;
        }
    }
}
