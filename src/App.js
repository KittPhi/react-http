import React, { Component } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <p>POST data to an API from React: see in dev-tools</p>
      <PostForm />
      <div>GET Request, then render data to React: see below</div>
      <PostList />
    </div>
  );
}

export default App;
