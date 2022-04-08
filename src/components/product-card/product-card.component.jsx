import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import { 
    ProductCartContainer,
    Footer,
    Name,
    Price
} from './product-card.styles';

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCard = () => addItemToCart(product);

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