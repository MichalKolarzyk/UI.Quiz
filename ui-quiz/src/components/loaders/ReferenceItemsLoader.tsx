import { useEffect } from "react";
import { getCategories } from "../../reducers/referenceItems/asyncActions";
import { useAppDispatch } from "../../store/store";

const ReferenceItemsLoader = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return <>{props.children}</>;
};

export default ReferenceItemsLoader;
