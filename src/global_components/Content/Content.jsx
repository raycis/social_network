import React from "react";
import ProfileContainer from "./ProfileContainer/ProfileСontainer";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import AllUsersContainer from "./AllUsersContainer/AllUsersContainer";
import FriendsContainer from "./FriendsContainer/FriendsContainer";


const Content=()=>{
    return(
        <div>
            <Route path='/profile' render={()=><ProfileContainer/>} />
            <Route path='/allusers' render={()=><AllUsersContainer/>} />
            <Route path='/friends' render={()=><FriendsContainer/>} />
        </div>
    )
}

export default compose (
    withRouter
)(Content);