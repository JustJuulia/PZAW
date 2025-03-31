import React from "react";
import NumberShowdown from "./NumberShowdown";
import TextShowdown from "./TextShowdown";
import UsersTable from "./UsersTable";
function AllIn(){
    return(
        <>
        <TextShowdown/>
        <NumberShowdown/>
        <UsersTable/>
        </>
    )
}   
export default AllIn;