
import { FaBriefcase } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaRegHandPaper } from "react-icons/fa";

import "./DataColumn.scss"

export const data = [
    {
        id: 1,
        job: "Launch social media campaign for product XYZ",
        submit: "15-11-2024",
        status: "In-process",
        submitter: "Aisha Patel",
        url: "www.aishapatel.com",
        assigned: "Sophie Choudhury",
        priority: "Medium",
        due: "20-11-2024",
        value: "6,200,000 ₹"


    },
    {
        id: 2,
        job: "Update press kit for company redesign",
        submit: "28-10-2024",
        status: "Need to start",
        submitter: "Irfan Khan",
        url: "www.irfankhanportfolio.com",
        assigned: "Tejas Pandey",
        priority: "High",
        due: "30-10-2024",
        value: "3,500,000 ₹"

    },
    {
        id: 3,
        job: "Finalize user testing feedback for app update",
        submit: "05-12-2024",
        status: "In-process",
        submitter: "Mark Johnson",
        url: "www.markjohnsondesigns.com",
        assigned: "Rachel Lee",
        priority: "Medium",
        due: "10-12-2024",
        value: "4,750,000 ₹"

    },
    {
        id: 4,
        job: "Design new features for the website",
        submit: "10-01-2024",
        status: "Complete",
        submitter: "Emily Green",
        url: "www.emilygreenart.com",
        assigned: "Tom Wright",
        priority: "Low",
        due: "15-01-2024",
        value: "5,900,000 ₹"

    },
    {
        id: 5,
        job: "Prepare financial report for Q4",
        submit: "25-01-2025",
        status: "Blocked",
        submitter: "Jessica Brown",
        url: "www.jessicabrowncreative.com",
        assigned: "Kevin Smith",
        priority: "Low",
        due: "30-01-2025",
        value: "2,800,000 ₹"

    },
    {
        id: 6

    },
    {
        id: 7

    },
    {
        id: 8

    },
    {
        id: 9

    },
    {
        id: 10

    },
    {
        id: 11

    },
    {
        id: 12

    },
    {
        id: 13

    },
    {
        id: 14

    },
    {
        id: 15

    },
    {
        id: 16

    },
    {
        id: 17

    },
    {
        id: 18

    },
    {
        id: 19

    },
    {
        id: 20

    },
    {
        id: 21

    },
    {
        id: 22

    },
    {
        id: 23

    },
    {
        id: 24

    },
    {
        id: 25

    },
];


export const columns = [
    {
        accessorKey: "id",
        header: "#",
        size: 10,
        enableResizing: true
    },
    {
        accessorKey: 'job',
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <FaBriefcase />
                    <p>
                        Job Request
                    </p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        size: 300,
        enableResizing: true,
    },
    {
        accessorKey: 'submit',
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <FaCalendarAlt />
                    <p>Submitted</p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        cell: ({ getValue }) => (
            <div style={{ textAlign: "right" }}>{getValue()}</div>
        ),
        size: 150,
        enableResizing: true,
    },
    {
        accessorKey: "status",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <IoIosArrowDropdownCircle />
                    <p>Status</p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        cell: ({ getValue }) => {
            const status = getValue();
            let bgColor;
            let textColor;

            if (status === "Blocked") {
                bgColor = "#FFE1DE";
                textColor = "#C22219";
            } else if (status === "In-process") {
                bgColor = "#FFF5D7";
                textColor = "#85640b";
            } else if (status === "Complete") {
                bgColor = "#D3F2E3";
                textColor = "#0A6E3D";
            } else {
                bgColor = "#e2e8f2";
                textColor = "#475569";
            }

            return (
                <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: bgColor,
                    color: textColor,
                    fontWeight: "600",
                    borderRadius: "999px", // capsule shape
                    textAlign: "center",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                }}>
                    {status}
                </div>
            )
        },
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "submitter",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <FaUser />
                    <p>Submitter</p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "url",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <TbWorld />
                    <p>URL</p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "assigned",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <FaRegHandPaper />
                    <p>Assigned</p>
                </div>
                <div className="right-wrapper">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ getValue }) => {
            const priority = getValue();
            let color;
            if (priority === "High") color = "#ef4d44";
            else if (priority === "Medium") color = "#c29210";
            else if (priority === "Low") color = "#1a8cff";

            return (
                <div style={{ textAlign: "center", color: color, fontWeight: "bold" }}>
                    {priority}
                </div>
            );
        },
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "due",
        header: "Due Date",
        cell: ({ getValue }) => (
            <div style={{ textAlign: "right" }}>{getValue()}</div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "value",
        header: "Est. Value",
        cell: ({ getValue }) => (
            <div style={{ textAlign: "right" }}>{getValue()}</div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "age",
        header: "",
        size: 200,
        enableResizing: true
    },
];