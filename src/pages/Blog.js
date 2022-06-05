import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
import { UserAuth } from "../components/AuthContext";

export const Blog = () => {
  const { title, setTitle} = useContext(TitleContext)
  const {user} = UserAuth()
  console.log(user)
  setTitle("Blog")
  return (
    <>
      <h1>Blog</h1>
    </>
  );
};
