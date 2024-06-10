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
    [Route("api/card")]
    [ApiController]
    [Authorize]
    public class CardController : ControllerBase
    {
        private readonly CardRepository _cardRepository;
        private readonly CardService _cardService;
        private readonly UserRepository _userRepo;

        public CardController(CardRepository cardRepository, CardService cardService, UserRepository userRepo)
        {
            _cardRepository = cardRepository;
            _cardService = cardService;
            _userRepo = userRepo;
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
        public async Task<IActionResult> CreateCard(CreateCardRequestDto requestDto, Guid userId) // this will change to get the user from the token, but for now it will be passed in
        {
            try
            {
                if(ModelState.IsValid is false)
                    return BadRequest();

                var user = await _userRepo.GetById(userId);
                if (user is not null)
                {
                    int lineChanges = await _cardService.CreateCard(requestDto, user);
                    if(lineChanges == 0)
                        return BadRequest();
                }

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
