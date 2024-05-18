export interface Token {
    jti: string;
    iat: number;
    userName: string;
    name: string;
    email: string;
    role: string;
    exp: number;
    iss: string;
    aud: string;
}
