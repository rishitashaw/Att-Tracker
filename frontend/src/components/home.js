import { Link } from "react-router-dom"
export default function Home() {
    return (<>
        hello att-tracker<br />
        <Link to="/code">QR Code</Link><br />
        <Link to="/login">Login</Link><br />
    </>)

}