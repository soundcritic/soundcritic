import React, { Component } from 'react'
import AllAlbums from "./AllAlbums"
import PopularityMap from "./PopularityMap";
import { connect } from 'react-redux'
import { fetchOneArtist } from "../store/artist";


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
            //something
        }
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.container}>
                <AllAlbums />
                <PopularityMap />
            </div>
        )
    }
}




export default connect(null, { fetchOneArtist })(withStyles(styles)(ArtistView))
