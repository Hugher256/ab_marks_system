import React from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "20px",
    },
  }));

function Home(props) {
    const classes = useStyles();

    const handleMarks = () => {
        props.history.push('/enter_marks')
    }

    const handleLeaderboard = () => {
        props.history.push('/leaderboard')
    }

    return (
        <div className='home'>
            <h1>Home</h1>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleMarks}>
                Enter Marks
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={handleLeaderboard}>
                Leaderboard
            </Button>
        </div>
    )
}

export default Home
