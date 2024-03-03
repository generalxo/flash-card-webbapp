using flash_card_webbapp.Server.Data;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Repositories.Interfaces;

namespace flash_card_webbapp.Server.Repositories.Repos
{
    public class DeckRepository : BaseRepository<DeckModel>, IDeckRepository
    {
        public DeckRepository(ApplicationDbContext context) : base(context) { }
    }
}
