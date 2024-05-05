using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserModel>
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

            var userId = new Guid().ToString();
            var adminId = new Guid().ToString();

             var roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Id = userId,
                    ConcurrencyStamp = userId,
                    Name = "User",
                    NormalizedName = "USER"
                },
                new IdentityRole
                {
                    Id = adminId,
                    ConcurrencyStamp = adminId,
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                }
            };

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
