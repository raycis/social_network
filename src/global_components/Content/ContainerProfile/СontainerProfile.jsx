import React from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {profileThunkCreator} from "../../Redux/Reducer/ProfileReducer";


class ContainerProfile extends React.Component{
    componentDidMount() {

        this.props.profileThunkCreator()
    }
    render() {

        return(
                <Profile />
        )
    }
}

export default compose(
    connect(null, {profileThunkCreator})
)(ContainerProfile);