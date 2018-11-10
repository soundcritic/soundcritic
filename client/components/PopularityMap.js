import React, { PureComponent } from 'react'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

import axios from 'axios'

const styles = (theme) => ({
    title: {
        marginTop: '10px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    map: {
        width: '50%',
    }
})

class PopularityMap extends PureComponent {
    constructor() {
        super()
        this.state = {
            likes: [],
            dislikes: [],
            likesClicked: false,
            disLikesClicked: false
        }
    }
    async componentDidMount() {
        const { data } = await axios.get(`/api/likes/album/${3}`)
        console.log(data);
        this.setState({
            likes: data
        })

        const res = await axios.get(`/api/dislikes/artist/${3}`)
        this.setState({
            dislikes: res.data
        })
    }

    onMarkerClick = (evt) => {
        console.log(evt.payload);
    }

    handleLikesClicked = () => {
        this.setState({likesClicked: true, disLikesClicked: false})
    }

    handleDislikesClicked = () => {
        this.setState({likesClicked: false, disLikesClicked: true})
    }

    render() {
        const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
        const { classes } = this.props
        const { likes, dislikes, likesClicked } = this.state
        const mapConfig = {
            center: [41.850033, -87.6500523],
            zoom: 4
        }

        const PigeonMarkersLikes = likes.map(marker => (
            <Marker key={marker.id} anchor={marker.latlong} payload={1} onClick={this.onMarkerClick} />
        ))
        const PigeonMarkersDislikes = dislikes.map(marker => (
            <Marker key={marker.id} anchor={marker.latlong} payload={1} onClick={this.onMarkerClick} />
        ))

        return (
            <div >
                <div>
                    <Typography component="h5" variant="h5" className={classes.title}>
                        Popularity By Region
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="outlined" className={classes.button} onClick={this.handleLikesClicked}>
                            Likes
                        </Button>
                        <Button variant="outlined" className={classes.button} onClick={this.handleDislikesClicked}>
                            Dislikes
                        </Button>
                    </div>
                </div>
                <div className={classes.map}>
                    <Map
                        width={window.innerWidth}
                        height={600}
                        defaultCenter={mapConfig.center}
                        defaultZoom={mapConfig.zoom}
                        provider={getProvider}
                    >
                        {likesClicked ?
                            PigeonMarkersLikes : PigeonMarkersDislikes}
                    </Map>
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(PopularityMap)
