using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;

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
    }
}
