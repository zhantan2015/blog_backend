const config = {
    SECRET_KEY: 'jta9d2luuq'
}

type AuthenticationRouter = {
    [x: string]: any[]
}

export const AuthenticationRouter: AuthenticationRouter = {
    "GET": [""],
    "POST": ["/category","/article"],
    "PUT": [],
    "DELETE": [],
    "OPTIONS": []
}

export default config