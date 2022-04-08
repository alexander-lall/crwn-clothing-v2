import {
    ItemContainer,
    DetailsContainer,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <ItemContainer>
            <img src={imageUrl} alt={name}/>
            <DetailsContainer>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </DetailsContainer>
        </ItemContainer>
    )
}

export default CartItem;