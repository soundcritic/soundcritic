import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = {
    cover: {
        width: '150px',
        height: '150px'
    },
    card: {
        margin: ' 10px',
        padding: '10px',
        height: '200px',
    },
    cardGrid: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '10px'
    },
    title: {
        marginTop: '10px'
    },
}


const AllAlbums = (props) => {
    const { classes, artist } = props

    if (!artist.id) return <div />

    return (
        <div>
            <Typography component="h5" variant="h5" className={classes.title}>
                My Albums
            </Typography>
            <div className={classes.cardGrid}>
                {artist.albums.map(album => {
                    return (
                        <Link to={`/albums/${album.id}`} key={album.id} >
                            <Card className={classes.card}  >
                                <img className={classes.cover} src={album.artworkPath} />
                                <Typography component="h5">
                                    {album.title}
                                </Typography>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default withStyles(styles)(AllAlbums)
