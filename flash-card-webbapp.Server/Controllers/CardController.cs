using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Repositories.Repos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/[controller]")]
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
            // Test Endpoint
            try
            {
                var querry = await _cardRepository.GetAllAsync();
                return Ok(querry);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> CreateCard(CreateCardRequestDto requestDto)
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                CardModel newCard = new();
                newCard.Title = requestDto.Title;
                newCard.Question = requestDto.Question;
                newCard.Answer = requestDto.Answer;
                newCard.IsReversible = requestDto.IsReversible;

                await _cardRepository.CreateAsync(newCard);
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
