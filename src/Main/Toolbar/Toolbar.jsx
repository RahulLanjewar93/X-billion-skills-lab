import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SingleToolbar from './SingleToolbar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Toolbar = () => {
    return (
        <Box margin={"10px"}>
            <Grid container >
                <Grid item xs={12} md={6} lg={3}>
                    <SingleToolbar></SingleToolbar>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SingleToolbar></SingleToolbar>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SingleToolbar></SingleToolbar>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SingleToolbar></SingleToolbar>
                </Grid>
            </Grid>
            <Divider />
            <Box textAlign={"right"} margin={"10px"}>
                <Button variant="text" >Cancel</Button>
                <Button disabled variant="text" startIcon={<SendIcon />}>Apply</Button>
            </Box>
        </Box>
    );
};

export default Toolbar;
