import { Button, Card, CardActions, CardContent, Grid, Grow, Stack, Typography, useMediaQuery } from "@mui/material";
import { Settings, Notifications, AccountBox, Receipt } from "@mui/icons-material";
import { useState } from "react";
import AccoutDashboard from '../components/user/dashboard';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from '../styles/Dashboard.module.css';
import { mont } from '../modules/fonts';
import { red } from '@mui/material/colors';
export default function Dashboard() {
    const mobile = useMediaQuery('(max-width: 500px)');
    const [aniIcon, setAniIcon] = useState("");
    const [open, setOpen] = useState(false);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const SetBox = styled('div')({
        display: 'flex',
        flexBasis: '50%',
        flexWrap: 'wrap',
        gap: 5,
        color: 'white'
    });

    const SetCard = styled(Card)({
        display: open ? 'flex' : 'none',
        maxWidth: 100,
        backgroundColor: red[400],
        position: 'absolute',
        top: -16,
        left: -51
    })

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
            <div style={{ padding: 3 }}>
                <Stack direction="row" spacing={2} justifyContent="space-between" >
                    <Box flex={3}>
                        <AccoutDashboard />
                    </Box>
                    <Box sx={{ position: 'relative', top: 15, left: 40 }} flex={1}>
                        <Settings sx={{ color: !open ? 'blue' : 'white', textAlign: 'center', position: 'absolute', zIndex: 999 }} className={aniIcon} onClick={openSettins} />
                        <Grow in={open} style={{ transformOrigin: '0 0 0' }} easing='ease-in-out'>
                            <SetCard className={styles.smoother}>
                                <CardContent sx={{
                                    '&:last-child': {
                                        paddingBottom: 2
                                    }
                                }}>
                                    <SetBox>
                                        <Box flexBasis={100}>
                                            <Notifications />
                                        </Box>
                                        <Box flex={1}>
                                            <AccountBox />
                                        </Box>
                                        <Box flex={1}>
                                            <Receipt />
                                        </Box>
                                    </SetBox>
                                </CardContent>
                            </SetCard>
                        </Grow>
                    </Box>

                </Stack>
            </div>
        )
    }
    return (
        <div>
            <h1 className={'check' + ' ' + mont.className}>Welcome to share up group</h1>
        </div>
    )
}