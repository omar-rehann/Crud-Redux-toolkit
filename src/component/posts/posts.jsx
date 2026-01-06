import Name from "../name/name";
import Header from "../Header/header";
import "./posts.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertposts } from "../../redux toolkit/slice";
import Swal from "sweetalert2";

function Addposts() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSendPosts(e) {
    e.preventDefault();

    const data = {
      title,
      description,
    };

    if (title.trim() && description.trim()) {
      dispatch(insertposts(data));

      Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Post added successfully",
        confirmButtonColor: "#4f46e5",
      });

      // reset inputs
      setTitle("");
      setDescription("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields",
        confirmButtonColor: "#d33",
      });
    }
  }

  return (
    <>
      <Header />
            <Name />


      <form className="continerr" onSubmit={handleSendPosts}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />

        <button type="submit">Add Posts</button>
      </form>
    </>
  );
}

export default Addposts;
