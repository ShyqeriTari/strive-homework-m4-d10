import { Component } from "react"
import { Row } from "react-bootstrap"
import './styles.css'


class Album extends Component {

    state={
        artists: []
    }

fetches = (artist, value) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
            .then(response=>response.json())
            .then(data=>{
                
                this.setState({...this.state, [value] : data.data})
                console.log(this.state.artists)

            })
}

    componentDidMount() {

        this.fetches('bruno mars', 'artists')
    }
render(){
    return (
        <>
            <div className="container-fluid my-2">
                <Row style={{ marginTop: '80px' }}>
                    <div className="col-12 card-head d-flex my-2">
                        <div className="col-2 card-head-image">
                        <img className="card-image-head" src="${body.cover_big}" alt=""></img>
                        </div>
                        <div className="col-8 d-flex description text-white justify-content-start align-items-end">
                            <div id="header" className="ml-3">
                            <p className=" description-head_1 mb-0"> ALBUM </p>
                  {/* <h3 className=" description-head_2 mb-0">{body.title}</h3> */}
                  {/* <p className=" text-muted description-head_3"> <strong>{body.artist.name}</strong> . 2018 . {tracks} songs, 1hr 19 min
                </p> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row text-white">
                            <div className="col-12 d-flex align-items-center">
                                <div className="artist-main-play-button">
                                    <i className="bi bi-play-circle d-inline-block mx-2"></i>
                                    <div className="artist-main-button-inner-div"></div>
                                </div>
                                <div className="ml-4 px-3 py-1 artist-follow"> <i className="bi bi-heart"></i></div>
                                <div className="ml-4"><i className="bi bi-three-dots"></i></div>
                            </div>
                        </div>
                    </div>
</Row>

            </div>
            <div className="pt-2">
                <span className="pl-3 ash_tag">#</span>
                <span className="mx-2" style={{ color: 'white' }}> TITLE</span>
            </div>
            {/* <hr class="my-2" style="background-color: rgb(204, 186, 186); margin-top: 25px;"> */}


            <div className="artist-songs-table-wrapper pr-3 ">

                {this.state.artists.filter((artist, idx)=> idx < 15).map((artist, idx) => {
            <Row className=" align-items-center py-3" key={idx}>
                <div className="col-9 col-sm-6 artist-main-songs-list">
                    <span className="px-3 mx-0 mb-3 text-number">{idx+1}</span>
                    <div className="d-inline-block"><p class="fox mb-0">{artist.title_short}</p>
                        <p className="under_text">{artist.artist.name}</p></div>
                </div>
                <div className="col-3 d-none d-md-block artist-main-songs-right">
                    <span></span>
                </div>
                <div className="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
                    <span className="ml-3 duration">3:21</span>
                </div>
                </Row>
})}
            </div>
    </>
    )
}
}

export default Album