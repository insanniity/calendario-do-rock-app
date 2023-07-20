import {Avatar, Box, Card, Typography} from "@mui/material";
import {useAppSelector, useAuth} from "hooks";

const HomePage =  () => {
    const {username} = useAppSelector(useAuth)

    return (
        <>
            <Card
                elevation={4}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingY: 2,
                    paddingX: 4,
                }}
            >
                <Avatar
                    alt={username}
                    sx={{
                        backgroundColor: "primary.main",
                        marginRight: 4,
                        width: { xs: 40, sm: 42.5, md: 45, lg: 50 },
                        height: { xs: 40, sm: 42.5, md: 45, lg: 50 },
                    }}
                ></Avatar>
                <Box>
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontSize: { xs: 25, sm: 30, md: 32, lg: 35 },
                            marginBottom: -1.2,
                        }}
                    >
                        {username}
                    </Typography>
                    <Typography
                        sx={{
                            color: "primary.main",
                            opacity: 0.6,
                            marginLeft: 0.5,
                            fontSize: { xs: 14, sm: 16, md: 17, lg: 18 },
                        }}
                    >
                        {"Bem vindo !"}
                    </Typography>
                </Box>
            </Card>
        </>
    )
}

export default HomePage