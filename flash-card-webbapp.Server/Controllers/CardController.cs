using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/card")]
    [ApiController]
    [Authorize(Roles = "User")]
    public class CardController : ControllerBase
    {
        private readonly CardService _cardService;
        private readonly UserService _userService;
        private readonly DeckService _deckService;

        public CardController(CardService cardService, UserService userService, DeckService deckService)
        {
            _userService = userService;
            _cardService = cardService;
            _deckService = deckService;
        }


        [HttpPost("create")]
        public async Task<IActionResult> CreateCard(CreateCardRequestDto requestDto)
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                if(Request.Cookies.TryGetValue("token", out var token) is false)
                    return BadRequest();

                var userId = _userService.GetTokenUserId(token);
                if(string.IsNullOrEmpty(token))
                    return BadRequest();

                if(!await _cardService.CreateCard(requestDto, userId))
                    return BadRequest();

                return Ok("Card succesfully created");
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


        [HttpGet("deck/{deckId}")]
        public async Task<IActionResult> GetCards(string deckId)
        {
            try
            {
                if (string.IsNullOrEmpty(deckId))
                    return BadRequest();

                if(Request.Cookies.TryGetValue("token", out var token) is false)
                    return BadRequest();

                var userId = _userService.GetTokenUserId(token);
                if (string.IsNullOrEmpty(token))
                    return BadRequest();

                bool isDeckOwner = await _deckService.IsDeckOwner(deckId, userId);
                if (isDeckOwner is false)
                    return BadRequest();

                var cards = await _cardService.GetCardsByDeckId(deckId);
                if (cards is null)
                    return NotFound();

                if (cards.Count == 0)
                    return Ok("No cards found");

                CardListResponseDto responseDto = new(cards);
                if(ModelState.IsValid)
                    return Ok(responseDto);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }
    }
}
