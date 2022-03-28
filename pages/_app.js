import "../styles/globals.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router);
  return <Component {...pageProps} />;
}

export default MyApp;
