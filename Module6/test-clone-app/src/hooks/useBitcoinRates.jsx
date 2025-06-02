import { useEffect, useReducer } from 'react'; 


const initialState = {

    data: null,
    loading: true, 
    error: null, 

}; 


function reducer(state, action) {

    switch (action.type) {

        case 'FETCH_INIT': 
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default: 
            return state; 

    }   // end switch 

}   // end function 


export default function useBitcoinRates() {

    const [state, dispatch] = useReducer(reducer, initialState); 


    useEffect(() => {

        const fetchRates = async () => {

            dispatch({ type: 'FETCH_INIT' });
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data'); 
                }

                const data = await response.json(); 
                dispatch({ type: 'FETCH_SUCCESS', payload: data.bpi }); 
            
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE', payload: error.message });
            } 

        };   

            fetchRates(); 

        }, []); 
        
        return state; 
    }










