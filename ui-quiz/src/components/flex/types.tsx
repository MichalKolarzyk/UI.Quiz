export interface FlexColumnProps {
  children?: any;
  gap?: GapColumnEnum;
}

export enum GapColumnEnum {
  small = "1rem",
  medium = "2rem",
  big = "3rem",
}


export interface FlexRowProps {
    children?: any;
    gap?: GapRowEnum;
    itemsPosition? : RowPositionEnum,
    fullHeight?: boolean;
  }
  
  export interface FlexRowItemProps {
    grow?: number;
    children?: any;
  }
  
  export enum GapRowEnum {
    small = "1rem",
    medium = "2rem",
    big = "3rem",
  }
  
  export enum RowPositionEnum {
    left = "left",
    center = "center",
    right = "right",
    spaceBetween = "space-between"
  }
  