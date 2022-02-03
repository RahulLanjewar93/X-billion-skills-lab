import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const ChatArea = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Paper variant="outlined" elevation={4} >
                        <Toolbar></Toolbar>
                    </Paper>
                </Grid>
                <Grid item xs={12} marginTop={"20px"}>
                    <Paper variant="outlined" elevation={4}>
                        <Grid container>
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper variant="outlined" elevation={4}>
                                    <Typography>Test</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <Paper variant="outlined" elevation={4}>
                                    <Typography>Test</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatArea;
