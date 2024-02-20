namespace PersonalityBaseballCards.Server.Models
{
    public interface IPersonality
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
