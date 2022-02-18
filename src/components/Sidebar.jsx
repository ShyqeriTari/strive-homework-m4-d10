import { Col } from 'react-bootstrap'
import './styles.css'

const Sidebar = () => {
    return(

        <Col className='sidebar-bg'>

        <div className="sidebar-logo mt-2"><span><i className="bi bi-spotify"></i></span><span
                className="ml-2 sidebar-logo-text">Spotify</span></div>
        <div className="sidebar-top mt-3">
            <a  href="./index.html" style={{color: 'rgb(172, 170, 170)', cursor: 'pointer'}}><div className="search-item-a"><span><i className="bi bi-house-door-fill"></i></span><span style={{marginLeft: '15px'}}>Home</span></div></a>
            <a  href="./search.html" style={{color: 'rgb(172, 170, 170)', cursor: 'pointer'}}><div className="search-item-a"><span><i className="bi bi-search"></i></span><span style={{marginLeft: '15px'}}>Search</span></div></a>
            <div><span><i className="bi bi-collection-play-fill"></i></span><span>Your library</span></div>
            <div className="sidebar-divider"></div>
            <div><span><i className="bi bi-plus-square-fill"></i></span><span>Create Playlist</span></div>
            <div><span>Liked Songs</span></div>
        </div>
        <div className="sidebar-line-divider ">
            {/* <hr class="my-2"> */}
        </div>
        <div className="sidebar-bottom mt-2">
            <div className="sidebar-bottom-content">
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>June19 <span className="float-right"><i className="bi bi-people"></i></span> </div>
                <div>Party <span className="float-right"><i className="bi bi-people"></i></span> </div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
                <div>FRANCHISE ft. Young Thug something</div>
            </div>


            <div className="sidebar-instal my-3">
                <span><i className="bi bi-arrow-down-circle"></i></span><span className="ml-2">Install App</span>
            </div>
        </div>
    </Col>
    )
}

export default Sidebar