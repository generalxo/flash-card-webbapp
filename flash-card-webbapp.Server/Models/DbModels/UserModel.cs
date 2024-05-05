using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace flash_card_webbapp.Server.Models.DbModels
{
    public class UserModel : IdentityUser
    {
        // Inherits from IdentityUser

        // Navigation Props
        public List<DeckModel> Decks { get; set; }
    }
}
