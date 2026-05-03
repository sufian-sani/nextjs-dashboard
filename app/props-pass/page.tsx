"use client";

import styles from './styles.module.css';
import SideBar from "@/app/component/props-pass/sideBar";
import DiscountSideBar from "@/app/component/discountSideBar/dicount";


export default function Page() {
    const data = {
        title: "Simple Yet Beautiful",
        description: "This is a demonstration of a dynamic, modern web design using glassmorphism, vibrant gradients, and micro-animations to create a premium user experience.",
        button: "Get Started"
    };
    return (
        <div className={styles.container}>
            <SideBar
                data={data}
                onButtonClick={() => console.log('Button clicked!')}
            />
            <div className={styles.card}>
                <span className={styles.badge}>Welcome</span>
                <h1 className={styles.title}>Simple Yet Beautiful</h1>
                <p className={styles.description}>
                    This is a demonstration of a dynamic, modern web design using glassmorphism,
                    vibrant gradients, and micro-animations to create a premium user experience.
                </p>
                <button className={styles.button}>
                    Get Started
                </button>
            </div>
            <DiscountSideBar />
        </div>
    );
}