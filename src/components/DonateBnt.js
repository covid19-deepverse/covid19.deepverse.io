import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 36px 0 20px',
  },
});

function DonateBnt() {
  const classes = useStyles();
  return (
    <div className="donate__button">
      {/* <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<FreeBreakfastIcon />}
      >
        Buy us a coffee
      </Button> */}
      <Link
        href="https://www.buymeacoffee.com/khawoat6"
        target="_blank"
        underline="none"
      >
        <Button className={classes.root} startIcon={<FreeBreakfastIcon />}>
          Buy us a coffee
        </Button>
      </Link>
    </div>
  );
}

export default DonateBnt;
