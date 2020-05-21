import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends/Friends";
import {getFriendsThunk} from "../../Redux/Reducer/FriendsReducer";
import {unfollowThunkCreator} from "../../Redux/Reducer/AllUsersReducer";



class FriendsContainer extends React.Component{
    componentDidMount() {
    this.props.getFriendsThunk();

    }

    render() {
        // let unfollow=(id)=>{
        //     this.props.unfollowThunkCreator(id)
        // };
        return(
            <div><Friends unfollowThunkCreator={this.props.unfollowThunkCreator} friends={this.props.friends} unfollow={this.unfollow} /></div>
        )
    }
}
 let mapStateToProps = (state)=>{
    return{
        friends: state.friends.friends

    }

 };
export default connect(mapStateToProps, {getFriendsThunk, unfollowThunkCreator})(FriendsContainer)