import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

export const Subpage : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid']}></div>
}

export const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__title']}></div>
}

export const FilterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__filter']}></div>
}

export const ActionSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__action']}></div>
}

export const TableSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__table']}></div>
}

export const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__footer']}></div>
}

