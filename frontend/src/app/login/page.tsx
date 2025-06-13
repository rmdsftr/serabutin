'use client';

import { BackgroundLayout, TitleLayout, ContentLayout, LogoLayout } from "@/layouts/login"
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import styles from '@/styles/pages/login.module.css';
import userIcon from '@/assets/icons/username.png';
import passwordIcon from '@/assets/icons/password.png';
import Image from "next/image";
import PasswordInput from "@/components/ui/input/passwordInput";
import { poppins } from "@/components/fonts/poppins";

export default function LoginPage(){
    return(
        <div className={styles.body}>
            <LogoLayout></LogoLayout>
            <BackgroundLayout>
                <div>
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
                                        width={15}
                                        height={18}
                                    />
                                }
                                fullwidth
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
                                        width={15}
                                        height={18}
                                    />
                                }
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
                        <div className={`${poppins.variable} ${styles.here}`}>
                            <p>Belum punya akun? 
                                <a href=""> Daftar di sini</a>
                            </p>
                        </div>
                    </ContentLayout>
                </div>
            </BackgroundLayout>
        </div>
    )
}