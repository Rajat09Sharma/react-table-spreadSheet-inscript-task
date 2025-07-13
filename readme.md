# 📊 Ract Spreadsheet
This React project demonstrates a dynamic data table built using @tanstack/react-table, complete with:

    - ✅ Column resizing

    - 🎨 Conditional background and text styling

    - 📊 Text alignment based on field type

    - 💊 Capsule-style badges for status and priority

    - 📦 Clean and responsive layout

---

## 🚀 Features

- Resizable Columns
   - Adjust column widths with drag-and-drop.

- Conditional Cell Styling
    - Background and text color changes based on status and priority.

- Text Alignment

  - Right-aligned: submitter, due, value

  - Center-aligned: status, priority

- Responsive & Accessible

   - Long content trimmed with ... and tooltip on hover

   - Capsule-style appearance for key status indicators


---

## 🧱 Tech Stack

- React

- @tanstack/react-table

- react-icons

- CSS (custom styling)

---

## 🛠️ Setup Instructions

1. Clone the repository

git clone [https://github.com/your-username/react-table-project.git](https://github.com/Rajat09Sharma/react-table-spreadSheet-inscript-task/)
cd react-table-project

2. Install dependencies

npm install

3. Start the development server

npm run dev

## 📁 Folder Structure

src/
├── components/
│   └── Table.jsx           # Table implementation
├── data/
│   └── data.js             # Static table data
├── styles/
│   └── Table.css           # Custom styles
├── App.jsx
└── main.jsx

### 🧹 Example Column Configuration

{
  accessorKey: "status",
  header: () => (
    <div style={{
      backgroundColor: "#EAE3FC",
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
      fontWeight: "bold"
    }}>
      Status
    </div>
  ),
  cell: ({ getValue }) => {
    const status = getValue();
    let bg = "#e2e8f0", color = "#475569";
    if (status === "BLocked") { bg = "#FCD7D6"; color = "#C22219"; }
    else if (status === "In-process") { bg = "#FFF5D7"; color = "#85640b"; }
    else if (status === "Completed") { bg = "#CFF6E2"; color = "#0A6E3D"; }

    return (
      <span style={{
        backgroundColor: bg,
        color: color,
        padding: "4px 12px",
        borderRadius: "999px",
        fontWeight: "bold",
        display: "inline-block",
        textAlign: "center"
      }}>
        {status}
      </span>
    );
  },
  enableResizing: true,
}


## 📃 License

This project is open source under the MIT License.
---
## 🤛️ Author

### RAJAT SHARMA

