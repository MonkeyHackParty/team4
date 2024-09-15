import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';

interface CardComInfoProps {
    Employees?: number;
    AgeMean?: number;
    FemaleRate?: number;
    AnnualIncomeMean?: number;
    PaidHolidayDigestibility?: number;
    TurnoverRate?: number;
    FemaleManagerRate?: number;
    DurationMean?: number;
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
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        従業員数: {Employees ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        平均年齢: {AgeMean ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        女性比率: {FemaleRate !== undefined ? `${FemaleRate}%` : 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        平均年収: {AnnualIncomeMean ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        有休消化率: {PaidHolidayDigestibility ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        離職率: {TurnoverRate ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        管理職の女性比率: {FemaleManagerRate !== undefined ? `${FemaleManagerRate}%` : 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ textAlign: 'left', margin: 1, height: '50px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }}>
                        平均勤続年数: {DurationMean ?? 'No Data'}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardFormat;
