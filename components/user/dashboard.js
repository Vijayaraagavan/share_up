import { Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {AccountBalanceWallet, Savings, Summarize} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { green, blue, red } from "@mui/material/colors";

export default function Dashboard() {
    return (
        <Box>
            <Card>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: green[400]}}>
                                <Summarize />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Expense" secondary="₹7500.34" />
                        <Box>
                            <Typography component='h3' variant="body2">
                                Last Transaction
                            </Typography>
                            <Typography component='p' variant="caption">
                                vijay to abul
                            </Typography>
                        </Box>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: red[400]}}>
                                <AccountBalanceWallet />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Loan" secondary="₹2400.65" />
                        <Box>
                            <Typography component='h3' variant="body2">
                                Last Transaction
                            </Typography>
                            <Typography component='p' variant="caption">
                                vijay to abul
                            </Typography>
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: blue[400]}}>
                                <Savings />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Savings" secondary="₹943.05" />
                        <Box>
                            <Typography component='h3' variant="body2">
                                Last Transaction
                            </Typography>
                            <Typography component='p' variant="caption">
                                vijay to abul
                            </Typography>
                        </Box>
                    </ListItem>
                </List>
            </Card>
        </Box>
    )
}