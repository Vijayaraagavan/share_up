import { useState } from 'react';
import { useRouter } from 'next/router';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import * as Muicon from "@mui/icons-material";

export default function BottomNav({index, setPage}) {
    const [value, setValue] = useState(0);
    const Icon = Muicon['LocationOn'];
    const router = useRouter();

    const btm = (elem) => {
        const list = [];
        elem.forEach((element, idx) => {
            let Icon = Muicon[element.icon];
            list.push(<BottomNavigationAction key={idx} label={element.label} icon={<Icon />} />)
        });
        return list;
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setPage(newValue);
                    setValue(newValue);
                    router.push(`/${index[newValue].page}`);
                }}
                // sx={{color: 'red', backgroundColor: 'red'}}
            >
                {btm(index)}
            </BottomNavigation>
        </Paper>
    );
}