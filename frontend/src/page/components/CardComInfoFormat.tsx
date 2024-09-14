import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Box,Typography} from '@mui/material';


interface CardComInfoProps {
    Employees: string;
    AgeMean: string;
    FemaleRate: string;
    AnnualIncomeMean: string;
    PaidHolidayDigestibility: string;
    TurnoverRate: string;
    FemaleManagerRate: string;
    DurationMean: string;
}

const CardFormat: React.FC<CardComInfoProps> = ({
    Employees,
    AgeMean,
    FemaleRate,
    AnnualIncomeMean,
    PaidHolidayDigestibility,
    TurnoverRate,
    FemaleManagerRate,
    DurationMean
}) => {
    return (
        <Box>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        従業員数:{Employees}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        平均年齢:{AgeMean}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        女性比率:{FemaleRate}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        平均年収:{AnnualIncomeMean}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        有休消化率:{PaidHolidayDigestibility}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        離職率:{TurnoverRate}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        管理職の女性比率:{FemaleManagerRate}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{textAlign: 'left', margin:1, height: '50px'}}>
                <CardContent>
                    <Typography sx={{ fontSize:15 }}>
                        平均勤続年数:{DurationMean}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardFormat;
