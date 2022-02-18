import { Component } from "react"
import { Col } from "react-bootstrap"

class SingleCardRec extends Component {



    render() {
    return(

        <Col xs={12} md={6} lg={4} xl={3} className="mt-3">
          
          {/* <a href="./index-album.html?albumId=${body.data[x].album.id}"> */}
            <div className="card-main pb-1">
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <div className="imagewrapper">
                    <div className="son">
                      <img className="px-3 py-3 card-image-main" src={this.props.art.album.cover_small} alt=""></img>
                    </div>
                    <div className="son2 d-flex justify-content-end align-items-end">
                      <div className="playbutton mb-3 mr-3">
                        <div className="arrow-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
        
              </div>
              <h6 className="px-2 my-1 card-title">{this.props.art.title_short}</h6>
              <a href="./artist.html?artistId=${body.data[x].artist.id}"><p className="card-description-main my-2 px-2 ">{this.props.art.artist.name}</p></a>
            </div>
          {/* </a> */}
    </Col>
    )
    }
}

export default SingleCardRec