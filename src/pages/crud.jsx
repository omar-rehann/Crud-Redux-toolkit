import Name from "../component/name/name";
import Header from "../component/Header/header";
import Crud from "../component/crud/crud";
import React, {useCallback } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getposts } from "../redux toolkit/slice";
import { deleteposts } from "../redux toolkit/slice";

function Crudapp() {
  const { isloading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);
const deletedata=useCallback((id)=>dispatch(deleteposts(id)),[dispatch])
  return (
    <>
      <Header />
      <Name />
      <Crud isloading={isloading} posts={posts} error={error} deletedata={deletedata} />
    </>
  );
}

export default Crudapp;
