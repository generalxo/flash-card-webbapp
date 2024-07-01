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
        public async Task<IActionResult> CreateDeck(CreateDeckRequestDto requestDto)
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                if (Request.Cookies.TryGetValue("token", out var token) is false)
                    return BadRequest();
                
                var userId = _userService.GetTokenUserId(token);
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
        public async Task<IActionResult> GetAllDecks()
        {
            try
            {
                if (Request.Cookies.TryGetValue("token", out var token) is false)
                    return BadRequest();

                var decks = await _deckService.GetDecks(token);
                if (decks is null)
                    return NotFound();

                var response = new DecksResponseDto
                {
                    Decks = decks.Select(x => new DeckResponseDto { Title = x.Title }).ToArray()
                };

                if (response != null && response.Decks.Length != 0)
                    return Ok(response);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }


    }
}
