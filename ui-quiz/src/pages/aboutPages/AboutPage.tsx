import { CreateButton, TextButton } from "../../components/buttons";
import useAppNavigation from "../../hooks/useAppNavigation";
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
        <TextButton onClick={() => nav.toSessionsPage()}>Go to the session page</TextButton>
      </div>
      <div className="h3 u-margin-bottom-medium">
        <h3>
          Lorem ipsum dolor sit <br /> amet, consectetur <br />
          adipiscing elit. <br />
          Vestibulum
        </h3>
      </div>
      <div>
        <CreateButton>Create quiz</CreateButton>
      </div>
    </div>
  );
};

export default AboutPage;
