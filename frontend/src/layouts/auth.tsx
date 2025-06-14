import shared from '@/styles/layouts/auth.module.css';
import { cherry } from "@/components/fonts/cherrybomb";
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface LayoutProps{
    children: React.ReactNode
}

export function Title({ children } : LayoutProps){
    return(
        <div className={shared.titleContainer}>
            {children}
        </div>  
    )
}

export function ContentLayout({children} : LayoutProps){
    return(
        <div>
            <div>{children}</div>
        </div>
    )
}

export function Logo({size= 75} : {size:number}){
    return(
        <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: 'easeInOut',
        }}>
        <Image
            src="/logo.png"
            alt="logo"
            width={size}
            height={size}
        />
        </motion.div>
        
    )
}

export function ContentLogo(){
    return(
        <div>
            <div>
                <h1 className={`${cherry.variable} ${shared.title}`}>Serabutin</h1>
                <p>Sebuah platform terpercaya untuk menawarkan ataupun mencari jasa serabutan sesuai lokasimu</p>
            </div>
            <Image
                src="/people.png"
                alt="serabutin"
                width={300}
                height={300}
            />
        </div>
    )
}