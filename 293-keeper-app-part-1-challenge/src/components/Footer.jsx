import React from "react";



const year = new Date().getFullYear();
function Footers(){

    return <footer>
        <p>&copy; copyright {year}</p>
    </footer>;
}

export default Footers;