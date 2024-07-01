export default function Tabs({children, buttons,ButtonsContainer = 'menu'}){
    // this "ButtonsContainer" is passed to wrap up the buttons in this and this "ButtonsContainer" can be any wrapper
    // const ButtonsContainer = buttonsContainer;
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}