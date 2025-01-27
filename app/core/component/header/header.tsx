"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Logo } from "../logo";
import { i18n, TFunction } from "i18next";
const data = [
  {
    title: "github",
    link: "https://github.com/Anteel1",
    img: "/github_icon.svg",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/long-ki%E1%BA%BFn-l%C6%B0%C6%A1ng-845858240/",
    img: "/linkedin_icon.svg",
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/ant.eel2304/",
    img: "/instagram_icon.svg",
  },
];
export function Header({header_lang, lang_func, language} : {header_lang : TFunction, lang_func : any,language:string}) {
  const lang = ["EN", "VI"];
  // const [language, setLanguage] = useState<any>(lang[0]);
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    const element = document.getElementById(styles.header);
    element?.classList.add("animate-slide-in");
  }, []);
  const AboutItem = () => {
    return data.map((item,index) => (
      <div key={item.title} className={`m-6 delay-${index*100} opacity-0 transform transition-all duration-${index*500}`}>
        <Link href={item.link}>
          <Image
            alt={item.title}
            width={24}
            height={24}
            className={styles.logo_icon}
            src={item.img}
          />
        </Link>
      </div>
    ));
  };

  const showSlideMenu = () => {
    setIsShow(!isShow);
  };
  const DropLanguageMenu = () => {
    return (
      <>
        {lang.map((item, index) => (
          <div className={styles.lang_item} onClick={() => {
            // setLanguage(lang[index])
            // lang_func.changeLanguage(lang[index].toLowerCase())
            lang_func(lang[index])
            }} key={index}>
            {item}
          </div>
        ))}
      </>
    );
  };

  const MobileMenu = ({ isShow }: { isShow?: boolean }) => {
    return (
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 transform ${
          isShow ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 text-white">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  

  return (
    <header
      className="opacity-0"
      id={styles.header}
    >
      <MobileMenu isShow={isShow} />
      <nav className={styles.main}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'space-between'
          }}
        >
          <Link style={{}} className={styles.logo_header} href="/">
            <Logo />
          </Link>
          {/* <div style={{flex:1}}></div> */}
          <div style={{}} className={styles.nav_item}>
            <div className="">
              <Link
                className={styles.logo_header}
                style={{ padding: 10 }}
                href="/"
              >
                {header_lang("common:about")}
                <div
                  style={{ top: "55%" }}
                  className={styles.socialIconsContainer}
                >
                  <AboutItem />
                </div>
              </Link>
            </div>
            <div className="">
              <Link
                style={{ padding: 10 }}
                href="https://drive.usercontent.google.com/uc?id=1PlEpXbbQ9YSSJkMGAt4zDxlfvS61tERg&authuser=0&export=download"
                download
              >
                {header_lang("common:cv")}
              </Link>
            </div>
            <div className="">
              <Link
                style={{ padding: 10 }}
                href="#"
              >
                {language}
                <Image width={24} height={24} alt='down icon' src='/arrow_down.svg'/>
                <div className={styles.drop_menu}><DropLanguageMenu /></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.mobile_icon}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          className=""
        >
          <Image
            onClick={showSlideMenu}
            alt="logo"
            width={24}
            height={24}
            src="/menu_mobile.svg"
          />
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className=""
          >
          </div>
        </div>
      </nav>
    </header>
  );
}
