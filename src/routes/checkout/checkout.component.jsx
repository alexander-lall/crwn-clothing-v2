import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import { 
    CheckoutContainer, 
    CheckoutHeader 
} from './checkout.styles'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div>Product</div>                
                <div>Description</div>                
                <div>Quantity</div>                
                <div>Price</div>
                <div>Remove</div>
            </CheckoutHeader>
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
            <span>Total: ${cartTotal}</span>
        </CheckoutContainer>    
    )
}

export default Checkout;