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
        private readonly UserService _userService;
        public DeckService(DeckRepository deckRepository, UserService userService)
        {
            _deckRepository = deckRepository;
            _userService = userService;
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
            try
            {
                DeckModel newDeck = new();
                newDeck.Title = requestDto.Title;
                newDeck.UserId = userId;

                await _deckRepository.CreateAsync(newDeck);
                int result = await _deckRepository.SaveAsync();

                if (result is 0)
                    return false;

                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return false;
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


        public async Task<List<DeckModel>?> GetDecks(string token)
        {
            try
            {
                string? userId = _userService.GetTokenUserId(token);
                if (string.IsNullOrEmpty(userId))
                    return null;

                var query = await _deckRepository.GetByConditionAsync(x => x.UserId == userId);
                if(query == null || !query.Any())
                    return null;

                var decks = await query.ToListAsync();

                return decks;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return null;
        }

    }
}
