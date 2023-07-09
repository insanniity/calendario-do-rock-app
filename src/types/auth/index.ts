

export type AuthResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type AuthData = {
    sub: string;
    aud: string;
    nbf: number;
    iss: string;
    exp: number;
    iat: number;
    authorities: string[];
    username: string;
}