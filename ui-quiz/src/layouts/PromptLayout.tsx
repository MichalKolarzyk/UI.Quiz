import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

export const Prompt : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page']}></div>
}

export const Content : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content']}></div>
}

export const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__title']}></div>
}

export const ArticleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__article']}></div>
}

export const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__footer']}></div>
}

