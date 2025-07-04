
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
        value: "6,200,000"


    },
    {
        id: 2

    },
    {
        id: 3

    },
    {
        id: 4

    },
    {
        id: 5

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
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "due",
        header: "Due Date",
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "value",
        header: "Est. Value",
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