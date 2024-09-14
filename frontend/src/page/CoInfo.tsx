import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import ListSubheader from '@mui/material/ListSubheader';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CircularProgress from '@mui/material/CircularProgress';
import CardComInfoFormat from './components/CardComInfoFormat';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const style = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    maxHeight: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    margin: 5,
};

const name = {
    width: '100%',
    maxWidth: 500,
    marginLeft: 10,
    marginTop: 5,
    display: 'flex',
    gap: 2,
};

function CoInfo() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const corporation_id = query.get('corporation_id') || '';

    interface Job {
        id: number;
        name: string;
        pr_text: string;
        president_name: string;
        prefecture: string;
        web_url: string;
        capital?: number;
        branch: string;
        employees?: number;
        average_age?: number;
        female_rate?: number;
        average_annual_income?: number;
        paid_holiday_digestibility?: number;
        turnover_rate?: number;
        female_manager_rate?: number;
        average_duration?: number;
    }

    const [results, setResults] = React.useState<Job[]>([]);

    React.useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const params: { [key: string]: string } = {
                    corporation_id
                };

                const response = await axios.get(
                    'http://localhost:8000/api/job-listings/',
                    { params }
                );
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching job listings:', error);
            }
        };
        fetchJobListings();
    }, [corporation_id]);

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ backgroundColor: 'White', minHeight: '100vh' }}>
            {results.map(job => (
                <Box key={job.id} sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit" component="div">
                                BlackChecker
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Box sx={name}>
                        <BusinessIcon sx={{ fontSize: 60, paddingTop: 1 }} />
                        <Typography variant="h2" gutterBottom>
                            {job.name}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', margin: 3 }}>
                        <Box>
                            <Box sx={{ flex: 1, marginRight: 5 }}>{job.pr_text ?? "No Data"}</Box>

                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 5 }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="総合" value="1" />
                                        <Tab label="詳細" value="2" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    <Box>
                                        <Typography variant="h5">Black Rate</Typography>
                                    </Box>
                                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <CircularProgress variant="determinate" value={50} size="12rem" sx={{ color: '#ffcc00' }} />
                                        <Box
                                            sx={{
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                position: 'absolute',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                component="div"
                                                sx={{ color: 'text.secondary', fontSize: 30 }}
                                            >
                                                50%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TabPanel>

                                <TabPanel value="2">
                                    <CardComInfoFormat
                                        Employees={job.employees}
                                        AgeMean={job.average_age}
                                        FemaleRate={job.female_rate}
                                        AnnualIncomeMean={job.average_annual_income}
                                        PaidHolidayDigestibility={job.paid_holiday_digestibility}
                                        TurnoverRate={job.turnover_rate}
                                        FemaleManagerRate={job.female_manager_rate}
                                        DurationMean={job.average_duration}
                                    />
                                </TabPanel>
                            </TabContext>
                        </Box>

                        <List
                            sx={style}
                            aria-label="company-info"
                            subheader={
                                <ListSubheader component="div">企業情報</ListSubheader>
                            }
                        >
                            <ListItem>代表者：{job.president_name ?? "No Data"}</ListItem>
                            <Divider component="li" />
                            <ListItem>都道府県：{job.prefecture ?? "No Data"}</ListItem>
                            <Divider component="li" />
                            <ListItem>
                                Webサイト:
                                <ListItemButton
                                    component="a"
                                    href={job.web_url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary={job.web_url ? job.web_url : "No Data"} />
                                </ListItemButton>
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>資本金：{job.capital ?? "No Data"}</ListItem>
                            <Divider component="li" />
                            <ListItem>従業員数：{job.employees ?? "No Data"}</ListItem>
                            <Divider component="li" />
                            <ListItem>支社：{job.branch ?? "No Data"}</ListItem>
                        </List>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default CoInfo;
