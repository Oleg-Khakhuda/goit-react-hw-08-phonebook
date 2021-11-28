
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <div>
                <NavLink                  
                    to="/register">Registration
                </NavLink>
                <NavLink
                    to="/login">Login
                </NavLink>
        </div>
    )
}