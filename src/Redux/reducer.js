import { ADD, DELETE, EDIT, FIL } from "./types";

const stateInit = {
    todos : [{id : 0, task : "eat", done :true},{id : 1, task : "sleep", done :false},{id : 2, task : "repeat", done :false}]
}
const Reducer=(state=stateInit, action)=>{
    switch (action.type) {
        case ADD : return {...state,todos :[...state.todos, action.newtask ]}
        case DELETE : return{...state, todos :state.todos.filter((el)=>el.id !== action.id)}
        case EDIT :  
        const updateTodos=state.todos.map((el)=>{
            if(el.id === action.id){
                return{ ...el,task:action.newtask , done: action.newdone};
            }
            return el;
        });
        return{
            ...state,
            todos:updateTodos
        }
        case FIL : return {...state.todos.filter(el=>el.done===action.isdone)}
        default:
            return state;
    }

}

export default Reducer