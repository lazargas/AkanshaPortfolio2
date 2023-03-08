import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hey from "@/components/atoms/Hey/Hey"
import Text1 from "@/components/atoms/Text1/Text1";
import SunnyButton from "@/components/atoms/SunnyButton/SunnyButton";
import Intro from "@/components/molecules/Intro/Intro";
import About from "@/components/molecules/About/About";
import HomePage from "@/components/organisms/Home/Home"
import Navbar from "@/components/organisms/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <HomePage/>
    </>
  );
}
