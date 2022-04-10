import { useSelector, useDispatch } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { 
    ProductCartContainer,
    Footer,
    Name,
    Price
} from './product-card.styles';

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>
        </ProductCartContainer>
    );
}

export default ProductCard;