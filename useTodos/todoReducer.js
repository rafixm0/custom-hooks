

export const todoReducer = ( initialState = [], action ) => {

        switch ( action.type ) {
            case '[TODO] Add Todo':
                //throw new Error('action.type = ABC -> no está implementada aún. ');
                return [ ...initialState, action.payload ]; //retorno un nuevo estate

            case '[TODO] Remove Todo':
                return initialState.filter( todo => todo.id !== action.payload );

            case '[TODO] Toggle Todo':
                return initialState.map( todo => {

                    if( todo.id === action.payload ) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }

                    return todo;
                });

            default:
                return initialState;
        }

}