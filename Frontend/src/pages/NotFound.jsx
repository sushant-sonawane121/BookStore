import { Link } from "react-router-dom";

const NotFound = ()=> {
    return(
        <>
        <section className="h-screen flex justify-center items-center flex-col">
        <h2>Error 404</h2>
        <p>Page not Found</p>
        <Link to="/" className="btn border-2 rounded-xl border-red-500 px-4">Home</Link>
        </section>
        </>
    );
}

export default NotFound;