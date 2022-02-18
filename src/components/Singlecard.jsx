import { Component } from "react"
import { Col } from "react-bootstrap"

class SingleCard extends Component {

    state={
        artists: undefined
    }

    componentDidMount(){

        // console.log(this.props.artist)
    }

    componentDidUpdate(prevProps){
        if (prevProps.artist !== this.props.artist){
            this.setState({artists: this.props.artist
            })
            // console.log(this.state.artists)
        }
    }

    render() {
    return(
        <Col xs={12} md={6} lg={4} xl={3}>
          
        <div className="mx-1 small-card-main d-flex align-items-center  my-2">
            <img class="small-card-image-main" src={this.props.oneArtist.album.cover_small} alt=""></img>
            {/* <a href="./index-album.html?albumId=${body.data[x].album.id}"> */}
                <p class=" description-main"> {this.props.oneArtist.title_short}</p>
                {/* </a> */}
        </div>
    </Col>
    )
    }
}

export default SingleCard