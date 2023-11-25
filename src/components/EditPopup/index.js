import { useState } from "react";
import Popup from "reactjs-popup"
import { IoIosClose } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";

import {TriggerEditBtn,Save,Cross,EditBtnContainer,CancleBtn,IconStyle,SmallHeading,OptionalSpan,EditContainer,MainContainer,DetailsContainer,Heading,Description,ImagePriceContainer,ProductImg, PriceContainer, Amount, PriceDescription,ValueDescription} from './styledComponents'

const EditPopUp = (props) => {
    const {productItemDetails, editClick} = props
    const {imageUrl, name, brand, quantity} = productItemDetails
    const [newQuantity, setQuantity] = useState(quantity)
    const total = newQuantity*60.67*100
    const totalApproximate = Math.floor(total)

    const clickPlus = () => {
        setQuantity(prevState => prevState.newQuantity + 1)
    }

    const clickMinus = () => {
        setQuantity(prevState => prevState.newQuantity - 1)
    }

    const clickSave = () => {
        editClick("Quantity updated")
    }
    return (
        <Popup 
            model 
            trigger={
                <TriggerEditBtn type="button">Edit</TriggerEditBtn>
            }
            position="center center"
        >
            {close => (
                <EditContainer>
                    <MainContainer>
                        <DetailsContainer>
                            <Heading>{name}</Heading>
                            <Description>{brand}</Description>
                            <ImagePriceContainer>
                                <ProductImg src={imageUrl} alt="product" />
                                <div>
                                    <PriceDescription>Price ($)</PriceDescription>
                                    <PriceDescription>Quantity</PriceDescription>
                                    <PriceDescription>Total</PriceDescription>
                                </div>
                                <div>
                                    <ValueDescription>9999</ValueDescription>
                                    <span>  / 6*1LB</span>
                                    <PriceContainer>
                                        <IconStyle onClick={clickMinus}><FaMinusCircle /></IconStyle>
                                        <Amount>{totalApproximate}</Amount>
                                        <IconStyle onClick={clickPlus}><BsFillPlusCircleFill /></IconStyle>
                                        <p><IoIosClose /> 6*1LB</p>
                                    </PriceContainer>
                                    <PriceDescription>{totalApproximate}</PriceDescription>
                                </div>
                            </ImagePriceContainer>
                            <SmallHeading>
                                Choose reason  
                                <OptionalSpan> (optional)</OptionalSpan>
                            </SmallHeading>
                            <ImagePriceContainer>
                                <ValueDescription>Missing Product</ValueDescription>
                                <ValueDescription>Quantity is not the same</ValueDescription>
                                <ValueDescription>Price is not the same</ValueDescription>
                                <ValueDescription>Others</ValueDescription>
                            </ImagePriceContainer>
                        </DetailsContainer>
                        <Cross onClick={() => close()}><IoIosClose /></Cross>
                    </MainContainer>
                    <EditBtnContainer>
                        <CancleBtn type="button" onClick={() => close()}>cancle</CancleBtn>
                        <Save type="button" onClick={clickSave}>save</Save>
                    </EditBtnContainer>
                </EditContainer>
            )}
        </Popup>
    )
}
   export default EditPopUp