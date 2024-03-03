using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Repositories.Repos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/card")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly CardRepository _cardRepository;

        public CardController(CardRepository cardRepository)
        {
            _cardRepository = cardRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var querry = await _cardRepository.GetAllAsync();

                if (querry is null)
                    return NotFound();

                var response = querry.Select(querry => new GetCardResponseDto
                {
                    Title = querry.Title,
                    Question = querry.Question,
                    Answer = querry.Answer,
                    Streak = querry.Streak,
                    IsReversible = querry.IsReversible
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
        public async Task<IActionResult> CreateCard(CreateCardRequestDto requestDto)
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                CardModel card = new()
                {
                    Title = requestDto.Title,
                    Question = requestDto.Question,
                    Answer = requestDto.Answer,
                    IsReversible = requestDto.IsReversible,
                    DeckId = requestDto.DeckId
                };

                await _cardRepository.CreateAsync(card);
                int result = await _cardRepository.SaveAsync();

                if(result is 0)
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
