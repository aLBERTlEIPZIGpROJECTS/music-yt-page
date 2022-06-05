import { UserAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
export const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
        await logout()
        navigate("/")
        console.log("you are out")
    }
    catch (error) {
        console.error(error.message)
    }
  }
  return (
    <>
      <h2>Account</h2>
      {user && <p>User Email {user.email}</p>}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};
