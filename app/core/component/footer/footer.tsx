"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Logo } from "../logo";
export function Footer() {
    return (
    <>
        <div className={styles.line_footer}></div>
      <div className="flex flex-row justify-between">
        <div className="flex m-2"> 
            <Logo />
            </div>
        <div style={{alignItems:'center'}} className="flex m-2"><p>@2023 - 2024 Personal</p> </div>
      </div>
    </>
    )
}
