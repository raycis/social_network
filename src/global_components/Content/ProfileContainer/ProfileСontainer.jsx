import React from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {profileThunkCreator, statusThunkCreator, updateStatusThunkCreator} from "../../Redux/Reducer/ProfileReducer";
import {withRouter} from "react-router-dom";


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
                <Profile profile={this.props.profile} status={this.props.status} updateStatusThunkCreator={this.props.updateStatusThunkCreator} />
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        profile: state.profile.profile,
        status: state.profile.status
    }
};

export default compose(
    connect(mapStateToProps, {profileThunkCreator, statusThunkCreator, updateStatusThunkCreator}),
    withRouter
)(ProfileContainer);