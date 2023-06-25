import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/Menu";
import {Toaster} from "react-hot-toast";
import Sidebar from "../components/Sidebar/Sidebar";
import AppLoadingContext from "../components/AppLoadingContext";


function MyApp({Component, pageProps}) {
    return <>
        <AppLoadingContext>
            {/*<Navbar/>*/}
            <Sidebar/>
            <Component {...pageProps} />
        </AppLoadingContext>
        <Toaster position={'bottom-left'}/>
    </>
}

export default MyApp
