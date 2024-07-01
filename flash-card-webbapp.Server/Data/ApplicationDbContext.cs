using flash_card_webbapp.Server.Helpers;
using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserModel, IdentityRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // Entities
        //public DbSet<UserModel> Users { get; set; }
        public DbSet<CardModel> Cards { get; set; }
        public DbSet<DeckModel> Decks { get; set; }

        // Role Guids
        private static readonly string userRoleId = "23bce2e1-62b8-460e-9407-ea9afff34c7f";
        private static readonly string adminRoleId = "415b4160-d9b1-4e3c-bcdf-738b5cbd0648";

        // Mapping Foreign Keys
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

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

            modelBuilder.Entity<DeckModel>()
                .HasOne(x => x.User)
                .WithMany(x => x.Decks)
                .HasForeignKey(x => x.UserId);

        }
    }
}
