using Microsoft.AspNetCore.Mvc;
using PersonalityBaseballCards.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalityBaseballCards.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalityController : ControllerBase
    {
        private static IEnumerable<IPersonality> Personalities = PersonalitiesBuilder.Personalities;

        // GET: api/<PersonalityController>
        [HttpGet]
        public IEnumerable<IPersonality> Get()
        {
            return Personalities;
        }

        // GET api/<PersonalityController>/5
        [HttpGet("{code}")]
        public IPersonality Get(string code)
        {
            return Personalities.Where(x => x.Code.ToLower().Equals(code.ToLower())).First();
        }
    }
}
