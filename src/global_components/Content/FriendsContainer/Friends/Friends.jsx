import React from "react";
import OneFriend from "./OneFriend/OneFriend";



const Friends =(props)=>{
    let friendsElement = props.friends.map(friends=><OneFriend key={friends.id} name={friends.name}
                                                         id={friends.id} photos={friends.photos}
                                                         status={friends.status} unfollowThunkCreator={props.unfollowThunkCreator}/>);

    return(
        <div>{friendsElement}</div>
    )
};



export default Friends;