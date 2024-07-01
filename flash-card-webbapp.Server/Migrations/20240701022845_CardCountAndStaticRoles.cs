using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class CardCountAndStaticRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CardCount",
                table: "Decks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardCount",
                table: "Decks");
        }
    }
}
