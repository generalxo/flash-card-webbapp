namespace flash_card_webbapp.Server.Models.DTOs.Response
{
    public class GetCardResponseDto
    {
        public string? Title { get; set; }
        public string? Question { get; set; }
        public string? Answer { get; set; }
        public int Streak { get; set; }
        public bool IsReversible { get; set; }
    }
}
