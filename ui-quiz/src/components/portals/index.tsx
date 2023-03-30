import ReactDOM from 'react-dom'
import { ButtonProps } from '../buttons/Button'
import classes from './Portals.module.scss'

const portalRootId = "portal-root";

export const PortalRoot = () => {
    return <div id={portalRootId}></div>
}

export const PortalOverlay = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div className={classes['overlay']} {...props}>{props.children}</div>
}

export const Portal = (props: any) => {
    return ReactDOM.createPortal(props.children, document.getElementById(portalRootId) ?? document.body);
}