using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace flash_card_webbapp.Server.Models.DbModels
{
    public class DeckModel
    {
        // Primary Key
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        // Properties
        [Required]
        [MaxLength(100)]
        [NotNull]
        public string? Title { get; set; }

        // Navigation Properties
        public List<CardModel> Cards { get; set; }
    }
}
