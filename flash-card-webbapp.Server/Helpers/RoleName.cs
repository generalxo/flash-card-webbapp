namespace flash_card_webbapp.Server.Helpers
{
    public class RoleName
    {
        public const string Admin = "Admin";
        public const string User = "User";

        public List<string> RoleNamesLst = [Admin, User];

        public List<string> GetRoleNamesLstStr()
        {
            return RoleNamesLst;
        }

        public string? GetRoleNameByString(string roleName)
        {
            for (int i = 0; i < RoleNamesLst.Count; i++)
            {
                if (roleName.Equals(RoleNamesLst[i], StringComparison.CurrentCultureIgnoreCase))
                {
                    return RoleNamesLst[i];
                }
            }
            return null;
        }
    }
}
