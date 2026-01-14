import React from 'react';
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material';
import Header from "components/Header"
import OverViewChart from "components/OverviewChart"

const Overview = () => {
    const [view, setView] = useState("units");

    return (
        <Box>
            <Header title="OVERVIEW"
                subtitle="Overview of general revenue and profit" />
            <Box>
                <FormControl>
                    <InputLabel>View</InputLabel>
                    <Select
                        value={view}
                        lable="View"
                        onChange={(e) => setView(e.target.value)}>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="units">Units</MenuItem>
                    </Select>
                </FormControl>
                <OverViewChart view={view}/>
            </Box>
        </Box>
    )
}

export default Overview;
