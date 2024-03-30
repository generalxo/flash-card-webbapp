using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace flash_card_webbapp.Server.Models.DbModels
{
    public class CardModel
    {
        // Primary Key
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        // Properties
        [Required]
        [MaxLength(100)]
        public string? Title { get; set; }
        [Required]
        [MaxLength(500)]
        public string? Question { get; set; }
        [Required]
        [MaxLength(500)]
        public string? Answer { get; set; }
        public int Streak { get; set; } = 0;
        public bool IsReversible { get; set; } = false;

        // Foreign Key
        public Guid DeckId { get; set; }
        // Navigation Props
        public virtual DeckModel Decks { get; set; }
    }
}