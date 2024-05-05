using flash_card_webbapp.Server.Data;
using flash_card_webbapp.Server.Models.DbModels;
using flash_card_webbapp.Server.Repositories.Interfaces;

namespace flash_card_webbapp.Server.Repositories.Repos
{
    public class UserRepository : BaseRepository<UserModel>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context) { }
    }
}
