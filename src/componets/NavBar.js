import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from "../assets/circ.png"

const useStyles = makeStyles((theme)=>({
    root: {
    flexGrow:1,
    marginBottom: "7rem",
    },
    appBar: {
    backgroundColor: "red",
    boxShadow: "none",
    },
    grow: {
    flexGrow:1,
    },
    button: {
    marginLeft: theme.spacing(2),
    },
    image: {
    marginRight: "10px",
    height:"3rem",
    },
    }));
    

/* function ButtonAppBar() */
export default function NavBar() {
  const classes = useStyles();

  /* position="static"
  <MenuIcon />
  */

  return (
    <div className={classes.root}>
      <AppBar position="fixed"> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
            <img src={logo} className={classes.image}/>

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tu Tinenda
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
