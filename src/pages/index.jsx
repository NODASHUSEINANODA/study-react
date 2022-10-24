import { Main } from "../components/Main";
import Head from "next/head";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  
  const handleClick = useCallback((e) => {
    // console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    console.log(count);
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log(count);
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
