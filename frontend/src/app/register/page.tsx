'use client';

import { BackgroundLayout, TitleLayout, LogoLayout } from "@/layouts/register"
import { ContentLayout } from "@/layouts/auth";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import shared from '@/styles/pages/auth.module.css';
import userIcon from '@/assets/icons/newuser.png';
import passwordIcon from '@/assets/icons/newpw.png';
import pwIcon from '@/assets/icons/key.png';
import emailIcon from '@/assets/icons/email.png';
import Image from "next/image";
import PasswordInput from "@/components/ui/input/passwordInput";
import { poppins } from "@/components/fonts/poppins";

export default function RegisterPage(){
    return(
        <div className={shared.body}>
            <BackgroundLayout>
                <div className={shared.container}>
                    <TitleLayout></TitleLayout>
                    <br />
                    <ContentLayout>
                        <div>
                            <Input
                                type="text"
                                placeholder="Buat username akun"
                                leftIcon={
                                    <Image
                                        src={userIcon}
                                        alt="username"
                                        width={16}
                                        height={13}
                                    />
                                }
                                size="large" fullwidth required
                            />
                            <br />
                            <Input
                                type="email"
                                placeholder="Daftarkan email"
                                leftIcon={
                                    <Image
                                        src={emailIcon}
                                        alt="username"
                                        width={13}
                                        height={11}
                                    />
                                }
                                size="large" fullwidth required
                            />
                            <br />
                            <PasswordInput
                                type="password"
                                placeholder="Kata sandi"
                                fullwidth required
                                leftIcon = {
                                    <Image
                                        src={passwordIcon}
                                        alt="password"
                                        width={13}
                                        height={15}
                                    />
                                }
                                size="large"
                            />
                            <br />
                            <PasswordInput
                                type="password"
                                placeholder="Konfirmasi kata sandi"
                                fullwidth required
                                leftIcon = {
                                    <Image
                                        src={pwIcon}
                                        alt="password"
                                        width={13}
                                        height={15}
                                    />
                                }
                                size="large"
                            />
                        </div>
                        <br />
                        <div>
                            <Button
                                fullwidth
                            >DAFTAR</Button>
                        </div>
                        <br />
                        <div className={`${poppins.variable} ${shared.here}`}>
                            <p>Sudah punya akun? 
                                <a href="/login"> Masuk di sini</a>
                            </p>
                        </div>
                    </ContentLayout>
                </div>
            </BackgroundLayout>
            <LogoLayout/>
        </div>
    )
}