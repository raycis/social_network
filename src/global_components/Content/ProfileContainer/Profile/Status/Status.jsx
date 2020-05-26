import React from'react';



class Status extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode=()=>{
        this.setState({editMode: true})
    };
    deactivateEditMode=()=>{
        this.setState({editMode: false});
        this.props.updateStatusThunkCreator(this.state.status)

    };

    onStatusChange =(event)=>{
        this.setState({
            status: event.currentTarget.value
        })

    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }
    render(){
        return(
            <div>
                {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                }
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}type="text"/>
                }
            </div>

        )
    }
}

export default Status;