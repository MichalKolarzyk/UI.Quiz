const PopupCard = (props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div className={`multi-button__card ${props.className}`}>
        {props.children}
    </div>
}

export default PopupCard;