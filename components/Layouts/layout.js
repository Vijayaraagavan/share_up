import { Slide, Snackbar, Alert } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { selectHomeState, close } from "../../store/index";

export default function Layout({ children }) {
    const snackProps = useSelector(selectHomeState);
    const handleClose = () => {
        // console.log(snack.current);
        dispatch(close());
    }
    if (snackProps.open) {
        setTimeout(handleClose, 2000)
    }
    const dispatch = useDispatch();
    const transit = (props) => {
        return <Slide {...props} direction="down"></Slide>
    }
    return (
        <>
            <Snackbar
                open={snackProps.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                // autoHideDuration={2000}
                TransitionComponent={transit}
                // onClose={handleClose}
                message={snackProps.message}
            >
                <Alert onClose={handleClose} severity={snackProps.type} elevation={5} variant="filled" sx={{ width: '100%' }}>
                    {snackProps.message}
                </Alert>
            </Snackbar>
            <main>{children}</main>
        </>
    )
}