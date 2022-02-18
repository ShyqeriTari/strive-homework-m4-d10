import { Row } from 'react-bootstrap'
import './styles.css'


const MainSec = () => {
    return(
        <>
        <div className="container-fluid px-5" style={{marginTop: '6em'}}>
        <div className="row ml-2">
            <h1 className="h1-main">Good morning</h1>
        </div>
        <Row id="main-section-small" >
        </Row>
    </div>

    <div className="container-fluid px-5 my-4">
        <div className="row ml-2">
            <h2 className="h2-main">Recently played</h2>
        </div>
        <Row id="main-section-recent">


        </Row>

    </div>

    <div className="container-fluid px-5 my-4">
        <div className="row ml-2">
            <h2 className="h2-main my-0">Shows to try</h2>
        </div>
        <p className="ml-2 to-try-main">Podcasts we think you will get hooked on.</p>
        <Row id="main-section-to-try">

        </Row>
    </div>

    <div style={{height: '100px'}}></div>
    </>
    )
}

export default MainSec