export default function ReducerAction(state,action){
    
    switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 >= 0 ? state.count - 1 : 0 };
        case 'RESET':
          return { count: 0 };

          case "INCREMENT_TEN":
  return { count: state.count + 10 };
case "DECREMENT_TEN":
  // Ensure count doesn't go below zero
  return { count: state.count - 10 >= 0 ? state.count - 10 : 0 };
  
        default:
 
          return state;
      }
    };