namespace PersonalityBaseballCards.Server.Models
{
    public static class LoveLanguagesBuilder
    {
        public static IEnumerable<ILoveLanguage> LoveLanguages => new List<ILoveLanguage>
        {
            new LoveLanguage
            {
                Name = "Words of Affirmation",
                Description = "This language uses words to affirm other people."
            },
            new LoveLanguage
            {
                Name = "Acts of Service",
                Description = "For these people, actions speak louder than words."
            },
            new LoveLanguage
            {
                Name = "Receiving Gifts",
                Description = "For some people, what makes them feel most loved is to receive a gift."
            },
            new LoveLanguage
            {
                Name = "Quality Time",
                Description = "This language is all about giving the other person your undivided attention."
            },
            new LoveLanguage
            {
                Name = "Physical Touch",
                Description = "To this person, nothing speaks more deeply than appropriate touch."
            }
        };
    }
}
