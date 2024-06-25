using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace flash_card_webbapp.Server.Migrations
{
    /// <inheritdoc />
    public partial class CardOptionStringMaxLength : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cc920421-a74e-4538-ac62-4dd207b93652");

            migrationBuilder.AlterColumn<string>(
                name: "OptionString",
                table: "Cards",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "23bce2e1-62b8-460e-9407-ea9afff34c7f", "23bce2e1-62b8-460e-9407-ea9afff34c7f", "User", "USER" },
                    { "415b4160-d9b1-4e3c-bcdf-738b5cbd0648", "415b4160-d9b1-4e3c-bcdf-738b5cbd0648", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23bce2e1-62b8-460e-9407-ea9afff34c7f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "415b4160-d9b1-4e3c-bcdf-738b5cbd0648");

            migrationBuilder.AlterColumn<string>(
                name: "OptionString",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldMaxLength: 500,
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d", "4ed1d7ea-4dbe-47c7-bcff-43ed28b7fa0d", "Admin", "ADMIN" },
                    { "cc920421-a74e-4538-ac62-4dd207b93652", "cc920421-a74e-4538-ac62-4dd207b93652", "User", "USER" }
                });
        }
    }
}
