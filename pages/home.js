import { Button, Card, CardActions, CardContent, Typography, useMediaQuery } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useState } from "react";
import styles from '../styles/Dashboard.module.css';
export default function Dashboard() {
    const mobile = useMediaQuery('(max-width: 500px)');
    const [aniIcon, setAniIcon] = useState("");
    const [open, setOpen] = useState(false);

    const openSettins = () => {
        if (open) {
            setOpen(false);
            setAniIcon(styles.setting_icon_out);
        } else {
            setOpen(true);
            setAniIcon(styles.setting_icon);
        }
    }
    if (mobile) {
        return (
            <div><h1>Switch to Mobile App</h1>
                <Settings sx={{ color: 'blue', textAlign: 'center', position: 'relative', top: 90 }} className={aniIcon} onClick={openSettins} />
                <Card sx={{ maxWidth: 100, backgroundColor: 'red' }}>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </div>
        )
    }
    return (
        <div>
            <h1>Welcome to share up group</h1>
        </div>
    )
}