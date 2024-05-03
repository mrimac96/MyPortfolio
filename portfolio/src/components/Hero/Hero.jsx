import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../../assets/hero/HeroImage.jpg";

export const Hero = () => {
    return <section className = {styles.container}>
        <div className = {styles.content}>
            <h1 className = {styles.title}> Hi, I'm Martina </h1>
            <p className = {styles.description}>
            I'm a Digital Marketing Manager with over four years of experience in digital brand development and management.
            </p>
            <a href="mailto:martina.rimac1@gmail.com" className = {styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={HeroImage} alt="Hero image of me" className = {styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};
