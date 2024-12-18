import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const handleLogout = () => {
    logoutUser(userInfo)
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
