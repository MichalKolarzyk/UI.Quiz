import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.scss";
import RegistrationForm from "../../compoundComponents/RegistrationForm";
import { Card } from "../../components/cards";
import { IoMdPersonAdd } from "react-icons/io";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import Prompt from "../../compoundComponents/Prompt";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [succeedRegister, setSucceedRegister] = useState<Boolean>(false);

  return (
    <Prompt.Context>
      <Prompt.View />
      <RegistrationForm.Form>
        <div className={classes.page}>
          <div className={classes.desctiption}>
            <div className="h1 u-center-text u-margin-bottom-big">
              <h1>Sign in</h1>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2>welcome in the first game for</h2>
            </div>
            <div className="u-center-text">
              <RegistrationForm.GoBack />
            </div>
          </div>
          <div className={classes["form-section"]}>
            <div className={classes["form-section__box"]}>
              <Card>
                <div className="u-margin-bottom-medium">
                  <FlexRow.Container itemsPosition={RowPositionEnum.center} gap={GapRowEnum.big}>
                    <IoMdPersonAdd className="u-icon-big" />
                    <div className="u-center-text">
                      <h2>New user</h2>
                    </div>
                  </FlexRow.Container>
                </div>

                <div className="u-margin-bottom-medium">
                  <RegistrationForm.Login />
                </div>
                <div className="u-margin-bottom-medium">
                  <RegistrationForm.Password />
                </div>

                <div className="u-margin-bottom-big">
                  <RegistrationForm.RepetePassword />
                </div>

                <div className="u-center-text">
                  <RegistrationForm.SignUp />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </RegistrationForm.Form>
    </Prompt.Context>
  );
};

export default RegisterPage;
