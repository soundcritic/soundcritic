import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: '#4A4A48',
  },
  grow: {
    flexGrow: 1,
  },
}

const Navbar = (props) => {
  const { classes } = props
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Navbar
          </Typography>
          <Link to='/login'>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);