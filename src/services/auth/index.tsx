import AuthApi from "services/api/auth";


const AuthServices = {
    login: async (email: string, password: string) => {
        const res = await AuthApi.login(email, password);
        console.log(res);
    }

}


export default AuthServices;