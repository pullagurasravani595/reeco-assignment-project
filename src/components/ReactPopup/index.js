
import Popup from "reactjs-popup"
import { IoIosClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { TriggerBtn, PopupContainer, PopupHeading, PopupDescription,PopupSpan,PopupSecondContainer,PopupCloseIcon, PopupConformBtn, PopupBtnContainer} from "./styledComponents";



const ReactPopUp = (props) => {
    const {details, clickCrossMark, statusCloseIcon} = props

    const clickYesBtn = () => {
        clickCrossMark("Missing-Urgent")
    }

    const clickNoBtn = () => {
        clickCrossMark("Missing")
    }

    return (
        <Popup 
            model 
            trigger={
                <TriggerBtn type="button" outline={statusCloseIcon}><MdClose /></TriggerBtn>
            }
            position="center center"
        >
            {close => (
                <PopupContainer>
                    <PopupSecondContainer>
                        <div>
                            <PopupHeading>Missing Product</PopupHeading>
                            <PopupDescription>is '<PopupSpan>{details}</PopupSpan>'urgent?</PopupDescription>
                        </div>
                        <PopupCloseIcon onClick={() => close()}><IoIosClose /></PopupCloseIcon>
                    </PopupSecondContainer>
                    <PopupBtnContainer>
                        <PopupConformBtn type="button" onClick={clickNoBtn}>No</PopupConformBtn>
                        <PopupConformBtn type="button" onClick={clickYesBtn}>yes</PopupConformBtn>
                    </PopupBtnContainer>
                </PopupContainer>
            )}
        </Popup>
    )
}
   export default ReactPopUp