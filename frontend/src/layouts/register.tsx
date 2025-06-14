import styles from '@/styles/layouts/register.module.css';
import shared from '@/styles/layouts/auth.module.css';
import React from "react";
import { cherry } from "@/components/fonts/cherrybomb";
import { poppins } from "@/components/fonts/poppins";
import { ContentLogo, LayoutProps } from "./auth";
import { Title, Logo } from "./auth";

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
            <Logo size={50}/>
            <h1 className={`${poppins.variable} ${shared.subtitle}`}>
                Register ke <span className={`${cherry.variable} ${shared.span}`}>Serabutin</span> yuk
            </h1>
        </Title>
    )
}

export function LogoLayout(){
    return(
        <div className={`${poppins.variable} ${styles.margin}`}>
            <ContentLogo/>
        </div>
    )
}