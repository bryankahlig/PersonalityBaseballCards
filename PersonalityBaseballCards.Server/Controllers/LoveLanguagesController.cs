using Microsoft.AspNetCore.Mvc;
using PersonalityBaseballCards.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalityBaseballCards.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoveLanguagesController : ControllerBase
    {
        private static IEnumerable<ILoveLanguage> LoveLanguages = LoveLanguagesBuilder.LoveLanguages;

        // GET: api/<LoveLanguagesController>
        [HttpGet]
        public IEnumerable<ILoveLanguage> Get()
        {
            return LoveLanguages;
        }

        // GET api/<LoveLanguagesController>/5
        [HttpGet("{name}")]
        public IEnumerable<ILoveLanguage> Get(string name)
        {
            return LoveLanguages.Where(x => x.Name.ToLower().Contains(name.ToLower()));
        }
    }
}
