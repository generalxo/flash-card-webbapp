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

        public CardController(CardService cardService, UserService userService)
        {
            _userService = userService;
            _cardService = cardService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCards()
        {
            try
            {
                var cards = await _cardService.GetAllCards();

                if (cards is null)
                    return NotFound();

                var response = cards.Select(card => new GetCardResponseDto
                {
                    Title = card.Title,
                    Question = card.Question,
                    Answer = card.Answer,
                    Streak = card.Streak
                });

                if(response == null)
                    return NotFound();

                return Ok(response);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
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

                var result = await _cardService.CreateCard(requestDto, userId);
                if(result == 0)
                    return BadRequest();

                return Ok("Card succesfully created");
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }
    }
}
