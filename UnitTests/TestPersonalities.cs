using PersonalityBaseballCards.Models;

namespace UnitTests
{
    public class TestPersonalities
    {
        private int personalityCount = 16;

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void BuilderBuildsPersonalityList()
        {
            IEnumerable<IPersonality> personalities = PersonalitiesBuilder.Personalities;
            Assert.That(personalityCount, Is.EqualTo(personalities.Count()));
        }

    }
}