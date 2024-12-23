﻿using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Repositories.Repos;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Services
{
    public class CardService
    {
        private readonly CardRepository _cardRepository;
        private readonly DeckService _deckService;
        private readonly UserService _userService;
        private readonly DeckRepository _deckRepository;
        public CardService(CardRepository cardRepository, DeckService deckService, UserService userService, DeckRepository deckRepository)
        {
            _userService = userService;
            _cardRepository = cardRepository;
            _deckService = deckService;
            _deckRepository = deckRepository;
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

        public async Task<bool> CreateCard(CreateCardRequestDto requestModel, string userId)
        {
            try
            {
                if (!Guid.TryParse(requestModel.DeckId, out Guid deckId))
                    return false;

                if (await _deckService.IsDeckOwner(deckId.ToString(), userId))
                {
                    var deck = await _deckRepository.GetById(deckId);
                    if (deck is null)
                        return false;

                    CardModel newCard = new();
                    newCard.DeckId = deckId;
                    newCard.Question = requestModel.Question;
                    newCard.Answer = requestModel.Answer;
                    if (!string.IsNullOrEmpty(requestModel.OptionString))
                    {
                        newCard.OptionString = requestModel.OptionString;
                    }
                    newCard.Strictness = requestModel.Strictness;

                    await _cardRepository.CreateAsync(newCard);
                    deck.CardCount++;
                    _deckRepository.Update(deck);

                    int changes = await _cardRepository.SaveAsync();
                    if (changes < 1)
                        return false;

                    return true;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return false;
        }

        public async Task<CardModel?> GetCardById(Guid cardId)
        {
            var card = await _cardRepository.GetById(cardId);

            if (card is null)
                return null;

            return card;
        }

        public async Task<List<CardModel>?> GetCardsByDeckId(string deckId)
        {
            if (Guid.TryParse(deckId, out Guid deckGuid) == false)
                return null;

            var query = await _cardRepository.GetByConditionAsync(x => x.DeckId == deckGuid);
            if (query is null)
                return null;

            var cards = query.ToList();
            if (cards.Count == 0)
                return null;

            return cards;
        }

        public List<CardResponseDto> CardLstToDto(List<CardModel> cards)
        {
            return cards.Select(card => new CardResponseDto(card)).ToList();
        }
    }
}
