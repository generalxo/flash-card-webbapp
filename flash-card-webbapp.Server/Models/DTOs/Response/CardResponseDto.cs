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
            Title = cardModel.Title;
            Question = cardModel.Question;
            Answer = cardModel.Answer;
            OptionString = cardModel.OptionString;
            Streak = cardModel.Streak;
            BlankPos = cardModel.BlankPos;
        }
    }

    public class CardListResponseDto
    {
        [Required]
        public List<CardResponseDto>? Cards { get; set; }

        public CardListResponseDto(List<CardModel> cards)
        {
            new CardListResponseDto(cards)
            {
                Cards = cards.Select(card => new CardResponseDto(card)).ToList()
            };
        }
    }
}
