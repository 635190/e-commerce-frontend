import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE } from "./ActionType";

// Action creator for initiating the payment process
export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.post(`/api/payments/${orderId}`, {});
        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
    } catch (error) {
        // Handle different types of errors if needed
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};

// Action creator for updating the payment status
export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("update payment:", data);
        // Dispatch a success action if needed
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        // Handle different types of errors if needed
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};
