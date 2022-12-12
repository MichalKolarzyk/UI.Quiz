const PopupWrapper = (props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div className="multi-button__box">
        {props.children}
    </div>
}

export default PopupWrapper;