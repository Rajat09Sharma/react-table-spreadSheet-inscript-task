
import { TbLayoutSidebarRightFilled } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

import "./Navbar.scss";
import { useState } from "react";

export const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        console.log(e.target.value);

    }

    return (
        <div className="navbar">
            <div className="left-wrapper">
                <TbLayoutSidebarRightFilled className="icon" />
                <div className="content">
                    <p className="fade">Workspace</p>
                    <p className="fade">{`>`}</p>
                    <p className="fade">Folder</p>
                    <p className="fade">{`>`}</p>
                    <p>Spreadsheet 3</p>
                    <p className="dotted">...</p>
                </div>
            </div>

            <div className="right-wrapper">

                <div className="search-bar">
                    <span>
                        <CiSearch size={20} />
                    </span>
                    <input type="search" name="seach" value={searchTerm} onChange={handleSearch} placeholder="Search within sheet" className="search" />
                </div>

                <div className="bell-icon">
                    <FaRegBell className="icon" />
                    <span className="badge">2</span>
                </div>

                <div className="user">
                    <FaCircleUser className="icon" />
                    <p className="bold">John Doe <br /> <span>johndoe...</span></p>
                </div>

            </div>
        </div>
    )
}
