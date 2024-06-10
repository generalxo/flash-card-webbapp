using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class Card : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c308c07b-a7c2-4d90-808e-0fd5423c4e20");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ccc0355c-262f-4a95-be79-23386d393a2f");

            migrationBuilder.DropColumn(
                name: "IsReversible",
                table: "Cards");

            migrationBuilder.AddColumn<string>(
                name: "UserModelId",
                table: "Decks",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BlankPos",
                table: "Cards",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "OptionString",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35b34ce2-9e6f-4248-b6e7-d592f3b87739", "35b34ce2-9e6f-4248-b6e7-d592f3b87739", "User", "USER" },
                    { "60919699-9cf5-4840-b682-e3d773bd4008", "60919699-9cf5-4840-b682-e3d773bd4008", "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Decks_UserModelId",
                table: "Decks",
                column: "UserModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Decks_AspNetUsers_UserModelId",
                table: "Decks",
                column: "UserModelId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Decks_AspNetUsers_UserModelId",
                table: "Decks");

            migrationBuilder.DropIndex(
                name: "IX_Decks_UserModelId",
                table: "Decks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35b34ce2-9e6f-4248-b6e7-d592f3b87739");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "60919699-9cf5-4840-b682-e3d773bd4008");

            migrationBuilder.DropColumn(
                name: "UserModelId",
                table: "Decks");

            migrationBuilder.DropColumn(
                name: "BlankPos",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "OptionString",
                table: "Cards");

            migrationBuilder.AddColumn<bool>(
                name: "IsReversible",
                table: "Cards",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c308c07b-a7c2-4d90-808e-0fd5423c4e20", "c308c07b-a7c2-4d90-808e-0fd5423c4e20", "User", "USER" },
                    { "ccc0355c-262f-4a95-be79-23386d393a2f", "ccc0355c-262f-4a95-be79-23386d393a2f", "Admin", "ADMIN" }
                });
        }
    }
}
