using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class DeckFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Decks_AspNetUsers_UsersId",
                table: "Decks");

            migrationBuilder.DropIndex(
                name: "IX_Decks_UsersId",
                table: "Decks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "25a26922-ecf2-4d80-a5f9-b95cc342f58f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a93b881f-08c2-42a2-9a5b-2297f480b5e9");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "Decks");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Decks",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d", "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d", "Admin", "ADMIN" },
                    { "cc920421-a74e-4538-ac62-4dd207b93652", "cc920421-a74e-4538-ac62-4dd207b93652", "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Decks_UserId",
                table: "Decks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Decks_AspNetUsers_UserId",
                table: "Decks",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Decks_AspNetUsers_UserId",
                table: "Decks");

            migrationBuilder.DropIndex(
                name: "IX_Decks_UserId",
                table: "Decks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cc920421-a74e-4538-ac62-4dd207b93652");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Decks",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "UsersId",
                table: "Decks",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "25a26922-ecf2-4d80-a5f9-b95cc342f58f", "25a26922-ecf2-4d80-a5f9-b95cc342f58f", "User", "USER" },
                    { "a93b881f-08c2-42a2-9a5b-2297f480b5e9", "a93b881f-08c2-42a2-9a5b-2297f480b5e9", "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Decks_UsersId",
                table: "Decks",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Decks_AspNetUsers_UsersId",
                table: "Decks",
                column: "UsersId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
