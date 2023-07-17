import {ReactNode, useEffect} from "react";
import {useMatch, useNavigate, useResolvedPath} from "react-router-dom";
import {ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import {useAppDispatch, useAppSelector, useConfig} from "hooks";
import {setDrawerOpen, setMenuAtual} from "store/config";
import {hasAnyAuthority} from "store/auth";


type Props = {
    icon: ReactNode;
    text: string;
    link: string;
    role?: string[];
}

const MenuItem = ({icon, text, link, role}: Props) => {
    const navigate = useNavigate();
    const resolved = useResolvedPath(link);
    const match = useMatch({path: resolved.pathname, end: true});
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const {drawerOpen} = useAppSelector(useConfig);
    const hasRole = useAppSelector(state => hasAnyAuthority(state, role));
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (match) dispatch(setMenuAtual(text))
    }, [dispatch, match, text]);

    if (role && !hasRole) return null;

    return(
        <>
            <ListItem disablePadding sx={{display: "block", textDecoration: 'ImageListItem'}} onClick={() => {
                if (sm) dispatch(setDrawerOpen(false));
                navigate(link)
            }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: drawerOpen ? "initial" : "center",
                        px: 2.5,
                    }}
                    selected={!!match}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: drawerOpen ? 3 : "auto",
                            justifyContent: "center",
                            color: (t) => t.palette.text.primary,
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{opacity: drawerOpen ? 1 : 0}}/>
                </ListItemButton>
            </ListItem>
        </>
    );
}

export default MenuItem;