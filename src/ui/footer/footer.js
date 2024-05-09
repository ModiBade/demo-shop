import ScrollToTop from "@/modules/tools/scrollToTop/scrollToTop";
import Main from "./layouts/main/main";
import Certificates from "./layouts/certificates/certificates";
import Copyright from "./layouts/copyright/copyright";
import Atrributes from "./layouts/attributes/attributes";

const Footer = () => {

    return (
        <div className="bg-white shadow-xl">
            <Atrributes />
            <hr className="border-dashed" />
            <Main />
            <hr className="border-dashed" />
            <Certificates />
            <Copyright />
            <ScrollToTop />
        </div>
    )

}

export default Footer;