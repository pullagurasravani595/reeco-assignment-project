import {OrderContainer, OrderNum, OrderBtn, OrderBtnContainer, OrderSpan, OrderDescription, OrderButton} from './styledComponents'

const order = `Orders > `

const OrderDetails = () => (
    <OrderContainer>
        <OrderDescription>{order}<OrderSpan>Order 32457ABC</OrderSpan></OrderDescription>
        <OrderBtnContainer>
            <OrderNum>Order 32457ABC</OrderNum>
            <OrderButton>
                <OrderBtn type="button" outline={false}>Back</OrderBtn>
                <OrderBtn type="button" outline={true}>Approve order</OrderBtn>
            </OrderButton>
        </OrderBtnContainer>
    </OrderContainer>
)

export default OrderDetails
