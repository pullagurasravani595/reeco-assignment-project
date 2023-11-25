import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import ReactPopup from "../ReactPopup";
import EditPopUp from "../EditPopup";
import {ListItemContainer,ImageElement, ProductName, StatusShows, StatusBtn, BrandName, ProductPrice, ActionsContainer, ItemContainer, Tick, CrossBtn, EditBtn} from './styledComponents'

const ProductCard = (props) => {
    const [productStatus, setProductStatus] = useState(false)
    const [btnText, setBtnText] = useState("")

    const clickTickMark = () => {
        setProductStatus(prevState => !prevState)
        setBtnText("Approved")
    }

    const clickCrossMark = (confirm) => {
        setProductStatus(true)
        setBtnText(confirm)
    }

    const editClick = (value) => {
        setProductStatus(true)
        setBtnText(value)
    }

    const {details} = props
    const {imageUrl, name, brand, price, quantity} = details
    const total = quantity*60.67*100
    const totalApproximate = total.toFixed(2)
    const totalVal = `$ ${totalApproximate}`
    const amount = quantity === 0 ? 0 : totalVal
    console.log(totalApproximate)
    return (
        <ItemContainer>
            <ListItemContainer>
                <ImageElement src={imageUrl} alt="fruit" />
                <ProductName>{name}</ProductName>
                <BrandName>{brand}</BrandName>
                <ProductPrice>{price}</ProductPrice>
                <BrandName>{quantity}<span><IoIosClose /></span>6*1LB</BrandName>
                <BrandName>{amount}</BrandName>
            </ListItemContainer>
            <ActionsContainer>
                <StatusShows>{productStatus && <StatusBtn outline={btnText}>{btnText}</StatusBtn>}</StatusShows>
                <Tick onClick={clickTickMark} outline={productStatus}><TiTick /></Tick>
                <CrossBtn type="button"><ReactPopup details={name} clickCrossMark={clickCrossMark} statusCloseIcon={productStatus} /></CrossBtn>
                <EditBtn type="button"><EditPopUp productItemDetails={details} editClick={editClick} /></EditBtn>
            </ActionsContainer>
        </ItemContainer>
            
    )
}

export default ProductCard