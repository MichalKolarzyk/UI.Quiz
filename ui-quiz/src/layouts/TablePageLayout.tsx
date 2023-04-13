import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

const Subpage : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid']}></div>
}

const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__title']}></div>
}

const FilterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__filter']}></div>
}

const ActionSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__action']}></div>
}

const TableSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__table']}></div>
}

const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-grid__footer']}></div>
}

const TablePageLayout = {
    Subpage,
    TitleSection,
    FilterSection,
    ActionSection,
    TableSection,
    FooterSection,
}

export default TablePageLayout;
