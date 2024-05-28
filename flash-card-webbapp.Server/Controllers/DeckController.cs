using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Repositories.Repos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/deck")]
    [ApiController]
    [Authorize]
    public class DeckController : ControllerBase
    {
        private readonly DeckRepository _deckRepository;

        public DeckController(DeckRepository deckRepository)
        {
            _deckRepository = deckRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var querry = await _deckRepository.GetAllAsync();

                if (querry is null)
                    return NotFound();

                var response = querry.Select(querry => new GetDeckResponseDto
                {
                    Title = querry.Title
                });

                return Ok(response);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateDeck(CreateDeckRequestDto requestDto)
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                DeckModel newDeck = new();
                newDeck.Title = requestDto.Title;

                await _deckRepository.CreateAsync(newDeck);
                int result = await _deckRepository.SaveAsync();

                if (result is 0)
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
