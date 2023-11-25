
import styled from 'styled-components'

export const BannerContainer = styled.div`
margin-top: 10px;
margin-left: 6px;
margin-right: 6px;
width: 90%;
min-height: auto;
display: flex;
border: 1px solid black;
@media (min-width: 768px) {
    margin-top: 25px;
    margin-left: 45px;
    margin-right: 30px;
}`;

export const SupplierContainer = styled.div`
width: 16%;
min-height: auto;
box-size: border-box;
display:flex;
flex-direction: column;
border-right: ${props => props.outline ? "none" : "1px solid lightgray"};
padding-top: 2px;
@media (min-width: 768px) {
    padding-bottom: 12px;
    padding-left: 16px;
}
`;

export const Heading = styled.h1`
font-size: 15px;
color: #747574;`;

export const IconsCategoryContaine = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;`;

export const Icon = styled.p`
margin-right: 18px;`;

export const Description = styled.p`
color: #111836;
font-weight: bold;`;

export const ListContainer = styled.div`
margin-top: 10px;
margin-left: 6px;
margin-right: 6px;
width: 90%;
min-height: auto;
display: flex;
flex-direction: column;
border: 1px solid black;
@media (min-width: 768px) {
    margin-top: 25px;
    margin-left: 45px;
    margin-right: 10px;
    margin-bottom: 20px;
}`;

export const SearchContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 23px;
width: 30%;
border: 1px solid lightgray;
border-radius: 20px;
margin-top: 10px;
margin-bottom: 12px;
margin-left: 20px;
padding: 6px;`;

export const SearchInput = styled.input`
outline: none;
border: none;`;

export const BtnIconContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 10px;
@media (min-width: 768px) {
    margin-right: 26px;
}`;

export const SearchBtnIconContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;`;

export const AddBtn = styled.button`
background-color: transparent;
line-height: 2;
width: auto;
border: 1px solid #0e081a;
color: #1a4a1b;
border-radius: 20px;
margin-right: 8px;
@media (min-width: 768px) {
    margin-right: 20px;
}`;

export const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border: 1px solid gray;
padding: 5px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-top-right: 6px;
@media (min-width: 768px) {
    margin-top: 20px;
    margin-left: 18px;
    margin-right: 18px;
}
`;

export const Name = styled.p`
width: 200px;
margin-left: 60px;`;

export const BrandItem = styled.p`
width: 120px;`

export const Number = styled.p`
width: 140px;`;

export const UnOrderListContainer = styled.ul`
display: flex;
flex-direction: column;
`;