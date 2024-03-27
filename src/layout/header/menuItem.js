import { NavLink } from "react-router-dom";

function MenuItem({to,title}){
    return(
        <div className="flex items-center h-full ">
            <NavLink  to={to}>
                {title}
            </NavLink>
        </div>
    );
}

export default MenuItem;