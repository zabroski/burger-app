import * as actionTypes from './actionTypes';
import  axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};


export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};



export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
        .then(Response => {
            console.log(Response.data);
            dispatch(purchaseBurgerSuccess(Response.data.name, orderData));
        })
            
        .catch(error => {
           dispatch(purchaseBurgerFail(error));
        });

    }
};

export const purchaseInit = () => {
    return {
        type:actionTypes.PURCHASE_INIT
    }
};


export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}



export const fetchOrdersfail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        order: error
    }
}



export const fetchOrdersStart = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
}


export const fetchOders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch(err => {
           dispatch(fetchOrdersfail)
        })
    }

};

