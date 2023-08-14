import { PrimaryButton, SecondaryButton, TertiaryButton } from "../../components/buttons";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import classes from "./AboutPage.module.scss";

const AboutPage = () => {
  const nav = useAppNavigation();

  return (
    <div className={classes.page}>
      <div className="u-margin-bottom-medium u-margin-top-big">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus lobortis <br />
          magna quis cursus. Aliquamerat volutpat. Morbi <br />
          consequat tempus nisl id posuere. <br />
          Vivamus feugiat purus a facili.
        </h3>
      </div>
      <div className="u-margin-bottom-big">
        <TertiaryButton onClick={() => nav.toSessionsPage()} label="Go to the session page" />
      </div>
      <div className="h3 u-margin-bottom-medium">
        <h3>
          Lorem ipsum dolor sit <br /> amet, consectetur <br />
          adipiscing elit. <br />
          Vestibulum
        </h3>
      </div>
      <div>
        <PrimaryButton label="Create Quiz"/>
      </div>
    </div>
  );
};

export default AboutPage;
