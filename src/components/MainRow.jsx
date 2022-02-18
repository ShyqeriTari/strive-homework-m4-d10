import { Row } from "react-bootstrap"
import Sidebar from './Sidebar'
import Navbar from "./Navbar"
import MyFooter from "./MyFooter"

const MainRow = () =>{
    return(
<Row className="flex-nowrap">
<Sidebar />
<Navbar />
<MyFooter />
</Row>
    )
}

export default MainRow