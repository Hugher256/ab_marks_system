import {React, useEffect, useState} from 'react'
import './Marks.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    textField: {
        margin: "10px",
        width : "300px"
    },
    breadcrumbs: {
        margin : '20px',
        position : 'absolute'
    },
    button: {
        margin: '10px'
    }
}));

function Marks() {
    const classes = useStyles();
    const BACKEND_URL = 'http://127.0.0.1:8000/marks/'

    const [states, setStates] = useState({
        rollNo : '',
        name : '',
        marksMaths : '',
        marksPhysics : '',
        marksChemistry : '',
        totalMarks : 0,
        percentage : 0
    })
    const [error, setError] = useState({
        maths: false,
        physics: false,
        chemistry: false
    })
    const [errorText,setErrorText] = useState('')

    useEffect(() => {
        setStates((states) => {
            const sum = states.marksMaths + states.marksPhysics + states.marksChemistry
            return {
            ...states,
            totalMarks : sum,
            percentage : ((sum / 300) * 100).toFixed(2)
            }
        })
    }, [states.marksMaths, states.marksChemistry, states.marksPhysics])

    const handleSubmit = () => {
        const payload = {
            roll_no : states.rollNo,
            name : states.name,
            marks_maths : states.marksMaths,
            marks_physics : states.marksPhysics,
            marks_chemistry : states.marksChemistry,
            total_marks : states.totalMarks,
            percentage : states.percentage
        }
        console.log(payload)
        axios.post(BACKEND_URL, payload)
        .then(res => alert('Marks Entered Successfully!'))
        .catch(err => console.error(err))
        // console.log(states)
        // console.log('Submitting')
    }

    const handleChange = (e) => {
        switch(e.target.id){
            case 'rollNo': {
                setStates({
                    ...states,
                    rollNo : e.target.value
                })
                break
            }
            case 'name': {
                setStates({
                    ...states,
                    name : e.target.value
                })
                break
            }
            case 'marks-maths': {
                const newValue = parseInt(e.target.value)
                if (newValue > 100 || newValue < 0){
                    setError({
                        ...error,
                        maths : true
                    })
                    setErrorText("Incorrect entry.")
                }
                else{
                    setStates({
                        ...states,
                        marksMaths : newValue,
                    })
                    setError({
                        ...error,
                        maths : false
                    })
                    setErrorText("")
                }
                break
            }
            case 'marks-physics': {
                const newValue = parseInt(e.target.value)
                if (newValue > 100 || newValue < 0){
                    setError({
                        ...error,
                        physics : true
                    })
                    setErrorText("Incorrect entry.")
                }
                else {
                    setStates({
                        ...states,
                        marksPhysics : newValue,
                    })
                    setError({
                        ...error,
                        physics : false
                    })
                    setErrorText("")
                }
                break
            }
            case 'marks-chemistry': {
                const newValue = parseInt(e.target.value)
                if (newValue > 100 || newValue < 0){
                    setError({
                        ...error,
                        chemistry : true
                    })
                    setErrorText("Incorrect entry.")
                }
                else {
                    setStates({
                        ...states,
                        marksChemistry : newValue,
                    })
                    setError({
                        ...error,
                        chemistry : false
                    })
                    setErrorText("")
                }
                break
            }
            default : console.log('default')
        }
    }

    return (
        <div className='marks_pages'>
            <Breadcrumbs aria-label="breadcrumb" separator={<i className="lni lni-chevron-right"></i>} className={classes.breadcrumbs}>
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">Enter Marks</Typography>
            </Breadcrumbs>
            <h1>Marks Page</h1>
            <form id='marks-form' noValidate autoComplete='off'>
            <TextField id="rollNo" label="Roll No." defaultValue={states.rollNo} className={classes.textField} onChange={(e) => handleChange(e)}/>
            <TextField id="name" label="Name" defaultValue={states.name} className={classes.textField} onChange={(e) => handleChange(e)} />
            <TextField
            id="marks-maths"
            className={classes.textField}
            label="Marks in Maths"
            type="number"
            defaultValue={states.marksMaths}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => handleChange(e)}
            error={error.maths}
            helperText={errorText}
            />
            <TextField
            id="marks-physics"
            className={classes.textField}
            label="Marks in Physics"
            type="number"
            defaultValue={states.marksPhysics}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => handleChange(e)}
            error={error.physics}
            helperText={errorText}
            />
            <TextField
            id="marks-chemistry"
            className={classes.textField}
            label="Marks in Chemistry"
            type="number"
            defaultValue={states.marksChemistry}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => handleChange(e)}
            error={error.chemistry}
            helperText={errorText}
            />
            <TextField
            id="total-marks"
            className={classes.textField}
            label="Total Marks"
            type="number"
            value={states.totalMarks}
            InputLabelProps={{
                shrink: true,
            }}
            disabled
            />
            <TextField
            id="percentage"
            className={classes.textField}
            label="Percentage"
            type="number"
            value={states.percentage}
            InputLabelProps={{
                shrink: true,
            }}
            disabled
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </form>
        </div>
    )
}

export default Marks
