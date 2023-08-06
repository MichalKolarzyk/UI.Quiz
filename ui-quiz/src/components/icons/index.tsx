import { ImBin, ImCancelCircle } from "react-icons/im";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { MdClear, MdModeEdit } from "react-icons/md";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { CgSpinnerAlt } from "react-icons/cg";
import { BsCheck } from "react-icons/bs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { IconProps } from "./types";

export const Icon = (props: IconProps) => {
  return (
    <props.iconComponent
      style={{
        height: props.size,
        width: props.size,
      }}
      className={props.className}
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
