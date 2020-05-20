import React from "react";
import ContainerProfile from "./ContainerProfile/СontainerProfile";
import LoginContainer from "../loginContainer/LoginContainer";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";


const Content=()=>{
    return(
        <div>
            <Route path='/profile' render={()=><ContainerProfile/>} />
            <Route path='/login' render={()=><LoginContainer/>} />

        </div>
    )
}

export default compose (
    withRouter
)(Content);