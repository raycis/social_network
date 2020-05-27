import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {addMessageActionCreater} from "../../Redux/Reducer/MessageReducer";
import Message from "./Message/Message";


class MessageContainer extends React.Component {

	componentDidMount () {}

	render(){
		return (
			<Message {...this.props}/>

			)
	}
}


let mapStateToProps =(state)=>{
	return{
		message: state.message

	}
};

export default compose(
	connect (mapStateToProps, {addMessageActionCreater})
	)(MessageContainer)