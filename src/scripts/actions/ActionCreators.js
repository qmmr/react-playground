import { PREV_STEP, NEXT_STEP } from '../constants/actionTypes'
import context from '../context'

var appDispatcher = context.get('appDispatcher')

export default ({

	prevStep(data) {
		appDispatcher.handleViewAction({ type: PREV_STEP, data })
	},

	nextStep(data) {
		appDispatcher.handleViewAction({ type: NEXT_STEP, data })
	}

	// receiveProducts(products) {
	// 	AppDispatcher.handleServerAction({
	// 		type: ActionTypes.RECEIVE_PRODUCTS,
	// 		products: products
	// 	});
	// };
	//
	// addToCart(product) {
	// 	AppDispatcher.handleViewAction({
	// 		type: ActionTypes.ADD_TO_CART,
	// 		product: product
	// 	});
	// };
	//
	// cartCheckout(products) {
	// 	AppDispatcher.handleViewAction({
	// 		type: ActionTypes.CART_CHECKOUT,
	// 		products: products
	// 	});
	//
	// 	WebAPIUtils.checkoutProducts(products);
	// };
	//
	// finishCheckout(products) {
	// 	AppDispatcher.handleServerAction({
	// 		type: ActionTypes.SUCCESS_CHECKOUT,
	// 		products: products
	// 	});
	// };

})
