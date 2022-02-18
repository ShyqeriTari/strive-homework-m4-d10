import { render } from '@testing-library/react'
import { Component} from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from './Singlecard'
import SingleCardRec from './Singlecard'
import './styles.css'


class MainSec extends Component {

    state={
        // randomArt:["drake","linkin park","queen","bruno mars","2pac","rihanna","50-cent","eminem"],
        artists: [],
        recently: []
    }

// fetchMovies = async (movie) => {
//     let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${movie}`)
//     let data = await response.json()
//     let main = data.data[0]
//     console.log(this.state.artists)
//     this.setState({...this.state, artists: data.data})
//     console.log(main)
// }

//     componentDidMount() {

//         this.state.randomArt.map(artist=>this.fetchMovies(artist) )
      
//     }

// changeRecently = (value) => {
//     this.setState({...this.state, recently : value})
// }

// secFetches= (artist, value) => {
//     fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
//     .then(response=>response.json())
//     .then(data=>{
        
//         this.setState({...this.state, [value] : data.data})
//         console.log(this.state.recently)

//     })
// }

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
        // this.secFetches('eminem', 'recently')
    }


    
    
render(){
    return(
        <>
        <div className="container-fluid px-5" style={{marginTop: '6em'}}>
        <div className="row ml-2">
            <h1 className="h1-main">Good morning</h1>
        </div>
        <Row id="main-section-small" >{
this.state.artists.filter((artist, idx)=> idx < 8).map(artist => {return <SingleCard oneArtist={artist} key={artist.id}/> })
        }
        </Row>
    </div>

    <div className="container-fluid px-5 my-4">
        <div className="row ml-2">
            <h2 className="h2-main">Recently played</h2>
        </div>
        <Row id="main-section-recent">
            {/* {this.state.recently.filter((artist, idx)=> idx < 8).map(artist => {return <SingleCardRec art={artist} key={artist.id} /> })} */}

            {
this.state.artists.filter((artist, idx)=> idx < 8).map(artist => {return <SingleCard oneArtist={artist} key={artist.id}/> })
        }

        </Row>

    </div>

    <div className="container-fluid px-5 my-4">
        <div className="row ml-2">
            <h2 className="h2-main my-0">Shows to try</h2>
        </div>
        <p className="ml-2 to-try-main">Podcasts we think you will get hooked on.</p>
        <Row id="main-section-to-try">
        {
this.state.artists.filter((artist, idx)=> idx < 8).map(artist => {return <SingleCard oneArtist={artist} key={artist.id}/> })
        }
        </Row>
    </div>

    <div style={{height: '100px'}}></div>
    </>
    )
}
}

export default MainSec