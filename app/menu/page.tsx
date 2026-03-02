"use client";

import { useState } from "react";

 import Menu from "@/app/component/menu";
 import data from "@/app/api/menu/menu.api";

export default function Page() {

    // start start

    // const itemsByCategory = {
    //     Fruits: ["apple", "banana"],
    //     Vegetables: ["carrot", "spinach"],
    //     Drinks: ["water", "juice"]
    // } as const;

    // // Category becomes "Fruits" | "Vegetables" | "Drinks" | "All"
    // type Category = keyof typeof itemsByCategory | "All";

    // // usage
    // function filterByCategory(cat: Category) {
    //     if (cat === "All") return Object.values(itemsByCategory).flat();
    //     return itemsByCategory[cat].slice();
    // }

    // const categories: Category[] = ["All", ...Object.keys(itemsByCategory) as Category[]];

    // console.log(categories);
    

    // start end

    // element pass start


    const [selectedId, setSelectedId] = useState(1);


    // element pass end

  

  return (
    <main>
      <div>
        <h1>Test Page</h1>
        <p>This is a test page for Next.js 13.</p>
      </div>
      {/* <div>
            <h2>Table Item:</h2>
            <pre>{JSON.stringify(tables[0], null, 2)}</pre>
        </div> */}
      <span>------------------------</span>
      {/* <div>
            <h2>Status Meta:</h2>
            <pre>{JSON.stringify(STATUS_META, null, 2)}</pre>
        </div> */}
      <span>-----------------------------</span>

      <div>
        <Menu items={data} selectedId={selectedId} onPick={setSelectedId} />
        <div>Selected ID: {selectedId}</div>
      </div>

    </main>
  )
}