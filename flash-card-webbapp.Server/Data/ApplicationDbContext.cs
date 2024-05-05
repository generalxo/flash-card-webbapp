using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        // Entities
        //public DbSet<UserModel> Users { get; set; }
        public DbSet<CardModel> Cards { get; set; }
        public DbSet<DeckModel> Decks { get; set; }

        // Mapping Foreign Keys
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Cards
            modelBuilder.Entity<CardModel>()
                .HasOne(c => c.Decks)
                .WithMany(d => d.Cards)
                .HasForeignKey(c => c.DeckId);

            //modelBuilder.Entity<DeckModel>()
            //    .HasOne(x => x.Users)
            //    .WithMany(x => x.Decks)
            //    .HasForeignKey(x => x.UserId);

        }
    }
}
