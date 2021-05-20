import {React, useState, useEffect} from 'react'
import './Leaderboard.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import SmartTable from '../Components/SmartTable'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    searchField: {
        fontSize : '5re',
        width : '40%'
    },
    breadcrumbs: {
        margin : '20px',
        position : 'absolute'
    }
  }));

function Leaderboard() {
    const classes = useStyles();
    // const [open, setOpen] = useState(false)
    const [tableData, setTableData] = useState([])
    const BACKEND_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'https://ab-marks-backend.herokuapp.com/marks/'

    useEffect(() => {
        axios.get(BACKEND_URL)
        .then(res => setTableData(res.data))
        .catch(err => console.log(err))
    }, [])

    // const handleDialog = () => {
    //     setOpen(!open)
    // }

    const handleSearch = (searchTerm) => {
        axios.get(`${BACKEND_URL}?search=${searchTerm}`)
        .then((res) => {
            setTableData(res.data)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='leaderboard'>
            <Breadcrumbs aria-label="breadcrumb" separator={<i className="lni lni-chevron-right"></i>} className={classes.breadcrumbs}>
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">Leaderboard</Typography>
            </Breadcrumbs>
            <h1>Leaderboard</h1>
            <div className="leaderboard-container">
            <TextField
            label="Search"
            id="search-field"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch(e.target.value)
                }
            }}
            className={classes.searchField}
            InputProps={{
                startAdornment: <InputAdornment position='start'><i className="lni lni-search-alt"></i></InputAdornment>,
            }}
            />
            {/* <Button color="primary" onClick={handleSearch}>
                <i className="lni lni-funnel"></i>
            </Button> */}
            {/* <FilterDialog open={open} onClose={handleDialog} onFilter={handleFilter}/> */}
            <SmartTable data={tableData}/>
            </div>
        </div>
    )
}

export default Leaderboard
