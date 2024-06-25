using System.ComponentModel.DataAnnotations;

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
        [MaxLength(500)]
        public string? OptionString { get; set; }

        [Required]
        public int Streak { get; set; } = 0;
        [Required]
        public int BlankPos { get; set; } = 0;


        // Foreign Key
        public Guid DeckId { get; set; }

        // Navigation Props
        public virtual DeckModel Decks { get; set; }
    }
}