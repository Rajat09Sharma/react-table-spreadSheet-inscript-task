import { IoLink } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { PiArrowsSplit } from "react-icons/pi";

import "./RibbonDataCol.scss"

export const Ribdata = [
];


export const Ribcolumns = [
    {
        accessorKey: "id",
        header: () => {
            <div>
                <p></p>
            </div>
        },
        size: 30,
        enableResizing: true
    },
    {
        accessorKey: 'job',
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <p className="second">
                        <IoLink style={{ color: "blue" }}/>
                        Q3 Financial Overview

                    </p>
                    <LuRefreshCw style={{ color: "red" }} />
                </div>
            </div>
        ),
        size: 1190,
        enableResizing: true,
    },
    {
        accessorKey: "url",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                </div>
            </div>
        ),
        size: 240,
        enableResizing: true
    },
    {
        accessorKey: "assigned",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <PiArrowsSplit />
                    <p>ABC</p>
                </div>
            </div>
        ),
        size: 150,
        enableResizing: true
    },
    {
        accessorKey: "priority",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <PiArrowsSplit />
                    <p>Answer a question  .....</p>
                </div>
            </div>
        ),

        size: 260,
        enableResizing: true
    },
    {
        accessorKey: "value",
        header: () => (
            <div className="header-with-icon">
                <div className="left-wrapper">
                    <PiArrowsSplit />
                    <p>Extract</p>
                </div>
            </div>
        ),
        size: 100,
        enableResizing: true
    },
    {
        accessorKey: "age",
        header: "+",
        size: 25,
        enableResizing: true
    },
];