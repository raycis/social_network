import React, {PureComponent} from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers/AllUsers";
import {followThunkCreator, getAllUsersThunk, unfollowThunkCreator} from "../../Redux/Reducer/AllUsersReducer";
import Counter from "./Counter/Counter";



class AllUsersContainer extends PureComponent{
    componentDidMount() {
        this.props.getAllUsersThunk(this.props.curentPage, this.props.pageSize)
    }
    onClickCurrent =(page)=>{
        this.props.getAllUsersThunk(page, this.props.pageSize)
    };

    render(){
        return(
            <div>
                <Counter totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                         onClickCurrent={this.onClickCurrent} curentPage={this.props.curentPage}/>
                <AllUsers users={this.props.users} followThunkCreator={this.props.followThunkCreator}
                          unfollowThunkCreator={this.props.unfollowThunkCreator}
                          followProgress={this.props.followProgress}/>
            </div>
        )
    }
}
let mapStateToProps = (state) =>{
    return{
        totalCount: state.allUsers.totalCount,
        pageSize: state.allUsers.pageSize,
        curentPage: state.allUsers.curentPage,
        users: state.allUsers.users,
        followProgress: state.allUsers.followProgress

    }
};
export default connect(mapStateToProps, {getAllUsersThunk, followThunkCreator, unfollowThunkCreator})(AllUsersContainer);