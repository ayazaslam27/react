

const MAX_COUNTER = 5;
const MIN_COUNTER = -5;

function counterMiddleware({getState, dispatch}){
    return function(next){
        
        return function(action){

            if (action.type === 'INCREMENT') {
                if(action.payload.count === MAX_COUNTER){
                 return dispatch({ type: 'MAX_COUNTER'});
                }
            }

            if (action.type === 'DECREMENT') {
                if(action.payload.count === MIN_COUNTER){
                 return dispatch({ type: 'MIN_COUNTER' });
                }
            }
            next(action)
        }
    }
}

export default counterMiddleware;