using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Models.DTOs.Request;
using flash_card_webbapp.Server.Models.DTOs.Response;
using flash_card_webbapp.Server.Models.MiscModels;
using flash_card_webbapp.Server.Repositories.Repos;
using flash_card_webbapp.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace flash_card_webbapp.Server.Controllers
{
    [Route("api/card")]
    [ApiController]
    [Authorize]
    public class CardController : ControllerBase
    {
        private readonly CardRepository _cardRepository;
        private readonly CardService _cardService;

        public CardController(CardRepository cardRepository, CardService cardService)
        {
            _cardRepository = cardRepository;
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
                    Streak = card.Streak,
                    IsReversible = card.IsReversible
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
