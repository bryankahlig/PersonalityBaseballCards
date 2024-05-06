namespace PersonalityBaseballCards.Models
{
    public class Personality : IPersonality
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Personality()
        {
            Code = "";
            Name = "";
            Description = "";
        }
    }
}