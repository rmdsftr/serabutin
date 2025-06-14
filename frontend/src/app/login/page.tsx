'use client';

import { BackgroundLayout, TitleLayout, LogoLayout } from "@/layouts/login"
import { ContentLayout } from "@/layouts/auth";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import styles from '@/styles/pages/login.module.css';
import shared from '@/styles/pages/auth.module.css';
import userIcon from '@/assets/icons/username.png';
import passwordIcon from '@/assets/icons/password.png';
import Image from "next/image";
import PasswordInput from "@/components/ui/input/passwordInput";
import { poppins } from "@/components/fonts/poppins";

export default function LoginPage(){
    return(
        <div className={shared.body}>
            <LogoLayout/>
            <BackgroundLayout>
                <div className={shared.container}>
                    <TitleLayout></TitleLayout>
                    <br /><br />
                    <ContentLayout>
                        <div>
                            <Input
                                type="text"
                                placeholder="Masukkan username atau email"
                                leftIcon={
                                    <Image
                                        src={userIcon}
                                        alt="username"
                                        width={13}
                                        height={15}
                                    />
                                }
                                fullwidth required
                            />
                            <br />
                            <PasswordInput
                                type="password"
                                placeholder="Kata sandi"
                                fullwidth
                                leftIcon = {
                                    <Image
                                        src={passwordIcon}
                                        alt="password"
                                        width={13}
                                        height={15}
                                    />
                                }
                                required
                            />
                        </div>
                        <br />
                        <div className={`${poppins.variable} ${styles.forget}`}>
                            <a href="">Lupa password?</a>
                        </div>
                        <br /><br />
                        <div>
                            <Button
                                fullwidth
                            >MASUK</Button>
                        </div>
                        <br />
                        <div className={`${poppins.variable} ${shared.here}`}>
                            <p>Belum punya akun? 
                                <a href="/register"> Daftar di sini</a>
                            </p>
                        </div>
                    </ContentLayout>
                </div>
            </BackgroundLayout>
        </div>
    )
}