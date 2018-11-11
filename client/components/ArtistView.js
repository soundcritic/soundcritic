import React, { Component } from 'react'
import AllAlbums from "./AllAlbums"
import PopularityMap from "./PopularityMap";
import { connect } from 'react-redux'
import { fetchOneArtist, oneArtist, getArtistLikes, getArtistDislikes, allLikes, allDislikes } from "../store/"

import { withStyles } from '@material-ui/core/styles'


const styles = {
    container: {
        height: '100vh!important',
        textAlign: 'center'
    },
}

class ArtistView extends Component {

    async componentDidMount() {
        const { fetchOneArtist, getArtistDislikes, getArtistLikes } = this.props
        await fetchOneArtist(3)
        await getArtistLikes(3)
        await getArtistDislikes(3)
    }

    render() {
        const { classes, oneArtist, allLikes, allDislikes } = this.props
        console.log('======', this.props)

        return (
            <div className={classes.container}>
                <AllAlbums artist={oneArtist} />
                <PopularityMap likes={allLikes} dislikes={allDislikes} />
            </div>
        )
    }
}

const mapState = state => {
    const { oneArtist, allLikes, allDislikes } = state
    return {
        oneArtist,
        allLikes,
        allDislikes
    }
}


export default connect(
    mapState,
    { fetchOneArtist, getArtistLikes, getArtistDislikes }
)(withStyles(styles)(ArtistView))
