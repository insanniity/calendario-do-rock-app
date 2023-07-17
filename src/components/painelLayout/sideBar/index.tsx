import {Divider, FormControlLabel, List} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuItem from "./menuItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {MaterialUISwitch} from "components/painelLayout/switch";
import {useAppDispatch, useAppSelector, useConfig} from "hooks";
import {setTheme} from "store/config";

const SideBar = () => {
    const { theme} = useAppSelector(useConfig)
    const dispatch = useAppDispatch();

    const handleTheme = () => {
        dispatch(setTheme());
    }

    return   (
        <List component="nav">
            <MenuItem
                icon={<DashboardIcon />}
                text="Painel"
                link="/painel"
            />
            <MenuItem
                icon={<PersonIcon />}
                text="Usuários"
                link="/painel/usuarios"
                role={['ROLE_ADMIN']}
            />
            <MenuItem
                icon={<LocationOnIcon />}
                text="Locais"
                link="/painel/locais"
            />
            <MenuItem
                icon={<CalendarMonthIcon />}
                text="Eventos"
                link="/painel/eventos"
            />
            <MenuItem
                icon={<LibraryMusicIcon />}
                text="Bandas"
                link="/painel/bandas"
            />
            <MenuItem
                icon={<UploadFileIcon />}
                text="Importar"
                link="/painel/importar"
            />
            <Divider sx={{ my: 1 }} />
            <FormControlLabel
                onClick={handleTheme}
                control={<MaterialUISwitch sx={{ m: 1 }} checked={theme === "dark"} />}
                label="DarkMode"
            />
        </List>
    )
}

export default SideBar;