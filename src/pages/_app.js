import Navbar from '@/components/organisms/Navbar/Navbar';
import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  
</style>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}
