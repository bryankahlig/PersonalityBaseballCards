namespace PersonalityBaseballCards.Models
{
    public static class PersonalitiesBuilder
    {
        public static IEnumerable<IPersonality> Personalities => new List<Personality>
        {
            new Personality
            {
                Code = "INTJ",
                Name = "Architect",
                Description = "Imaginative and strategic thinkers, with a plan for everything."
            },
            new Personality
            {
                Code = "INTP",
                Name = "Logician",
                Description = "Innovative inventors with an unquenchable thirst for knowledge."
            },
            new Personality
            {
                Code = "INFJ",
                Name = "Advocate",
                Description = "Quiet and mystical, yet very inspiring and tireless idealists."
            },
            new Personality
            {
                Code = "INFP",
                Name = "Mediator",
                Description = "Poetic, kind and altruistic people, always eager to help a good cause."
            },
            new Personality
            {
                Code = "ISTJ",
                Name = "Logistician",
                Description = "Practical and fact-minded individuals, whose reliability cannot be doubted."
            },
            new Personality
            {
                Code = "ISTP",
                Name = "TODO",
                Description = "TODO."
            },
            new Personality
            {
                Code = "ISFJ",
                Name = "Defender",
                Description = "Very dedicated and warm protectors, always ready to defend their loved ones."
            },
            new Personality
            {
                Code = "ISFP",
                Name = "TODO",
                Description = "TODO."
            },
            new Personality
            {
                Code = "ENTJ",
                Name = "Commander",
                Description = "Bold, imaginative and strong-willed leaders, always finding a way - or making one."
            },
            new Personality
            {
                Code = "ENTP",
                Name = "Debater",
                Description = "Smart and curious thinkers who cannot resist an intellectual challenge."
            },
            new Personality
            {
                Code = "ENFJ",
                Name = "Protagonist",
                Description = "Charismatic and inspiring leaders, able to mesmerize their listeners."
            },
            new Personality
            {
                Code = "ENFP",
                Name = "Campaigner",
                Description = "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile."
            },
            new Personality
            {
                Code = "ESTJ",
                Name = "Executive",
                Description = "Excellent administrators, unsurpassed at managing things - or people."
            },
            new Personality
            {
                Code = "ESFJ",
                Name = "Consul",
                Description = "Extraordinarily caring, social and popular people, always eager to help"
            },
            new Personality
            {
                Code = "ESTP",
                Name = "TODO",
                Description = "TODO."
            },
            new Personality
            {
                Code = "ESFP",
                Name = "TODO",
                Description = "TODO."
            }
        };
    }
}
