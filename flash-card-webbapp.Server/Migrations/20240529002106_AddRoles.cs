using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c308c07b-a7c2-4d90-808e-0fd5423c4e20", "c308c07b-a7c2-4d90-808e-0fd5423c4e20", "User", "USER" },
                    { "ccc0355c-262f-4a95-be79-23386d393a2f", "ccc0355c-262f-4a95-be79-23386d393a2f", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c308c07b-a7c2-4d90-808e-0fd5423c4e20");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ccc0355c-262f-4a95-be79-23386d393a2f");
        }
    }
}
