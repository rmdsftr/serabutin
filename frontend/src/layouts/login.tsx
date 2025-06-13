import Image from "next/image"
import styles from '../styles/layouts/login.module.css';
import React from "react";
import { cherry } from "@/components/fonts/cherrybomb";
import { poppins } from "@/components/fonts/poppins";

interface LayoutProps{
    children: React.ReactNode
}

function Title({ children } : LayoutProps){
    return(
        <div className={styles.titleContainer}>
            {children}
        </div>  
    )
}

export function BackgroundLayout({children} : LayoutProps){
    return(
        <div className={styles.background}>
            {children}
        </div>
    )
}

export function TitleLayout(){
    return(
        <Title>
            <Image
                src="/logo.png"
                alt="logo"
                width={75}
                height={75}
            />
            <h1 className={`${poppins.variable} ${styles.subtitle}`}>
                Welcome back! <br />
                Login lagi ke <span className={`${cherry.variable} ${styles.span}`}>Serabutin</span> yuk
            </h1>
        </Title>
    )
}

export function ContentLayout({children} : LayoutProps){
    return(
        <div>
            <div>{children}</div>
        </div>
    )
}

export function LogoLayout(){
    return(
        <div className={`${poppins.variable} ${styles.margin}`}>
            <div>
                <h1 className={`${cherry.variable} ${styles.title}`}>Serabutin</h1>
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