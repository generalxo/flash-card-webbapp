using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace flash_card_webbapp.Server.Models.DbModels
{
    public class UserModel
    {
        // Primary Key
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        // Properties
        [Required]
        [NotNull]
        public string Name { get; set; }

        // Navigation Props
        public List<DeckModel> Decks { get; set; }
    }
}
