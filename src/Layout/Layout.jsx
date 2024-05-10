import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./layout.css"
import Footer from './../components/Footer/Footer';
import "../../src/index.css"
const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;