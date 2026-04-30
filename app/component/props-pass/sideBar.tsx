"use client";

import React from "react";
import styles from './sideBar.module.css';

export type sidebarProps = {
    data: {
        title: string;
        description: string;
        button: string;
    }
    onButtonClick: () => void;
}

const SideBarPanel: React.FC<sidebarProps> = ({
    data,
    onButtonClick
}) => {
    console.log("data", data);
    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
            </div>

            <div className={styles.menu}>
                <div className={`${styles.menuItem} ${styles.menuItemActive}`}>
                    Dashboard Overview
                </div>
                <div className={styles.menuItem}>
                    Performance Analytics
                </div>
                <div className={styles.menuItem}>
                    System Settings
                </div>
            </div>

            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                    onClick={() => onButtonClick()}
                >
                    {data.button}
                </button>
            </div>
        </aside>
    );
}

export default SideBarPanel;





//     if (!data) return null;

//     return (
//         <aside className={styles.sidebar}>
//             <div className={styles.header}>
//                 <h2 className={styles.title}>{data.title}</h2>
//                 <p className={styles.description}>{data.description}</p>
//             </div>

//             <div className={styles.menu}>
//                 <div className={`${styles.menuItem} ${styles.menuItemActive}`}>
//                     Dashboard Overview
//                 </div>
//                 <div className={styles.menuItem}>
//                     Performance Analytics
//                 </div>
//                 <div className={styles.menuItem}>
//                     System Settings
//                 </div>
//             </div>

//             <div className={styles.buttonWrapper}>
//                 <button
//                     className={styles.button}
//                     onClick={() => onButtonClick()}
//                 >
//                     {data.button}
//                 </button>
//             </div>
//         </aside>
//     );
// }
