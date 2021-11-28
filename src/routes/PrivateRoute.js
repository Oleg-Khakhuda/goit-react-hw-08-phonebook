import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export function PrivateRoute({ component: Component }) {
    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <>
            {isAuth ? <Component /> : <Navigate to='/login'/>}  
        </>
    )
}