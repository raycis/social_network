let ADD_MESSAGE = 'ADD-MESSAGE';



let initialState = {
    message:[
        {text: 'Первое сообшение'},
        {text: 'Второе сообшение'},
        {text: 'Третее сообшение'},
        {text: 'Четвертое сообшение'}
    ]


};


const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            return{...state,
                message:[...state.message, {text: action.newMessage}]
            };

        default:
            return state;
    }
};




export let addMessageActionCreater = (newMessage)=>{
    return{ type: ADD_MESSAGE, newMessage}
};

export default messageReducer;