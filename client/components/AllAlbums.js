import React from 'react'
import PropTypes from 'prop-types'

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
    const { classes } = props

    return (
        <div>
            <Typography component="h5" variant="h5" className={classes.title}>
                My Albums
            </Typography>
            <div className={classes.cardGrid}>
                <Card className={classes.card}>
                    <img className={classes.cover} src='https://bit.ly/2OwkSfv' />
                    <Typography component="h5">
                        Won't You Be My Neighbor?
                    </Typography>
                </Card>
                <Card className={classes.card}>
                    <img className={classes.cover} src='https://bit.ly/2OwkSfv' />
                    <Typography component="h5" >
                        Won't You Be My Neighbor?
                    </Typography>
                </Card>
                <Card className={classes.card}>
                    <img className={classes.cover} src='https://bit.ly/2OwkSfv' />
                    <Typography component="h5">
                        Won't You Be My Neighbor?
                    </Typography>
                </Card>
            </div>
        </div>
    )
}

AllAlbums.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AllAlbums)
