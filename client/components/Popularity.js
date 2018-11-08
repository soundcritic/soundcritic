import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'




const styles = {
    title: {
        marginTop: '10px'
    },
    img: {
        width: '75%',
    }
}


const PopularityMap = props => {
    const { classes } = props

    return (
        <div >
            <div>
            <Typography component="h5" variant="h5" className={classes.title}>
                Popularity By Region
            </Typography>
                <img className={classes.img} src='https://bit.ly/2Pktb3a' />
            </div>
        </div>

    )
}

PopularityMap.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopularityMap)
