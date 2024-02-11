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
    }
}
