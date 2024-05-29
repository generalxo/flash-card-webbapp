using System.Runtime.CompilerServices;

namespace flash_card_webbapp.Server.Models.MiscModels
{
    public class RoleName
    {
        public List<string> RoleNamesLst = new List<string> { "Admin", "User" };

        public const string Admin = "Admin";
        public const string User = "User";

        public List<string> GetRoleNamesLstStr()
        {
            return RoleNamesLst;
        }

        public string GetRoleNameByString(string roleName)
        {
            for (int i = 0; i < RoleNamesLst.Count; i++)
            {
                if (roleName.Equals(RoleNamesLst[i], StringComparison.CurrentCultureIgnoreCase))
                {
                    return RoleNamesLst[0];
                }
            }
            throw new Exception("Role name not found");
        }
    }
}
