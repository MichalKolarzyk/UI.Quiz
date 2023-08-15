import { ImBin, ImCancelCircle } from "react-icons/im";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { MdClear, MdModeEdit } from "react-icons/md";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { CgLogOut, CgSpinnerAlt } from "react-icons/cg";
import { BsCheck } from "react-icons/bs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { IconProps } from "./types";
import classNames from "classnames";
import classes from './Icon.module.scss'

export const Icon = (props: IconProps) => {
  if(!props.iconComponent) return <></>

  const classname = classNames(classes.icon, props.className, props.color)

  return (
    <props.iconComponent height={props.size} width={props.size} 
      className={ classname}
    ></props.iconComponent>
  );
};

export const IconComponents = {
  Delete: ImBin,
  Cancel: ImCancelCircle,
  Close: IoMdClose,
  GoBack: RiArrowGoBackFill,
  Add: IoMdAddCircleOutline,
  Edit: MdModeEdit,
  Next: MdNavigateNext,
  Previous: MdNavigateBefore,
  Spinner: CgSpinnerAlt,
  Check: BsCheck,
  Clear: MdClear,
  Down: BiCaretDown,
  Up: BiCaretUp,
  Logout: CgLogOut
};

export const DeleteIcon = ImBin;
export const CancelIcon = ImCancelCircle;
export const GoBackIcon = RiArrowGoBackFill;
export const AddIcon = IoMdAddCircleOutline;
export const EditIcon = MdModeEdit;
export const NextIcon = MdNavigateNext;
export const PreviousIcon = MdNavigateBefore;
export const SpinnerIcon = CgSpinnerAlt;
export const CheckIcon = BsCheck;
export const ClearIcon = MdClear;
export const DownIcon = BiCaretDown;
export const UpIcon = BiCaretUp;
