import { Link } from "react-router-dom";
import MenuItem from "./menuItem";

function HeaderUp(){
    return (
        <header className=" containerr flex justify-between items-center h-[96px]" >
            <div className=" flex items-center gap-24 h-full">
                {/* logo home */}
                <div className="">
                    <div className="">
                        <Link to={"/"} >Home</Link>
                    </div>
                    <div>
                        <span>
                            <span></span>
                            <img src="" alt="" />
                        </span>
                    </div>
                </div>
                {/* thanh điều hướng */}
                <div className="flex gap-14 items-center cursor-pointer h-full">
                    <MenuItem to={'/hotel'} title="Hotel" />
                    <MenuItem to={'/thingsToDo'} title="Things to Do" />
                    <MenuItem title="Enterprise" />
                    <MenuItem title="Partnership" />
                </div>
            </div>
            {/* đăng nhập đăng xuất */}
            <div className=" flex gap-10 items-center">
                <div className=" bg-cyan-200 border-4 border-cyan-200 flex items-center justify-center h-fit w-fit bottom font-bold">
                    <button>Sign up</button>
                </div>
                <div className=" border-cyan-200 border-4 flex items-center justify-center h-fit w-fit bottom font-bold">
                    <button>Login</button>
                </div>
            </div>
            
        </header>
    );
}
export default HeaderUp;