"use client";

export default function Page() {

  // table status start
  // type TableStatus = "available" | "unpaid" | "to_confirm" | "reserved";

  // type TableItem = {
  //   id: string;
  //   label: string;
  //   section: string; // floor / order type name
  //   status: TableStatus;
  // };

  // const tables: TableItem[] = [
  //   {
  //     id: "1",
  //     label: "Table 1",
  //     section: "Floor 1",
  //     status: "available",
  //   },
  //   {
  //     id: "2",
  //     label: "Table 2",
  //     section: "Floor 1",
  //     status: "unpaid",
  //   },
  // ];

  // const STATUS_META: Record<
  //   TableStatus,
  //   { label: string; dot: string; card: string; border: string }
  // > = {
  //   available: {
  //     label: "Available",
  //     dot: "bg-lime-500",
  //     card: "bg-white",
  //     border: "border-lime-500",
  //   },
  //   unpaid: {
  //     label: "Unpaid",
  //     dot: "bg-amber-500",
  //     card: "bg-gradient-to-b from-[#FFE8B8] to-[#F7B23D]",
  //     border: "border-transparent",
  //   },
  //   to_confirm: {
  //     label: "To confirm",
  //     dot: "bg-sky-500",
  //     card: "bg-gradient-to-b from-[#CFF5FF] to-[#29C7E8]",
  //     border: "border-transparent",
  //   },
  //   reserved: {
  //     label: "Reserved",
  //     dot: "bg-red-500",
  //     card: "bg-gradient-to-b from-[#FFD3D3] to-[#E14C4C]",
  //     border: "border-transparent",
  //   },
  // };

  // const meta = STATUS_META[tables[0].status];
  // console.log('STATUS_META', STATUS_META.);

  // table status end
  // ------------------
  // type TableStatusResponse = { tableId: number; status: string; updatedAt: string; };

  // const jsonString = '{"tableId":1,"status":"occupied","updatedAt":"2026-02-25T10:00:00Z"}';

  // function safeJsonParse<T>(str: string): T | null {
  //   try {
  //     return JSON.parse(str) as T;
  //   } catch {
  //     return null;
  //   }
  // }

  // const result = safeJsonParse<TableStatusResponse>(jsonString);

  // if (result) {
  //   console.log(result.status); // "occupied"
  // } else {
  //   console.log("Invalid JSON");
  // }
  // ------------------

  // type ApiTableStatus = {
  //   id: number;
  //   name: string; // "Available"
  //   code: string; // "available"
  //   // display_order: number;
  // };

  // type TableStatusResponse = {
  //   table_statuses: ApiTableStatus[];
  // };

  // function safeJsonParse<T>(raw: string | null): T | null {
  //   if (!raw) return null;
  //   try {
  //     return JSON.parse(raw) as T;
  //   } catch {
  //     return null;
  //   }
  // }

  // const statusStored = safeJsonParse<TableStatusResponse>(
  //   JSON.stringify({
  //     table_statuses: [
  //       { id: 5, name: "Available", code: "available", display_order: 0 },
  //       { id: 8, name: "Reserved", code: "reserved", display_order: 0 },
  //       { id: 7, name: "To Confirm", code: "to_confirm", display_order: 0 },
  //       { id: 9, name: "test", code: "test", display_order: 0 },
  //     ],
  //   })
  // );

  // console.log('-----------------------------',statusStored);

// const sections = ["todo", "inProgress", "done"];

// type TableItem = {
//   id: number;
//   title: string;
//   section: string;
// };

// const tasks: TableItem[] = [
//   { id: 1, title: "Setup project", section: "todo" },
//   { id: 2, title: "Build UI", section: "inProgress" },
//   { id: 3, title: "Deploy app", section: "done" },
//   { id: 4, title: "Fix bug", section: "todo" }
// ];

// const map: Record<string, TableItem[]> = {};

// for (const s of sections) {
//   map[s] = [];
// }

// for (const task of tasks) {
//   map[task.section].push(task);
// }

// console.log(map);

// ------------------------generic

function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");

// ------------------------generic

  

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

      <div className="p-6">

      </div>

    </main>
  )
}