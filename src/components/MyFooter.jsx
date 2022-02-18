import './styles.css'


const MyFooter = () => {
    return(
        <footer className="fixed-bottom footer-class">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 d-flex flex-nowrap justify-content-center justify-content-md-between">

                    <img src="Assests/tile1.jpg" alt="footer-tile" className="align-self-center footer-tile mr-2"></img>

                    <div className="align-self-center mr-md-auto">
                        <p className="mb-0 footer-song-text" style={{fontSize: 'small'}}>Everlong</p>
                        <span className="lead" style={{fontSize: 'xx-small'}}>Foo Fighters</span>

                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-heart ml-3"></i>
                        <i className="bi bi-pip ml-3"></i>
                    </div>
                </div>
                <div className="col-md-6 px-5">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <i className="bi bi-shuffle d-inline-block mx-2 "></i>
                        <i className="bi bi-skip-start d-inline-block mx-2 "></i>
                        <div className="footer-play-button-wrapper">
                            <i className="bi bi-play-circle-fill d-inline-block footer-play-button-bigger mx-2"></i>
                        </div>
                        <i className="bi bi-skip-end d-inline-block mx-2 "></i>
                        <i className="bi bi-arrow-repeat d-inline-block mx-2 "></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-3 mt-n1">
                        <span className="mr-n4" style={{fontSize: 'x-small'}}>3.34</span>
                        {/* <div style="width: 80%;">
                            <hr className=" align-self-start mb-auto mt-auto"
                                style={{height: '3px', width: '80%', backgroundColor: 'grey', borderRadius: '2px'}}>
                        </div> */}
                        <span className="ml-n4" style={{fontSize: 'x-small'}}>3.34</span>
                    </div>
                </div>
                <div className="col-md-2 d-none d-lg-block ">
                    <div className="d-flex flex-nowrap justify-content-between align-items-center d-inline-block mt-3">
                        <i className="bi bi-list-task"></i>
                        <i className="bi bi-music-player-fill px-2"></i>
                        <i className="bi bi-volume-up pl-2"></i>
                        {/* <hr style={{height: '3px', width: '60%', backgroundColor: 'grey', borderRadius: '2px'}}> */}

                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default MyFooter