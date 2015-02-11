import shop from '../../../common/api/shop'
import ActionCreators from '../actions/ActionCreators'

exports default ({
	getAllProducts() {
		shop.getProducts(function (products) {
			ActionCreators.receiveProducts(products);
		})
	},

	checkoutProducts(products) {
		shop.buyProducts(products, function () {
			ActionCreators.finishCheckout(products);
		})
	}
})
