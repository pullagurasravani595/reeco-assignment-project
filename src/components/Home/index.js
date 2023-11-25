import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { MdOutlineRestaurantMenu, MdToys} from "react-icons/md";
import { LiaAppleAltSolid, LiaWineBottleSolid} from "react-icons/lia";
import { FaMartiniGlass } from "react-icons/fa6";
import { IoManOutline } from "react-icons/io5";
import { FaGlasses, FaSearch} from "react-icons/fa";
import { GiPineTree } from "react-icons/gi";
import { LuPrinter } from "react-icons/lu";
import Header from '../Header'
import OrderDetails from '../OrderDetails';
import ProductCard from "../ProductCard";
import {BannerContainer, SupplierContainer, Name, BrandItem, Number, Heading, IconsCategoryContaine, Icon, Description, SearchContainer, SearchInput,ListContainer, BtnIconContainer, SearchBtnIconContainer, AddBtn, HeadingContainer,UnOrderListContainer} from './styledComponents'

const productListDetails = [
    {
        id: uuidv4(),
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg",
        name: "Avocado fruit",
        brand: "Hass",
        price: "$60.67 / 6*1LB",
        quantity: 0,
    },
    {
        id: uuidv4(),
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg",
        name: "Avocado fruit",
        brand: "Hass",
        price: "$60.67 / 6*1LB",
        quantity: 15,
    },
    {
        id: uuidv4(),
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg",
        name: "Avocado fruit",
        brand: "Hass",
        price: "$60.67 / 6*1LB",
        quantity: 13,
    },
    {
        id: uuidv4(),
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png",
        name: "Green Apple fruit",
        brand: "Granny Smith",
        price: "$60.67 / 6*1LB",
        quantity: 0,
    },
    {
        id: uuidv4(),
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png",
        name: "Green Apple fruit",
        brand: "Granny Smith",
        price: "$60.67 / 6*1LB",
        quantity: 5,
    }
]

const Home = () => {
    const [searchInput, setSearchInput] = useState("")
    const [productArr, setProductArr] = useState(productListDetails)

    const changeInput = event => {
        setSearchInput(event.target.value)
    }

    const clickSearchIcon = () => {
        const searchResults = productArr.filter(eachVal => eachVal.name.includes(searchInput))
        setProductArr([...searchResults])
        setSearchInput("")
    }

    const clickAddBtn = () => {
        if (productArr.length%2 === 0) {
            const productItem = {
                id: uuidv4(),
                imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png",
                name: "Green Apple fruit",
                brand: "Granny Smith",
                price: "$60.67 / 6*1LB",
                quantity: 5,
            }
            setProductArr([...productArr, productItem])
        }else {
            const productElement = {
                id: uuidv4(),
                imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg",
                name: "Avocado fruit",
                brand: "Hass",
                price: "$60.67 / 6*1LB",
                quantity: 0,
            }
            setProductArr([...productArr, productElement])
        }
    }

    return (
        <>
            <Header />
            <OrderDetails />
            <BannerContainer>
                <SupplierContainer outline={false}>
                    <Heading>Supplier</Heading>
                    <Description>East coast fruits & vegetables</Description>
                </SupplierContainer>
                <SupplierContainer outline={false}>
                    <Heading>Shipping date</Heading>
                    <Description>Thu, Feb 10</Description>
                </SupplierContainer>
                <SupplierContainer outline={false}>
                    <Heading>Total</Heading>
                    <Description>$ 15,028.3</Description>
                </SupplierContainer>
                <SupplierContainer outline={false}>
                    <Heading>Category</Heading>
                    <IconsCategoryContaine>
                        <Icon><MdOutlineRestaurantMenu /></Icon>
                        <Icon><IoManOutline /></Icon>
                        <Icon><LiaAppleAltSolid /></Icon>
                        <Icon><LiaWineBottleSolid /></Icon>
                        <Icon><FaMartiniGlass /></Icon>
                        <Icon><FaGlasses /></Icon>
                        <Icon><MdToys /></Icon>
                        <Icon><GiPineTree /></Icon>
                    </IconsCategoryContaine>
                </SupplierContainer>
                <SupplierContainer outline={false}>
                    <Heading>Department</Heading>
                    <Description>300-444-678</Description>
                </SupplierContainer>
                <SupplierContainer outline={true}>
                    <Heading>Status</Heading>
                    <Description>Awaiting your Approvel</Description>
                </SupplierContainer>
            </BannerContainer>
            <ListContainer>
                <SearchBtnIconContainer>
                    <SearchContainer>
                        <SearchInput type="search" placeholder="search..." onChange={changeInput} />
                        <FaSearch onClick={clickSearchIcon}/>
                    </SearchContainer>
                    <BtnIconContainer>
                        <AddBtn type="button" onClick={clickAddBtn}>Add item</AddBtn>
                        <LuPrinter />
                    </BtnIconContainer>
                </SearchBtnIconContainer>
                <HeadingContainer>
                    <Name>Product name</Name>
                    <BrandItem>Brand</BrandItem>
                    <Number>Price</Number>
                    <BrandItem>Quantity</BrandItem>
                    <BrandItem>Total</BrandItem>
                    <BrandItem>Status</BrandItem>
                </HeadingContainer>
                <UnOrderListContainer>
                    {productArr.map(eachItem => (
                        <ProductCard key={eachItem.id} details={eachItem} />
                    ))}
                </UnOrderListContainer>
            </ListContainer>
        </>
    )
}

export default Home 

