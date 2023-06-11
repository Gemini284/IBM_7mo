import {useState} from 'react';
import { Typography, TextField, InputAdornment} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import MDBox from 'components/MDBox';
import { Grid } from '@mui/material';

function FormInput(props){

    const getIconFromName = () => {
        switch (props.icon) {
            case 'person':
                return <PersonOutlineIcon/>;
            case 'certification':
                return <GppGoodOutlinedIcon/>;
            case 'description':
                return <EditNoteOutlinedIcon/>;
            case 'company':
                return <CorporateFareOutlinedIcon/>;
        }
    }

    const isDescription = props.name === "description" ? true : false;
    
    // agregar que los botones se vuelvan rojos en caso de error

    return (
        <Grid item xs>
        <TextField
            InputProps={
                {startAdornment: <InputAdornment position="start">
                {getIconFromName(props.icon)}
                </InputAdornment>}}
            margin="normal"
            required
            id={props.id}
            label={props.label}
            name={props.name}
            autoFocus
            fullWidth
            />
        </Grid>
    );

}

export default FormInput;