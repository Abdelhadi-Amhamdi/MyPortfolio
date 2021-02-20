
// this is just an exercise of hooks in react


import React , {useReducer , useContext , useEffect ,} from 'react'

function AppReducer(state,action) {
    switch (action.type) {
        case 'add': {
            return [
                ...state,
                {
                    id:Date.now(),
                    text:'',
                    completed:false,
                }
            ]
        }
        case 'delete' : {
            return state.filter(item => item.id !== action.payload)
        }
        case 'complete' : {
            return state.map(item => {
               if(item.id === action.payload){
                   return {
                       ...item ,
                       completed:!item.completed
                   }
               }
               return item
            })
        }
        case 'rest' : {
            return action.payload
        }
        default:
            break;
    }
}

const Context = React.createContext();

export default function Todos() {


    // reducer
    const [state , dispatch] = useReducer(AppReducer , [])

    // get items on locak storage
    useEffect(() => {
        const data = localStorage.getItem('items')
        dispatch({type:'rest' , payload:JSON.parse(data)})
    }, [])
    

    // set on local storage
    useEffect(() => {
        localStorage.setItem('items' , JSON.stringify(state))
    }, [state])
    return(
        <Context.Provider value={dispatch}>
            <div className="container">
                <h1>Hello Todos</h1>
                <button onClick={() => dispatch({type:'add'})} className="btn btn-success">Add Todo</button>
                <TodosList items={state} />
            </div>
        </Context.Provider>

    )
}

function TodosList({items}) {
    return items.map(item => <div key={item.id}><TodoItem {...item}/></div>)  
}

function TodoItem({id , completed}) {
    const dispatch = useContext(Context)
    return <div className="form-group" style={{
        display:'flex',
        flexDirection : 'row' ,
        justifyContent : 'space-between'
    }}>
        <input 
            type="checkbox" 
            checked={completed} 
            className="form-control" 
            onChange={() => dispatch({type:'complete' , payload : id})}
        />
        <input type="text" defaultValue={id} className="form-control" />
        <button 
            className="btn btn-danger"
            onClick={() => dispatch({type:'delete' , payload : id})}
        >Delete</button>
    </div>
}


