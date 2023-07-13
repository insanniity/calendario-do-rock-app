import {useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";
import AuthApi from "services/api/auth";
import {useAppDispatch, useAppSelector, useAuth} from "hooks";
import {useEffect} from "react";
import {toast} from "react-toastify";


type FormState = {
    email: string;
    senha: string;
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>({defaultValues: {email: "admin@gmail.com", senha: "123456"}});
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(useAuth);

    const onSubmit = async ({email, senha}:FormState) => {
        dispatch(AuthApi.login({password: senha, username: email }));
    };

    useEffect(() => {
        if(error) {
            toast.error(error)
        }
    }, [error]);


    return (
        <Box component="form"  onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                autoComplete="email"
                autoFocus
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email", {required: {value: true, message: "Email obrigatório"}})}
            />
            <TextField
                margin="normal"
                fullWidth
                label="Senha"
                type="password"
                id="senha"
                autoComplete="current-password"
                error={!!errors.senha}
                helperText={errors.senha?.message}
                {...register("senha", {required: {value: true, message: "Senha obrigatória"}})}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
        </Box>
    )
}

export default LoginForm;