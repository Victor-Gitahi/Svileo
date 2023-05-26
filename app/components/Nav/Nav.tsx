import React from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/public/Logo-primary.svg";
import Link from "next/link";
import CustomButton from "../CustomButton/CustomButton";
// Import the icons
import FAQ from "@/public/faq.svg";
import money from "@/public/money.svg";
import wallet from "@/public/wallet.svg";
import NavBtnWrapper from "../NavBtnWrapper/NavBtnWrapper";

export default function Nav() {
  return (
    <nav
      className={`${styles.nav} d-flex align-items-center justify-content-evenly`}
    >
      <Image src={Logo} alt="Svileo Logo" className={`${styles.Logo}`} />
      <div className={`${styles.nav_links_container}`}>
        <Link href={"/"} className={`${styles.nav_link}`}>
          <Image
            src={FAQ}
            alt="FAQ icon"
            className={`${styles.nav_link_icon} me-2`}
          />
          FAQ
        </Link>
        <Link href={"/"} className={`${styles.nav_link}`}>
          <Image
            src={money}
            alt="Money icon"
            className={`${styles.nav_link_icon} me-2`}
          />
          1200
        </Link>
        <Link href={"/"} className={`${styles.nav_link}`}>
          <Image
            src={wallet}
            alt="Wallet icon"
            className={`${styles.nav_link_icon} me-2`}
          />
          wallet
        </Link>
      </div>
      <NavBtnWrapper />
    </nav>
  );
}
