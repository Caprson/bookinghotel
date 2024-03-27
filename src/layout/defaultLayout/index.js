import HeaderUp from "../header/headerUp";
import FooterBot from "../footer/footerBottom";

function DefaultLayout({children}){

    return(
        <div className="">
            <div className=" header-wapper">
                <HeaderUp/>
            </div>
            <div>
                <div>
                    {children}
                </div>
            </div>
            <div>
                <FooterBot/>
            </div>
        </div>
    );
}
export default DefaultLayout;