import {TextField, InputAdornment} from "@mui/material";
import { Grid } from '@mui/material';
import Icon from "@mui/material/Icon";
import {useMaterialUIController} from "context";


function FormInput(props){
    const [controller, dispatch] = useMaterialUIController();
    const { transparentNavbar, darkMode } = controller;

    // Styles for the navbar icons
    const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
        color: () => {
        let colorValue = darkMode ? white.main : dark.main;

        if (transparentNavbar) {
            colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
        }

        return colorValue;
        },
    });

    const getIconFromName = () => {
        switch (props.icon) {
            case 'person':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>person</Icon>;
            case 'certification':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>shield</Icon>;;
            case 'description':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>edit</Icon>;;
            case 'company':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>company</Icon>;;
            case 'search':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>search</Icon>;;
            case 'badge':
                return <Icon sx={[iconsStyle, {size: "medium"}]}>badge</Icon>;;
        }
    }

    const isDescription = props.name === "description" ? true : false;
    
    // agregar que los botones se vuelvan rojos en caso de error

    return (
        <Grid item xs>
        <TextField
            InputProps={
                {startAdornment: <InputAdornment position="end">
                {getIconFromName(props.icon)}
                </InputAdornment>}}
            margin="normal"
            required
            id={props.id}
            label={props.label}
            name={props.name}
            autoFocus
            fullWidth
            {... props}
            />
        </Grid>
    );

}

export default FormInput;