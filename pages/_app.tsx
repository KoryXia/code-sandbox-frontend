import "@arco-design/web-react/dist/css/arco.css";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}
export default MyApp