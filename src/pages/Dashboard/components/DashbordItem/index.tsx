import { Button } from "@mui/material"

export interface DashboardProps {
    icon: string;
    iconAlt: string
    title: string;
    value: string;
    buttonLabel: string;
    buttonAction: () => unknown;
}

const DashboardItem = ({ buttonAction, buttonLabel, icon, iconAlt, title, value }: DashboardProps) => {
    return (
        <div className="w-full bg-white rounded-md drop-shadow-lg">
            <div className="p-4 min-h-24 w-full flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-x-2 text-2xl">
                        <img src={icon} alt={iconAlt} className="w-12 h-12" />
                        {title}
                    </div>
                    {value}
                </div>
            </div>
            <div className="w-full p-2 bg-gray-100">
                <Button onClick={buttonAction}>{buttonLabel}</Button>
            </div>
        </div>
    )
}

export { DashboardItem }