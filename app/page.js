"use client"
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";
// import BlogItem from "./components/BlogItem";

export default function Home() {
  return (
    <>
      <h1>
        <Navbar />
        {/* <BlogItem/> */}
        <BlogList/>
      </h1>
    </>
  );
}
