
import "./TableRibbon.scss"

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { VscEyeClosed } from "react-icons/vsc";
import { LuArrowDownUp } from "react-icons/lu";
import { MdFilterList } from "react-icons/md";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaRegShareSquare } from "react-icons/fa";
import { PiArrowsSplitBold } from "react-icons/pi";


export const TableRibbon = () => {
    return (
        <div className="table-ribbon">
            <div className="left-wrapper">
                <div className="t-arrow">
                    <p>Tool bar</p>
                    <MdOutlineKeyboardDoubleArrowRight className="icon" />
                </div>

                <div>
                    <VscEyeClosed />
                    <p>Hide fields</p>
                </div>

                <div>
                    <LuArrowDownUp />
                    <p>Sort</p>
                </div>

                <div>
                    <MdFilterList />
                    <p>Filter</p>
                </div>

                <div>
                    <TbArrowAutofitHeight />
                    <p>Cell view</p>
                </div>
            </div>

            <div className="right-wrapper">
                <div className="">
                    <LuArrowDownToLine />
                    <p>Import</p>
                </div>
                <div className="">
                    <LuArrowUpToLine />
                    <p>Export</p>
                </div>
                <div className="">
                    <FaRegShareSquare />
                    <p>Share</p>
                </div>
                <div className="big">
                    <PiArrowsSplitBold />
                    <p>New Action</p>
                </div>
            </div>
        </div>
    )
}
