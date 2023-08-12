import React from 'react'
import './navbar.css'

import { AiFillPrinter } from "react-icons/ai";


import { FaEthereum, FaMagento } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <span>

          <FaMagento className="FaMagento " />

        </span>
        <span className="port">
          <i>PORTFOLISIO</i>
        </span>

        <span>
          <AiFillPrinter className="AiFillPrinter" />
        </span>
      </div>
    </>
  );
}

export default Navbar;