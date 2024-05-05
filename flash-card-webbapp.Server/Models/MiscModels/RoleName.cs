using System.Runtime.CompilerServices;

namespace flash_card_webbapp.Server.Models.MiscModels
{
    public class RoleName
    {
        public List<string> RoleNamesLst = new List<string> { "Admin", "User" };

        public List<string> GetRoleNamesLstStr()
        {
            return RoleNamesLst;
        }

        public string GetRoleNameByString(string roleName)
        {
            for (int i = 0; i < RoleNamesLst.Count; i++)
            {
                if (roleName == RoleNamesLst[i] || roleName == RoleNamesLst[i].ToUpper())
                {
                    return RoleNamesLst[0];
                }
            }
            throw new Exception("Role name not found");
        }
    }
}
