import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})