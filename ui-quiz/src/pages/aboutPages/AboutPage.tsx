import CreateButton from "../../components/buttons/CreateButton/CreateButton";
import TransparentButton from "../../components/buttons/TransparentButton/TransparentButton";
import classes from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={classes.page}>
      <div className="h3 u-margin-bottom-medium u-margin-top-big">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus lobortis <br />
        magna quis cursus. Aliquamerat volutpat. Morbi <br />
        consequat tempus nisl id posuere.
        <br />
        Vivamus feugiat purus a facili.
      </div>
      <div className="u-margin-bottom-big">
        <TransparentButton>Go to the session page</TransparentButton>
      </div>
      <div className="h3 u-margin-bottom-medium">
        Lorem ipsum dolor sit <br /> amet, consectetur <br />
        adipiscing elit. <br />
        Vestibulum
      </div>
      <div>
        <CreateButton>Create quiz</CreateButton>
      </div>
    </div>
  );
};

export default AboutPage;