import styled from 'styled-components'

export const ListItemContainer = styled.div`
display: flex;
align-items: center;
padding-top: 13px;
padding-bottom: 10px;`;

export const ImageElement = styled.img`
width: 32px;
height: 32px;
margin-right: 10px;`;

export const ProductName = styled.p`
width: 200px;
font-size: 16px;
color: #5e5e5c;
font-weight: 500;
`;

export const BrandName = styled.p`
width: 120px;
color: #5e5e5c;
font-weight: 500;`;

export const ProductPrice = styled.p`
width: 140px;
color: #5e5e5c;
font-weight: 500;
`;

export const IconImg = styled.img`
width: 17px;
height: 17px;
color: gray;`;

export const ActionsContainer = styled.div`
background-color: #f2f5fa;
display: flex;
justify-content: space-between;
align-items: center;
width: 228px
`
export const ItemContainer = styled.li`
list-style: none;
display: flex;
width: 94%;
border-bottom: 1px solid gray;`;

export const StatusShows = styled.p`
width: 100px;`;

export const StatusBtn = styled.button`
background-color: ${props => props.outline === "Approved" ? "#2d8c3a" : "red"};
color: #ffffff;
border-width: 0px;
border-radius: 16px;
line-height: 2;
font-size: 10px;`;

export const Tick = styled.p`
color: ${props => props.outline ? "#2d8c3a" : "black"};`;

export const CrossBtn = styled.button`
background-color: transparent;
border: none;
color: ${props => props.ouline ? "red": "black"};`;

export const EditBtn = styled.button`
background-color: transparent;
border: none;`;