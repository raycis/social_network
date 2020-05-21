import React from "react";
import ProfileContainer from "./ProfileContainer/ProfileСontainer";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import AllUsersContainer from "./AllUsersContainer/AllUsersContainer";


const Content=()=>{
    return(
        <div>
            <Route path='/profile' render={()=><ProfileContainer/>} />
            <Route path='/allusers' render={()=><AllUsersContainer/>} />
        </div>
    )
}

export default compose (
    withRouter
)(Content);