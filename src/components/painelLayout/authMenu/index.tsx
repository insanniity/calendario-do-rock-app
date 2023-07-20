import PersonIcon from '@mui/icons-material/Person';
import {useRef, useState} from "react";
import {
    Avatar,
    Button,
    ButtonGroup,
    ClickAwayListener, Divider,
    Grow, MenuItem, MenuList,
    Paper,
    Popper,
    Theme,
    Typography,
    useMediaQuery
} from "@mui/material";
import {useAppDispatch, useAppSelector, useAuth} from "hooks";
import {logout} from "store/auth";
import {setAuthenticated} from "store/config";

const AuthMenu = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const sm = useMediaQuery((theme:Theme) => theme.breakpoints.down("md"));
    const {username} = useAppSelector(useAuth);
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const signout = async () => {
        dispatch(logout());
        dispatch(setAuthenticated(false));
    }

    return (
        <>
            <ButtonGroup variant="contained" disableElevation  ref={anchorRef} aria-label="split button">
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleToggle}
                >
                    {!sm &&
                        <Typography sx={{mr:1, fontSize: 14}}>
                            {username}
                        </Typography>
                    }
                    <Avatar><PersonIcon /></Avatar>
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem sx={{minWidth: 200}}>
                                    <Divider />
                                    <MenuItem onClick={() => signout()}>
                                        Sair
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

export default AuthMenu;