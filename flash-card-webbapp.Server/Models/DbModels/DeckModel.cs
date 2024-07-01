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

        [Required]
        [NotNull]
        public int CardCount { get; set; }

        // Foreign Key's
        [Required]
        public string UserId { get; set; }

        //Navigation Props
        public virtual UserModel User { get; set; }
        public List<CardModel> Cards { get; set; }
    }
}
