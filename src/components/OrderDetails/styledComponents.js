import styled from 'styled-components'

export const OrderContainer = styled.div`
width: 100%;
min-height: auto;
display: flex;
flex-direction: column;
box-shadow: 0 4px 2px 1px #edf5eb;
padding-top: 8px;
padding-bottom: 10px;
`;
export const OrderNum = styled.p`
color: #080b12;
font-family: "Roboto";
font-size: 16px;
font-weight: bold;
margin-left: 11px;
@media (min-width: 768px) {
    margin-left: 30px;
}`
;

export const OrderBtn = styled.button`
background-color: ${props => props.outline ? "#193313" : "transparent"};
color: ${props => props.outline ? "#eff7ed" : "#26521c"};
line-height: 1.8;
width: auto;
border-radius: 15px;
margin-left: 4px;
border-style: ${props => props.outline ? "none" : "solid"};
`;

export const OrderBtnContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 11px;
@media (min-width: 768px) {
    margin-right: 30px;
}

`;

export const OrderSpan = styled.span`
text-decoration: underline;`;

export const OrderDescription = styled.p`
color: #727372;
margin-left: 11px;
@media (min-width: 768px) {
    margin-left: 30px;
}`;

export const OrderButton = styled.div`
display: flex;
justify-content: center;
align-items: center;`;