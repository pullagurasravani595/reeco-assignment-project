import { BsCart } from "react-icons/bs";
import {HeaderContainer,HeaderListContainer, CartContainer, SelectElement, ListElement, IconElement, OptionElement} from './styledComponts'

const Header = () => (
    <HeaderContainer>
        <HeaderListContainer>
            <ListElement outline={true} key="reeco">Reeco</ListElement>
            <ListElement outline={false} key="store">Store</ListElement>
            <ListElement outline={false} key="orders">Orders</ListElement>
            <ListElement outline={false} key="analytics">Analytics</ListElement>
        </HeaderListContainer>
        <CartContainer>
            <IconElement><BsCart /></IconElement>
            <SelectElement>
                <OptionElement>Hello, James</OptionElement>
                <OptionElement>Hello, John</OptionElement>
            </SelectElement>
        </CartContainer>
    </HeaderContainer>
)

export default Header
