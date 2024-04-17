import { Button, FormControl, MenuItem, Select } from "@mui/material"
import { DashboardItem } from "./components/DashbordItem";

const Dashboard = () => {
    return (
        <div className="w-full h-full bg-gray-50 flex-col">
            <div className="p-2 min-h-24 flex flex-col justify-between gap-y-8">
                <h1>
                    Welcome John Doe,
                </h1>
                <div className="px-2 flex justify-start gap-x-4">
                    <Button variant="contained">New invoice</Button>
                    <Button variant="contained">New client</Button>
                </div>
            </div>
            <div className="p-2 m-4">
                <div className="w-full flex justify-between items-center">
                    <div className="text-2xl font-medium">
                        Overview
                    </div>
                    <FormControl className="w-40">
                        <Select value={'Last 30 days'} displayEmpty>
                            <MenuItem value='Last 30 days'>Last 30 days</MenuItem>
                            <MenuItem value='Last 7 days'>Last 7 day</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="p-2 flex flex-col gap-y-4">
                <DashboardItem buttonAction={() => console.log('oi')} buttonLabel="View Details" icon="overview.svg" iconAlt="Overview" title="Billings" value="$478.43"></DashboardItem>
                <DashboardItem buttonAction={() => console.log('oi')} buttonLabel="View Details" icon="overview.svg" iconAlt="Overview" title="Clients" value="11"></DashboardItem>
                <DashboardItem buttonAction={() => console.log('oi')} buttonLabel="View Details" icon="overview.svg" iconAlt="Overview" title="Due payments" value="$71.37"></DashboardItem>
            </div>
        </div>


    )
}

export { Dashboard }