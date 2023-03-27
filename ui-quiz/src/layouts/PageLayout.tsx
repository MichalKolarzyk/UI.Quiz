import { LayoutProps } from './scss/Layout';
import classes from './scss/Layout.module.scss';

export const Subpage : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage']}></div>
}

export const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__title']}></div>
}

export const SubTitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__sub-title']}></div>
}

export const ArticleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__article']}></div>
}

export const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage__footer']}></div>
}

