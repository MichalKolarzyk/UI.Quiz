import { SectionProps } from "./types"
import classes from './scss/Layout.module.scss';
import WithStyles from "../components/base/WithStyles";

const Section = (props: SectionProps) => {
    return <div {...props}></div>
}

export const PageLayout = {
    Subpage: WithStyles(Section, classes['subpage']),
    Title: WithStyles(Section, classes['subpage__title']),
    SubTitle: WithStyles(Section, classes['subpage__sub-title']),
    Article: WithStyles(Section, classes['subpage__article']),
    Footer: WithStyles(Section, classes['subpage__footer']),
}

export const PromptLayout = {
    Prompt: WithStyles(Section, classes['prompt-page']),
    Title: WithStyles(Section, classes['prompt-page__content']),
    Content: WithStyles(Section, classes['prompt-page__content__title']),
    Article: WithStyles(Section, classes['prompt-page__content__article']),
    Footer: WithStyles(Section, classes['prompt-page__content__footer']),
}

export const QuestionPageLayout = {
    Main: WithStyles(Section, classes['subpage-question']),
    Title: WithStyles(Section, classes['subpage-question__title']),
    Question: WithStyles(Section, classes['subpage-question__question']),
    Answer: WithStyles(Section, classes['subpage-question__action']),
    Footer: WithStyles(Section, classes['subpage-question__footer']),
}

export const TablePageLayout = {
    Subpage: WithStyles(Section, classes['subpage-grid']),
    Title: WithStyles(Section, classes['subpage-grid__title']),
    Filter: WithStyles(Section, classes['subpage-grid__filter']),
    Action: WithStyles(Section, classes['subpage-grid__action']),
    Table: WithStyles(Section, classes['subpage-grid__table']),
    Footer: WithStyles(Section, classes['subpage-grid__footer']),
}
