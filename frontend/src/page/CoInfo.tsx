import * as React from 'react';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardComInfoFormat from './components/CardComInfoFormat';

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
    marginTop:5,
    display:'flex',
    gap: 2,
};

function CoInfo() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
};

    return (
        <>
        {/* ヘッダー */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: 'black'}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            BlackChecker
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

        {/* タイトル */}
        <Box sx={name}>
            <BusinessIcon sx={{fontSize: 60,paddingTop:1}}/>{/*企業アイコンでもあり。サイズは不安*/}
            <Typography variant="h2" gutterBottom>
            企業名
            </Typography>
            <Typography variant="h6" gutterBottom sx={{paddingTop:4.3}}>
            業種
            </Typography>
        </Box>

        
        <Box sx={{display: 'flex', margin: 3}}>
            <Box>
                {/* 説明 */}
                <Box sx={{ flex: 1, marginRight: 5}}>
                    ◇◆◇データサイエンス界のNo.1コミュニティを目指しています◆◇◆―現在日本に1,000人程度しかいないデータサイエンティストを育成中！『世の中に求められる人材』を育成する当社で、自身のキャリアを描きませんか？"
                </Box>
                
                {/* ブラック評価 */}
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',marginTop: 5 }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        textColor="inherit" TabIndicatorProps={{sx: { backgroundColor: '#0a1228' } }}
                    >
                        <Tab label="総合" value="1" sx={{ color: value === '1' ? '#0a1228' : 'text.secondary' }}/>
                        <Tab label="詳細" value="2" sx={{ color: value === '2' ? '#0a1228' : 'text.secondary' }}/>
                    </TabList>
                    </Box>

                    <TabPanel value="1">

                        <Box>
                            <Typography variant="h5">Black Rate</Typography>
                        </Box>
                        
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center',alignItems: 'center', marginTop:10}}>
                            <CircularProgress variant="determinate" value={50} size="12rem" sx={{color:'#ffcc00'}}/>
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
                                    sx={{ color: 'text.secondary', fontSize:30 }}
                                >
                                50%
                                </Typography>
                            </Box>
                        </Box>
                    </TabPanel>

                    <TabPanel value="2">
                        <CardComInfoFormat
                            Employees = 'No Data'
                            AgeMean = 'No Data'
                            FemaleRate = 'No Data'
                            AnnualIncomeMean = 'No Data'
                            PaidHolidayDigestibility = 'No Data'
                            TurnoverRate = 'No Data'
                            FemaleManagerRate = 'No Data'
                            DurationMean = 'No Data'
                        />
                    </TabPanel>
                </TabContext>
            </Box>
            
            {/* 基本情報 */}
            <List
                sx={style}
                aria-label="company-info"
                subheader={
                    <ListSubheader component="div">企業情報</ListSubheader>
                }
            >
            <ListItem>代表者：</ListItem>
            <Divider component="li" />
            <ListItem>所在地：</ListItem>
            <Divider component="li" />
            <ListItem>Webサイト:</ListItem>
            <Divider component="li" />
            <ListItem>資本金：</ListItem>
            <Divider component="li" />
            <ListItem>従業員数：</ListItem>
            <Divider component="li" />
            <ListItem>支社：</ListItem>
            </List>
        </Box>
        </>
    )
}

export default CoInfo;