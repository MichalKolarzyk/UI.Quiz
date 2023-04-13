import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

const Subpage : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage']}></div>
}

const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__title']}></div>
}

const SubTitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__sub-title']}></div>
}

const ArticleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__article']}></div>
}

const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__footer']}></div>
}


const PageLayout = {
    Subpage,
    TitleSection,
    SubTitleSection,
    ArticleSection,
    FooterSection,
}

export default PageLayout;