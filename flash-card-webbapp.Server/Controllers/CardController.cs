using flash_card_webbapp.Server.Models.DbModels;
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

                if (Request.Headers.TryGetValue("Authorization", out var token) is false)
                    return BadRequest();

                if(string.IsNullOrEmpty(token))
                    return BadRequest();

                var userId = _userService.ParseTokenToUserId(token!);
                if(string.IsNullOrEmpty(userId))
                    return BadRequest();

                if (!await _cardService.CreateCard(requestDto, userId))
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
        public async Task<IActionResult> GetCards(string deckId, [FromHeader(Name = "Authorization")] string token)
        {
            try
            {
                if (string.IsNullOrEmpty(deckId))
                    return BadRequest();

                if (string.IsNullOrEmpty(token))
                    return BadRequest();

                var userId = _userService.ParseTokenToUserId(token!);
                if (string.IsNullOrEmpty(userId))
                    return BadRequest();

                bool isDeckOwner = await _deckService.IsDeckOwner(deckId, userId);
                if (isDeckOwner is false)
                    return BadRequest();

                List<CardModel>? cardlst = await _cardService.GetCardsByDeckId(deckId);
                if (cardlst == null || cardlst.Count == 0)
                    return Ok("No cards found");

                var cardDto = _cardService.CardLstToDto(cardlst);
                if (cardDto is not null)
                {
                    var response = new { Cards = cardDto };
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


        // ADD UPDATE CARD ENDPOINT

        // ADD DELETE CARD ENDPOINT

    }
}
