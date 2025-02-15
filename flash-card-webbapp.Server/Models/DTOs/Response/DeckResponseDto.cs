namespace flash_card_webbapp.Server.Models.DTOs.Response
{
    public class DeckResponseDto
    {
        public string? Id { get; set; }
        public string? Title { get; set; }
        public int CardCount { get; set; }
    }

    public class DecksResponseDto
    {
        public DeckResponseDto[] Decks { get; set; }
    }

}
