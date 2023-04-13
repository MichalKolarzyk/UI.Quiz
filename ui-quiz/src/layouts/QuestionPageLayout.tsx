import { LayoutProps } from './Layout';
import classes from './scss/Layout.module.scss';

const Main : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question']}></div>
}

const TitleSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__title']}></div>
}

const QuestionSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__question']}></div>
}

const AnswerSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__action']}></div>
}

const FooterSection : React.FC<LayoutProps> = (props) => {
    return <div {...props} className={classes['subpage-question__footer']}></div>
}

export const QuestionPageLayout = {
    Main,
    TitleSection,
    QuestionSection,
    AnswerSection,
    FooterSection,
}