import { Button, ClickAwayListener, FormControl, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select } from "@mui/material"
import { ShowableWrapper } from "../../../components/ShowableWrapper"
import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/authContext"

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleOptionButtonClick = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }

    return (
        <header className="p-2 border-b-2 pb-4">
            <div className="flex justify-between items-center font-medium text-2xl">
                <div className="flex items-center">
                    <h3>Invoicer</h3>
                    <img src="/accelerate.svg" alt="Ship" className="w-12 h-12" />
                </div>
                <ShowableWrapper shown={isAuthenticated}>
                    <div>
                        <Button size="medium">
                            <img src="./notification.svg" alt="Notification" className="w-8 h-8" />
                        </Button>
                        <Button size="medium" onClick={handleOptionButtonClick}>
                            <img src="./options.svg" alt="Options" className="w-12 h-12" />
                        </Button>
                        <ShowableWrapper shown={isOptionsOpen}>
                            <ClickAwayListener onClickAway={handleOptionButtonClick}>
                                <div className="absolute z-10 right-16 top-2 bg-gray-200 rounded-md shadow-sm" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                                    <List className="">
                                        <ListItemButton>
                                            <ListItemText primary={'B'}></ListItemText>
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary={'A'}></ListItemText>
                                        </ListItemButton>
                                        <ListItemButton onClick={logout}>
                                            <ListItemText primary='Logout'></ListItemText>
                                        </ListItemButton>
                                    </List>
                                </div>
                            </ClickAwayListener>
                        </ShowableWrapper>
                    </div>
                </ShowableWrapper>
            </div>
        </header>
    )
}

export { Header }