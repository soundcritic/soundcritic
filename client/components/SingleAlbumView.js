import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneAlbum, oneAlbum, getAlbumLikes, getAlbumDislikes } from '../store'
import PopularityMap from "./PopularityMap"

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    container: {
        height: '100vh!important',
        textAlign: 'center',
    },
    container2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        backgroundColor: theme.palette.background.paper,
        overflow: 'scroll',
        height: '400px'
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        color: 'azure'
    },
    cover: {
        height: '400px',
        width: '400px'
    }
});

class SingleAlbumView extends Component {
    async componentDidMount() {
        const { fetchOneAlbum, getAlbumDislikes, getAlbumLikes, match } = this.props
        await fetchOneAlbum(Number(match.params.id))
        await getAlbumLikes(Number(match.params.id))
        await getAlbumDislikes(Number(match.params.id))
    }

    render() {

        const { oneAlbum, allLikes, allDislikes, classes } = this.props

        if (!this.props.oneAlbum.id) return <div />
        oneAlbum.tracks = oneAlbum.tracks.sort((a, b) => { return a.title[0] - b.title[0] })

        return (
            <div className={classes.container}>
                <div>
                    <Typography component="h5" variant="h5" className={classes.title}>
                        {oneAlbum.title}
                    </Typography>
                </div>
                <div className={classes.container2}>
                    <div>
                        <img src={oneAlbum.artworkPath} className={classes.cover} />
                    </div>
                    <div >
                        <List className={classes.list} >
                            {oneAlbum.tracks.map(track => {
                                return (
                                    <ListItem key={track.id}>
                                        <ListItemText
                                            primary={`${track.title} | Rating: ${track.rating}%`}
                                            secondary={`Number of likes: ${track.numLikes}`}
                                        />
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </div>
                </div>
                <hr style={{ width: '50%' }} />
                <div >
                    <PopularityMap likes={allLikes} dislikes={allDislikes} />
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(connect(
    oneAlbum,
    { fetchOneAlbum, getAlbumLikes, getAlbumDislikes }
)(SingleAlbumView))
