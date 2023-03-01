import styles from './login.module.css';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { selectHomeState, setSnackbar } from '../../store/index'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function () {
    const action = {
        active: 'success'
    }
    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState({ error: false, text: '' });
    const [pin, setPin] = useState('');
    const [pinError, setPinError] = useState({ error: false, text: '' });
    const [showPass, setShowPass] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [checked, setChecked] = useState(false);
    const validate = () => {
        if (user.length < 3) {
            setUserError((userError) => ({
                text: 'Need atleast 4 letters',
                error: true
            }));
        } else {
            setUserError((userError) => ({
                text: '',
                error: false
            }));
        }

        if (pin.length < 6) {
            setPinError((pinError) => ({
                text: 'Need atleast 6 digits',
                error: true
            }));
        } else {
            setPinError((pinError) => ({
                text: '',
                error: false
            }));
        }

        if (userError.error || pinError.error) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }
    const handleUser = (e) => {
        setUser(e.target.value);
        validate();
    }
    const handlePin = (e) => {
        setPin(e.target.value);
        validate();
    }

    const handleSubmit = () => {
        const payload = {
            username: user,
            password: pin
        }
        const url = "http://localhost:3000/api/login";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.status == 200) {
                    pushRoute();
                    openSnack("Logged In Successfully", "success")
                } else {
                    openSnack("Invalid Credentials", "error")
                    console.log('fialed ', fail)
                }
            }).catch((fail) => { })
    }
    const router = useRouter();

    const pushRoute = () => {
        router.push("/home");
    }

    const rules = () => {
        if (userError.error || pinError.error || !checked) {
            return true;
        } else {
            return false;
        }
    }

    const handleClickShowPassword = (e) => setShowPass(!showPass)

    const openSnack = (message, type) => {
        dispatch(setSnackbar({
            message: message,
            type: type
        }))
    }

    return (
        <>
            <Head>
                <title>Login</title>
                {/* <link rel="icon" href='/images/logo.jpg' /> */}
            </Head>
            <div className={styles.login}>
                <Card className={styles.card} raised>
                    {/* <div className={styles.header}> */}
                    <CardHeader sx={{ marginBottom: 1, pl: 0.9, color: '#1976d2' }} title="Sign In" />
                    {/* </div> */}
                    <div style={{ display: 'flex', flexWrap: 'nowrap', marginBottom: 16 }}>
                        <AccountCircle sx={{ color: action.active, mr: 1, mt: 2, fontSize: 28 }} color='primary' />
                        <TextField label="Username" error={userError.error} helperText={userError.text} value={user} onChange={handleUser} variant="outlined" color="success" required fullWidth autoComplete='off' />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <Lock sx={{ color: action.active, mr: 1, mt: 2, fontSize: 28 }} color='primary' />
                        {/* <TextField label="Password" error={pinError.error} helperText={pinError.text} variant="outlined" color="success" fullWidth type="text" value={pin} onChange={handlePin} required endadornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPass ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    } /> */}
                        <FormControl sx={{ m: 0, mb: 1 }} variant="outlined" fullWidth >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPass ? 'text' : 'password'}
                                error={pinError.error}
                                value={pin} onChange={handlePin}
                                required
                                color='success'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {!showPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <FormControlLabel className={styles.checkbox} control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="I am bitch" />
                    <Button variant='contained' disabled={rules()} fullWidth style={{ marginTop: 24 }} onClick={handleSubmit}>Login</Button>
                </Card>
            </div>
        </>
    )
}

