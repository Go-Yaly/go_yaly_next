"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../constants/navLinks";
import SearchBar from "./SearchBar";
import styles from "../styles/navbar.module.css";
import MainBtn from "./MainBtn";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar(props) {
  const pathname = usePathname();
  const [isToggled, setIsToggled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLinks = () => {
    return navLinks.map((el) => {
      return (
        <Link href={el.path} key={el.key} className={`${styles.nav_link} ${el.path === pathname ? styles.current_link : ""}`}>
          {el.name}
        </Link>
      );
    });
  };

  return (
    <nav className={`${styles.nav_wrapper} ${isFixed ? styles.fixed : ""} ${styles[props.position]}`}>
      <div className={styles.nav_block}>
        <Link href="/" className={styles.logo_link}>
          <Image src={logo} alt="company logo" className={styles.logo_img} />
        </Link>
        <SearchBar carsName={props.carsName} />
        <div className={styles.links_desktop}>{renderNavLinks()}</div>
        <div className={styles.nav_btn}>
          <MainBtn name="Book Now" size="btn_md" link="/listing" />
        </div>
        <div className={styles.mobile_menu}>
          <HiOutlineMenu onClick={() => setIsToggled(true)} />
        </div>
        <div className={`${styles.menu_drawer} ${isToggled ? styles.menu_open : ""}`}>
          <IoClose className={styles.menu_btn_close} onClick={() => setIsToggled(false)} />
          <div className={styles.menu_content}>{renderNavLinks()}</div>
        </div>
      </div>
    </nav>
  );
}
