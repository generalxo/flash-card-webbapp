using Microsoft.AspNetCore.Identity;

namespace flash_card_webbapp.Server.Models.DbModels
{
    public class UserModel : IdentityUser
    {
        // Inherits from IdentityUser

        // Navigation Props
        public List<DeckModel> Decks { get; set; }
    }
}
