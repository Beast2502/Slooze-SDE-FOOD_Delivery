'use client';

import { useRouter } from "next/navigation"
import "./Header.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

const Header = () => {

    const router = useRouter();
    const [token, setToken] = useState('');
    const t = useTranslations('HomePage');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const handleLogOut = () => {
        axios.get('/api/auth/logout').then(res => {
            sessionStorage.clear('')
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            router.push('/login')
        })

    }

    const languages = [
        { name: "English", value: "en" },
        { name: 'French', value: "fr" },
        { name: 'Dutch', value: 'de' }
    ]

    const [lang, setLang] = useState('eng')
    const switchLanguage = (locale) => {
        console.log(locale, "LOCALE CHECK")
        setLang(locale)
        Cookies.set('NEXT_LOCALE', locale);
        router.refresh();  // refresh route to trigger locale reload
    };
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo" onClick={() => router.push('/')}>{t('title')}</div>
                <ul className="nav-links">
                    <li><a onClick={() => router.push('/')}>{t('Home')}</a></li>
                    {/* <li><a href="#">Order</a></li> */}
                    <li><a onClick={() => router.push('/user/restaurant')}>{t('Restaurants')}</a></li>
                    {
                        token ?
                            <>
                                <li><a onClick={() => router.push('/user/order-history')} >{t('OrderHistory')}</a></li>
                                <li><a onClick={() => router.push('/user/order-history')} ><i className="fa-solid fa-user"></i></a></li>
                                <li><a onClick={handleLogOut} >{t('LogOut')}</a></li>

                                <li>
                                    <div className="language-selector">
                                        <label htmlFor="language">🌐 Select Language:</label>
                                        <select id="language"
                                            onChange={
                                                (e) => { switchLanguage(e.target.value) }
                                            }
                                            value={Cookies.get('NEXT_LOCALE')}
                                        >
                                            {
                                                languages.map(lang => <option key={lang.value} value={lang.value}>{lang.name}</option>
                                                )
                                            }

                                        </select>
                                    </div>
                                </li>
                            </> :
                            <>
                                <li><a onClick={() => router.push('/login')} >{t('Login')}</a></li>
                                <li>
                                    <div className="language-selector">
                                        <label htmlFor="language">🌐 Select Language:</label>
                                        <select id="language"
                                            onChange={
                                                (e) => { switchLanguage(e.target.value) }
                                            }
                                            value={Cookies.get('NEXT_LOCALE')}
                                        >
                                            {
                                                languages.map(lang => <option key={lang.value} value={lang.value}>{lang.name}</option>
                                                )
                                            }

                                        </select>
                                    </div>
                                </li></>
                    }
                </ul>
            </div>
        </nav>
    )

}

export default Header