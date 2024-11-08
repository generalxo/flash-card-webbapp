using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/deck")]
    [Authorize(Roles = "User")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        private readonly DeckService _deckService;
        private readonly UserService _userService;

        public DeckController(DeckService deckService, UserService userService)
        {
            _deckService = deckService;
            _userService = userService;
        }


        [HttpPost("create")]
        public async Task<IActionResult> CreateDeck(CreateDeckRequestDto requestDto, [FromHeader(Name = "Authorization")] string token)
        {
            try
            {
                if (string.IsNullOrEmpty(token))
                    return BadRequest();

                var userId = _userService.ParseTokenToUserId(token);
                if(string.IsNullOrEmpty(userId))
                    return BadRequest();

                var result = await _deckService.CreateDeck(requestDto, userId);
                if (result is false)
                    return BadRequest();

                return Ok();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


        [HttpGet("all")]
        public async Task<IActionResult> GetAllDecks([FromHeader(Name = "Authorization")] string token)
        {
            try
            {
                if(string.IsNullOrEmpty(token))
                    return BadRequest();

                var decks = await _deckService.GetDecks(token!);
                if (decks is null)
                    return NotFound();

                var response = DecksToDto(decks);

                if (response != null && response.Decks.Length != 0)
                    return Ok(response);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


        private static DeckResponseDto DeckToDto(DeckModel deck)
        {
            DeckResponseDto dto = new()
            {
                Id = deck.Id.ToString(),
                Title = deck.Title,
                CardCount = deck.CardCount
            };
            return dto;
        }


        private static DecksResponseDto DecksToDto(List<DeckModel> decks)
        {
            DecksResponseDto dto = new()
            {
                Decks = decks.Select(x => DeckToDto(x)).ToArray()
            };
            return dto;
        }

    }
}
