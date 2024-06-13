using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Repos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Services
{
    public class DeckService
    {
        private readonly DeckRepository _deckRepository;
        public DeckService(DeckRepository deckRepository)
        {
            _deckRepository = deckRepository;
        }

        public async Task<IQueryable<DeckModel>?> GetAllDecks()
        {
            var decks = await _deckRepository.GetAllAsync();

            if (decks is null)
                return null;

            if (!decks.Any())
                return null;

            return decks;
        }

        public async Task<bool> CreateDeck(CreateDeckRequestDto requestDto, string userId)
        {
            // Fix me once stuff is working
            DeckModel newDeck = new();
            newDeck.Title = requestDto.Title;
            newDeck.UserId = userId;

            await _deckRepository.CreateAsync(newDeck);
            int result = await _deckRepository.SaveAsync();

            if (result is 0)
                return false;

            return true;
        }

        public async Task<bool> IsDeckOwner(Guid deckId, IdentityUser user)
        {
            var deckQuery = await _deckRepository.GetByConditionAsync(x => x.Id == deckId);
            if (deckQuery is null)
                return false;

            var deck = await deckQuery.SingleAsync();

            if (deck.UserId.ToString() != user.Id)
                return false;

            return true;
        }

    }
}
