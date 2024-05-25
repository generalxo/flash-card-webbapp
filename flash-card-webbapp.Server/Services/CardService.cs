using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Repositories.Repos;

namespace flash_card_webbapp.Server.Services
{
    public class CardService
    {
        private readonly CardRepository _cardRepository;
        public CardService(CardRepository cardRepository)
        {
            _cardRepository = cardRepository;
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
    }
}
