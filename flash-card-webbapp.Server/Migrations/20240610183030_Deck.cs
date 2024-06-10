using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class Deck : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Decks_AspNetUsers_UserModelId",
                table: "Decks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35b34ce2-9e6f-4248-b6e7-d592f3b87739");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "60919699-9cf5-4840-b682-e3d773bd4008");

            migrationBuilder.RenameColumn(
                name: "UserModelId",
                table: "Decks",
                newName: "UsersId");

            migrationBuilder.RenameIndex(
                name: "IX_Decks_UserModelId",
                table: "Decks",
                newName: "IX_Decks_UsersId");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Decks",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "25a26922-ecf2-4d80-a5f9-b95cc342f58f", "25a26922-ecf2-4d80-a5f9-b95cc342f58f", "User", "USER" },
                    { "a93b881f-08c2-42a2-9a5b-2297f480b5e9", "a93b881f-08c2-42a2-9a5b-2297f480b5e9", "Admin", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Decks_AspNetUsers_UsersId",
                table: "Decks",
                column: "UsersId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Decks_AspNetUsers_UsersId",
                table: "Decks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "25a26922-ecf2-4d80-a5f9-b95cc342f58f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a93b881f-08c2-42a2-9a5b-2297f480b5e9");

            migrationBuilder.RenameColumn(
                name: "UsersId",
                table: "Decks",
                newName: "UserModelId");

            migrationBuilder.RenameIndex(
                name: "IX_Decks_UsersId",
                table: "Decks",
                newName: "IX_Decks_UserModelId");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Decks",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35b34ce2-9e6f-4248-b6e7-d592f3b87739", "35b34ce2-9e6f-4248-b6e7-d592f3b87739", "User", "USER" },
                    { "60919699-9cf5-4840-b682-e3d773bd4008", "60919699-9cf5-4840-b682-e3d773bd4008", "Admin", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Decks_AspNetUsers_UserModelId",
                table: "Decks",
                column: "UserModelId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
