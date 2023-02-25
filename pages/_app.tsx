import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/Menu";
import {Toaster} from "react-hot-toast";


function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <link id='bootswatch-theme-stylesheet' rel="stylesheet" type="text/css"
                  href={'https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css'}/>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Toaster position={'bottom-left'}/>
    </>
}

export default MyApp
