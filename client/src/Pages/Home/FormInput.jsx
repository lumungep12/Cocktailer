import {TextField, Grid, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './styles';

const FormInputs = ({halfScreens, name, type, handleChange, label, autoFocus, handleShowPassword}) => {


    const styles = useStyles();

    return(
        <Grid xs={12} sm={halfScreens ? 6 : 12}>
            <TextField
                className={styles.inputField}
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
                    )
                } : null}
            />
        </Grid>
    )
}

export default FormInputs;