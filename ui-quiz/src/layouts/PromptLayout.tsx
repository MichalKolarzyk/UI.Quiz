import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

const Prompt : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page']}></div>
}

const Content : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content']}></div>
}

const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__title']}></div>
}

const ArticleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__article']}></div>
}

const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['prompt-page__content__footer']}></div>
}

const PromptLayout = {
    Prompt,
    TitleSection,
    Content,
    ArticleSection,
    FooterSection,
}

export default PromptLayout;