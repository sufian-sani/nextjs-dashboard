"use client";

import React from "react";
import styles from './sideBar.module.css';
import { type } from "os";

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

    const [items, setItems] = React.useState([
        { id: 1, name: "Product A", price: 100, discount: 0 },
        { id: 2, name: "Product B", price: 200, discount: 0 },
        { id: 3, name: "Product C", price: 150, discount: 0 },
        { id: 4, name: "Product D", price: 300, discount: 0 },
    ]);

    const [editingItemId, setEditingItemId] = React.useState(null);
    const [discountValue, setDiscountValue] = React.useState("");

    console.log("data", data);
    console.log("onButtonClick", onButtonClick);


    const handleAddDiscount = (item: any, currentDiscount: any) => {
        setEditingItemId(item.id);
        setDiscountValue(currentDiscount);
    };

    const handleSaveDiscount = (itemId: any) => {
        // Update your items array here
        setEditingItemId(null);
    };

    const handleCancelDiscount = () => {
        setEditingItemId(null);
        setDiscountValue("");
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
            </div>

            {/* discount test */}

            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.discount}</p>

                        {editingItemId === item.id ? (
                            <div>
                                <input
                                    type="number"
                                    value={discountValue}
                                    onChange={(e) => setDiscountValue(e.target.value)}
                                    placeholder="Discount amount"
                                    className="border border-[#F5A71C] rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A71C] focus:border-transparent text-gray-700 placeholder-gray-400"
                                />
                                <button onClick={() => handleSaveDiscount(item.id)}>Save</button>
                                <button onClick={handleCancelDiscount}>Cancel</button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => handleAddDiscount(item, item.discount)}
                                className="mt-2 mb-[2px] flex w-full items-center justify-end gap-1 text-xs text-[#F5A71C] hover:text-[#d98f0d]"
                            >
                                Add Discount
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* discount test */}

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
        </aside >
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
