using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        //Database Tables
        public DbSet<CardModel> Cards { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
