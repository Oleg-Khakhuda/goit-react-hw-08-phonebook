import { Navigate } from "react-router";

export function PublicRouter({ isAuth, component: Component }) {
    return (
        <>
            <h2>PUBKIC</h2>
            {isAuth ? <Navigate to='/' /> :<Component />}
        </>
    )
}