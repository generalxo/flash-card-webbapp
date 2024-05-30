using flash_card_webbapp.Server.Helpers;
using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserModel, IdentityRole, string>
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

            var userRoleId = Guid.NewGuid().ToString();
            var adminRoleId = Guid.NewGuid().ToString();

            var roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Id = userRoleId,
                    ConcurrencyStamp = userRoleId,
                    Name = RoleName.User,
                    NormalizedName = RoleName.User.ToUpper()
                },
                new IdentityRole
                {
                    Id = adminRoleId,
                    ConcurrencyStamp = adminRoleId,
                    Name = RoleName.Admin,
                    NormalizedName = RoleName.Admin.ToUpper()
                }
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);

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
