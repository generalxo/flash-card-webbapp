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
                var response = new ResponseDto<DecksResponseDto>
                {
                    Data = null,
                    Message = "Auth Error",
                    Success = false
                };

                if (string.IsNullOrEmpty(token))
                    return BadRequest(response);

                var userId = _userService.ParseTokenToUserId(token);
                if(string.IsNullOrEmpty(userId))
                    return BadRequest(response);

                var result = await _deckService.CreateDeck(requestDto, userId);
                if (result is false)
                {
                    response.Message = "Failed to create deck";
                    return Ok(response);
                }
                    
                response.Message = "Deck created";
                response.Success = true;
                return Ok(response);
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
                var response = new ResponseDto<DecksResponseDto>
                {
                    Data = null,
                    Message = "Auth Error",
                    Success = false
                };

                if(string.IsNullOrEmpty(token))
                    return BadRequest(response);

                var decks = await _deckService.GetDecks(token!);
                if (decks is null)
                {
                    response.Message = "No decks found";
                    response.Success = true;
                    return Ok(response);
                }

                var data = DecksToDto(decks);
                if (data != null && data.Decks.Length != 0)
                {
                    response.Success = true;
                    response.Message = "Decks found";
                    response.Data = data;
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }

        // Add update deck - update deck title is the only thing that can be updated currently.
        // Add delete deck - this needs to not only delete a deck but also all cards associated with it.

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
