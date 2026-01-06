import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./slice";
const store=configureStore({
   reducer:{
     posts:postreducer
   }
});
export default store