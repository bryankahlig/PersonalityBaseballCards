namespace PersonalityBaseballCards.Models
{
    public class Person
    {
        public string Name { get; set; }

        public IPersonality Personality { get; set; }

        public ILoveLanguage LoveLanguage { get; set; }

        public Person()
        {
            Name = "";
            Personality = new Personality();
            LoveLanguage = new LoveLanguage();
        }
    }
}