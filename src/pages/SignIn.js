import {getFirestore} from "firebase/app"
export const SignIn = () => {
  return (
    <>
      <h2>Sign In</h2>
      <form action="">
          <label htmlFor="email">Email 
            <input type="email" />
          </label>
          <button>Send</button>
      </form>
    </>
  );
};
