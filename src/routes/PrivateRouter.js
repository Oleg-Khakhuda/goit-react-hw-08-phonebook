import { Navigate } from "react-router";

export function PrivateRouter({ isAuth, component: Component }) {
    return (
        <>
            <h2>PRIVATE</h2>
            {isAuth ? <Component /> : <Navigate to='/login'/>}
            
        </>
    )
}