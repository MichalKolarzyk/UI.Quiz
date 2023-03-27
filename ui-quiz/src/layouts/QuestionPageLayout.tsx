import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

export const Subpage : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question']}></div>
}

export const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__title']}></div>
}

export const QuestionSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__question']}></div>
}

export const AnswerSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__action']}></div>
}

export const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__footer']}></div>
}

