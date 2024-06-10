using flash_card_webbapp.Server.Migrations;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Repos;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Services
{
    public class CardService
    {
        private readonly CardRepository _cardRepository;
        private readonly DeckService _deckService;
        public CardService(CardRepository cardRepository, DeckService deckService)
        {
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

        public async Task<int> CreateCard(CreateCardRequestDto requestModel, IdentityUser user)
        {
            try
            {
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
            // validate all dto properties before creating the card later

            return 0;


            
        }
    }
}
