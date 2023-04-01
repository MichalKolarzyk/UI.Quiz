export interface LoaderProps{
    children: any
}

export enum LoaderState{
    ready,
    inProgress,
    done,
}