import { Slide, Snackbar, Alert, useMediaQuery } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { selectHomeState, close } from "../../store/index";
import { useState } from "react";
import BottomNav from "./bottomNav";

export default function Layout({ children }) {
    const snackProps = useSelector(selectHomeState);
    const mobile = useMediaQuery('(max-width: 500px)');

    const getNav = () => {
        if (mobile) {
            return <BottomNav index={btmIndex} setPage={setPage} />
        } else {
            return ''
        }
    }

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
    const btmIndex = [
        { label: "Recents", icon: "Restore", page: "transaction" },
        { label: "Favorites", icon: "Favorite", page: "transaction" },
        { label: "Nearby", icon: "LocationOn", page: "transaction" }
    ]
    const [tab, setTab] = useState(0);
    const setPage = (value) => setTab(value);
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
            {getNav()}
        </>
    )
}