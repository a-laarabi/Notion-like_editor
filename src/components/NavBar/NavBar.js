import React, { useState, useEffect } from "react";
import { FiUnlock } from 'react-icons/fi';
import DropdownMenu from "./DropdownMenu";
import './navBar.css';


const NavBar = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(window.location.href);
  }, [link]);

  return (
    <div className="navBar">
      <div>
        {link}
      </div>
      <div className="right">
        <div><FiUnlock /> Editing</div>
        <div className="separator" />
        <DropdownMenu />
      </div>
    </div>
  )
}

export default NavBar;