import {TextField, Grid, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './styles';

const FormInputs = ({half, name, type, handleChange, label, autoFocus, handleShowPassword}) => {

    const classes = useStyles();
 
    return(
        <Grid xs={12} sm={half ? 6 : 12}>
            <TextField
                className={classes.inputField}
                name={name}
                type={type}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                label={label}
                autoFocus={autoFocus}
                InputProps={name === 'password' ? {
                    endAdornment : (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                    className: classes.input
                } : {
                    className: classes.input
                }}
            />
        </Grid>
    )
}

export default FormInputs;
