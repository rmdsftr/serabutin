import styles from '@/styles/layouts/login.module.css';
import shared from '@/styles/layouts/auth.module.css';
import React from "react";
import { cherry } from "@/components/fonts/cherrybomb";
import { poppins } from "@/components/fonts/poppins";
import { LayoutProps, Title, Logo, ContentLogo } from "./auth";

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
            <Logo size={75}/>
            <h1 className={`${poppins.variable} ${shared.subtitle}`}>
                Welcome back! <br />
                Login lagi ke <span className={`${cherry.variable} ${shared.span}`}>Serabutin</span> yuk
            </h1>
        </Title>
    )
}

export function LogoLayout(){
    return(
        <div className={`${poppins.variable} ${styles.margin}`}>
            <ContentLogo />
        </div>
    )
}