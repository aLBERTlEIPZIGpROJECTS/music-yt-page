import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const Blog = () => {
  const { title, setTitle} = useContext(TitleContext)
  setTitle("Blog")
  return (
    <>
      <h1>Blog</h1>
    </>
  );
};
