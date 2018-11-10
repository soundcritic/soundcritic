import React, { Component } from 'react'
import AllAlbums from "./AllAlbums"
import PopularityMap from "./PopularityMap";
import { connect } from 'react-redux'
import { fetchOneArtist } from "../store/artist"
import axios from 'axios'


import { withStyles } from '@material-ui/core/styles'


const styles = {
    container: {
        height: '100vh!important',
        textAlign: 'center'
    },
}

class ArtistView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: [],
            dislikes: [],
            artist: {}
        }
    }

    async componentDidMount() {
       const result = await axios.get(`/api/artists/${3}`)
       this.setState({
        artist: result.data
    })

        const { data } = await axios.get(`/api/likes/${3}`)
        this.setState({
            likes: data
        })

        const res = await axios.get(`/api/dislikes/${3}`)
        this.setState({
            dislikes: res.data
        })
    }

    render() {
        const {classes} = this.props
        const {likes, dislikes, artist} = this.state

        return (
            <div className={classes.container}>
                <AllAlbums artist={artist} />
                <PopularityMap likes={likes} dislikes={dislikes} />
            </div>
        )
    }
}




export default connect(null, { fetchOneArtist })(withStyles(styles)(ArtistView))
