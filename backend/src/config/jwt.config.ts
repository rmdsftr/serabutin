export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'serabutin-key-alternative',
    signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN || '24h',
        issuer: 'serabutin'
    }
}