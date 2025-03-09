using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.StaticFiles;

namespace PersonalityBaseballCards.Server.Controllers
{
    public class CORSSetup
    {
        public static CorsPolicyBuilder SetCORSPolicy(CorsPolicyBuilder corsPolicyBuilder)
        {
            return corsPolicyBuilder
                .WithOrigins("http://localhost:5173", "https://localhost:5173")
                .AllowAnyMethod()
                .AllowAnyHeader();
        }

        public const String CORSName = "MyAllowSpecificOrigins";
    }
}
