import React from "react";
import OneUser from "./OneUser/OneUser";



const AllUsers = (props)=>{

    let usersElement = props.users.map(user=><OneUser key={user.id} name={user.name}
                                                      followed={user.followed} status={user.status}
                                                      photos={user.photos} id={user.id}
                                                      followThunkCreator={props.followThunkCreator}
                                                      unfollowThunkCreator={props.unfollowThunkCreator}
                                                      followProgress={props.followProgress}/>);


    return(
        <div>{usersElement}</div>
    )
};


export default AllUsers;