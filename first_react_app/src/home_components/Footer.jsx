import React from "react";

const currentDate = new Date();
const yr = currentDate.getFullYear();

function Footer(){
    return(
        <footer>
            <p>Copyright © {yr}</p>
        </footer>
    )
}

export default Footer;