import React from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addPostAC,
    profileThunkCreator,
    statusThunkCreator,
    updateStatusThunkCreator
} from "../../Redux/Reducer/ProfileReducer";
import {withRouter} from "react-router-dom";
import PostBar from "./Profile/PostBar/PostBar";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 7800;
        }
        this.props.profileThunkCreator(userId);
        this.props.statusThunkCreator(userId)
    }
    render() {

        return(
            <>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatusThunkCreator={this.props.updateStatusThunkCreator} />
                         <PostBar photo={this.props.profile.photos.large} post={this.props.post} addPostAC={this.props.addPostAC}/>
                         </>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        profile: state.profile.profile,
        status: state.profile.status,
        post: state.profile.post
    }
};

export default compose(
    connect(mapStateToProps, {profileThunkCreator, statusThunkCreator, updateStatusThunkCreator, addPostAC}),
    withRouter
)(ProfileContainer);