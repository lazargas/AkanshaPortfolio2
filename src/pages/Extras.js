import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Extras.module.css";
import Navbar from "@/components/organisms/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Extras() {
  return (
    <>
     <Navbar/>
      <div className={styles.Container}>
        
        <div className={styles.D}>D</div>
        <div className={styles.e}>e</div>
        <div className={styles.i}>i</div>
        <div className={styles.s}>S</div>
        <div className={styles.g}>g</div>
        <div className={styles.N}>N</div>
        <div className={styles.Rectangle7}></div>
        <div className={styles.Rectangle8}></div>
        <div className={styles.Rectangle9}></div>
        <div className={styles.Rectangle10}></div>
        <div className={styles.Rectangle11}></div>
        <div className={styles.Rectangle12}></div>
        <div className={styles.Rectangle13}>
          DON’T THINK OUTSIDE THE BOX THINK WHAT YOU CAN DO WITH THE BOX
        </div>
        <div className={styles.Rectangle14}></div>
        <div className={styles.Rectangle15}></div>
      </div>
      <div className={styles.Ellipse1}></div>
      <div className={styles.Ellipse2}></div>
    </>
  );
}
