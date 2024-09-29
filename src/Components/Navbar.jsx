import React from "react";
import Anchor from "./Anchor";
import Button from "./Button";
const Navbar = () => {
    return(
        <nav>
        <div class="container flex items-center justify-between m-auto p-5">
          <div>
            <img src="img/logo.png" alt="" />
          </div>
          <div class="lg:hidden block">
            <img src="img/bars.png" alt="" />
          </div>
          <div class="lg:flex gap-20 justify-between items-center hidden">
            <Anchor />
            <Button />
          </div>
        </div>
      </nav>
    )
}
export default Navbar;