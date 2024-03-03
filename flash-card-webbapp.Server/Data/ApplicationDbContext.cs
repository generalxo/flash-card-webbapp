﻿using flash_card_webbapp.Server.Models.DbModels;
using Microsoft.EntityFrameworkCore;

namespace flash_card_webbapp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options) { }

        // Entities
        public DbSet<CardModel> Cards { get; set; }
        public DbSet<DeckModel> Decks { get; set; }

        // Mapping Foreign Keys
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Cards
            modelBuilder.Entity<CardModel>()
                .HasOne(c => c.Decks)
                .WithMany(d => d.Cards)
                .HasForeignKey(c => c.DeckId);
        }
    }
}