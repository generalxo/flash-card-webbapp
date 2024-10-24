using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Repos;
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


        public async Task<bool> IsDeckOwner(string deckId, string userId)
        {
            if(Guid.TryParse(deckId, out Guid deckGuid) == false)
                return false;

            var deckQuery = await _deckRepository.GetByConditionAsync(x => x.Id == deckGuid);
            if (deckQuery is null)
                return false;

            var deck = deckQuery.Single();

            if (deck.UserId.ToString() != userId)
                return false;

            return true;
        }


        public async Task<List<DeckModel>?> GetDecks(string token)
        {
            try
            {
                string? userId = _userService.ParseTokenToUserId(token);
                if (string.IsNullOrEmpty(userId))
                    return null;

                var query = await _deckRepository.GetByConditionAsync(x => x.UserId == userId);
                if(query == null || !query.Any())
                    return null;

                var decks = query.ToList();

                return decks;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return null;
        }


        public DeckModel? CreateDeckFromDto(CreateDeckRequestDto requestDto, string userId)
        {
            try
            {
                DeckModel newDeck = new DeckModel
                {
                    Id = Guid.Parse(requestDto.Id),
                    Title = requestDto.Title,
                    CardCount = requestDto.CardCount,
                    UserId = userId
                };

                return newDeck;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return null;
        }


        public CreateDeckRequestDto CreateDto(DeckModel deckModel)
        {
            CreateDeckRequestDto requestDto = new CreateDeckRequestDto
            {
                Id = deckModel.Id.ToString(),
                Title = deckModel.Title,
                CardCount = deckModel.CardCount
            };
            return requestDto;
        }

    }
}
