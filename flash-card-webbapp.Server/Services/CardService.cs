using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Repos;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Services
{
    public class CardService
    {
        private readonly CardRepository _cardRepository;
        private readonly DeckService _deckService;
        private readonly UserService _userService;
        public CardService(CardRepository cardRepository, DeckService deckService, UserService userService)
        {
            _userService = userService;
            _cardRepository = cardRepository;
            _deckService = deckService;
        }

        public async Task<IQueryable<CardModel>?> GetAllCards()
        {
            var cards = await _cardRepository.GetAllAsync();

            if(cards is null)
                return null;

            if (!cards.Any())
                return null;

            return cards;
        }

        public async Task<int> CreateCard(CreateCardRequestDto requestModel, string userId)
        {
            try
            {
                var user = await _userService.GetUserById(userId);
                if (user is null)
                    return 0;

                if (await _deckService.IsDeckOwner(requestModel.DeckId, user))
                {
                    CardModel newCard = new();
                    newCard.DeckId = requestModel.DeckId;
                    newCard.Title = requestModel.Title;
                    newCard.Question = requestModel.Question;
                    newCard.Answer = requestModel.Answer;
                    newCard.BlankPos = requestModel.BlankPos;
                    newCard.OptionString = requestModel.OptionString;

                    await _cardRepository.CreateAsync(newCard);
                    int result = await _cardRepository.SaveAsync();

                    return result;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return 0;
        }
    }
}
