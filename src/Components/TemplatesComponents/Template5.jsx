import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Avatar, Divider, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';
function Template5() {
    const dataStore = useSelector((state) => state.dataStore);

    return (
        <Box sx={{ p: 3, fontFamily: 'Tahoma, sans-serif', backgroundColor: '#ffffff', color: '#333333' }}>
            <Grid item xs={12} container spacing={10}>
                {/* Left Side: Personal Info and Objective */}
                <Grid item xs={4} width={'20%'}>
                    {/* Header Section */}
                    <Grid container spacing={2} alignItems="center" sx={{ borderBottom: '2px solid #007ACC', pb: 2 }}>
                        <Grid item xs={9}>
                            <Typography variant="h4" color="primary">
                                {dataStore.personalInfo.firstName} {dataStore.personalInfo.lastName}
                            </Typography>
                            <Typography variant="body2">
                                {dataStore.personalInfo.Email} | {dataStore.personalInfo.Mobile}
                            </Typography>
                            <Typography variant="body2">
                                {dataStore.personalInfo.Address1}, {dataStore.personalInfo.City}, {dataStore.personalInfo.State} - {dataStore.personalInfo.Pin}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} textAlign="center">
                            <Avatar
                                alt="Profile Picture"
                                src={dataStore.imageFile}
                                sx={{ width: 100, height: 100, border: '2px solid #007ACC', mx: 'auto' }}
                            />
                        </Grid>
                    </Grid>

                    {/* Objective Section */}
                    <Box mt={3}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            Objective
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                            {dataStore.personalInfo.Objective}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                        <Typography variant="h5" color="primary" gutterBottom>
                            Key Skills
                        </Typography>
                        <List>
                            {dataStore.skills.map((skill) => (
                                <ListItem key={skill.id || skill.skillName} sx={{ py: 0 }}>
                                    <ListItemText primary={skill.skillName} primaryTypographyProps={{ variant: 'body2', color: 'textPrimary' }} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

                {/* Right Side: Experience, Education, and Skills */}
                <Grid item xs={8} width={'70%'}>
                    {/* Work Experience Section */}
                    <Box>
                        <Typography variant="h5" color="primary" gutterBottom>
                            Professional Experience
                        </Typography>
                        {dataStore.workEx.map((item) => (
                            <Box key={item.id || item.title} mb={2}>
                                <Typography variant="subtitle1" color="textPrimary">
                                    {item.orgName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.title} | {item.startYear} - {item.endYear}
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                                    {item.jobDescription}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Education Section */}
                    <Box>
                        <Typography variant="h5" color="primary" gutterBottom>
                            Education
                        </Typography>
                        {dataStore.education.map((item) => (
                            <Box key={item.id || item.Degree} mb={2}>
                                <Typography variant="subtitle1" color="textPrimary">
                                    {item.Degree}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{float:'right'}}>
                                    {item.University} | {item.Start} - {item.End}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    
                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default Template5;