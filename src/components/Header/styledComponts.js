import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color: green;
width: 100%;
min-height: 12vh;
display: flex;
justify-content: space-between;
align-items: center;`;

export const HeaderListContainer = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
list-style-type: none;`;

export const CartContainer = styled.div`
display: flex;
margin-right: 20px;
@media (min-width: 578px) {
    margin-right: 55px;
}`;

export const SelectElement = styled.select`
display: flex;
flex-direction: column;
border: none;
background-color: transparent;
color: #ffffff;
outline: none;`;

export const ListElement = styled.li`
margin-right: 28px;
color: ${props => props.outline ? "white" : "#ebf0e9"};
font-family: "Roboto";
font-wight: ${props => props.outline ? "bold" : 500};`;

export const IconElement = styled.p`
color: #ffffff;
margin-right: 20px;`;

export const OptionElement = styled.option`
color: black;`;