namespace PersonalityBaseballCards.Models
{
    public class LoveLanguage : ILoveLanguage
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public LoveLanguage()
        {
            Name = "";
            Description = "";
        }
    }
}