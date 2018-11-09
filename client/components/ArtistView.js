import React, { Component } from 'react'
import AllAlbums from "./AllAlbums"
import Popularity from "./Popularity";
import PropTypes from 'prop-types'


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
                <Popularity />
            </div>
        )
    }
}


ArtistView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArtistView)
