import styled from 'styled-components'

export const TriggerBtn = styled.button`
background-color: transparent;
border: none;
color: ${props => props.outline ? "red": "balck"};
width: 24px;
`;

export const PopupContainer = styled.div`
margin-right: 500px;
background-color: white;
border: 1px solid black;
padding: 20px;
width: 200px;
height: auto;`;

export const PopupHeading = styled.h1`
color: #233859;
font-size: 18px;`;

export const PopupDescription = styled.p`
color: #7f8082;
font-size: 15px;`;

export const PopupSpan = styled.span`
font-weight: bold;`;

export const PopupSecondContainer = styled.div`
display: flex;
`;

export const PopupCloseIcon = styled.p`
margin-left: 16px;
`;

export const PopupConformBtn = styled.button`
background-color: transparent;
border: none;
color: #172a4a;
font-weight: bold;`;

export const PopupBtnContainer = styled.div`
margin-left: 133px;`;