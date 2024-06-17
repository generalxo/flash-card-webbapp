using flash_card_webbapp.Server.Helpers;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Repositories.Repos;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/deck")]
    [ApiController]
    [Authorize(Roles = RoleName.User)]
    public class DeckController : ControllerBase
    {
        private readonly DeckService _deckService;
        private readonly UserService _userService;

        public DeckController(DeckService deckService, UserService userService)
        {
            _deckService = deckService;
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                if(Request.Cookies.TryGetValue("userId", out var userId) is false)
                    return BadRequest();

                Debug.WriteLine(userId);

                return Ok();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateDeck([FromBody] CreateDeckRequestDto requestDto)
        {
            try
            {
                if(Request.Cookies.TryGetValue("userId", out var userId) is false)
                    return BadRequest();

                if(ModelState.IsValid is false)
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
