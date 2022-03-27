import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "./LeftNavBar.scss";
import { Link } from "react-router-dom";
const LeftNavBar = () => {
  // // const [selected, setSelected] = useState();
  // const handleTabSelect = (e, val) => {
  //   setSelected(val);
  // };
  const styleLink = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <aside className="leftnavbar-container">
      <Link to="/container" style={styleLink}>
        <span className="leftbar-component">
          <HomeIcon />
          Home
        </span>
      </Link>
      <Link to="/explore" style={styleLink}>
        <span className="leftbar-component">
          <ExploreIcon />
          Explore
        </span>
      </Link>
      <Link to="/answer" style={styleLink}>
        <span className="leftbar-component">
          <QuestionAnswerIcon fontSize="medium" />
          My Answers
        </span>
      </Link>
      <Link to="/topics" style={styleLink}>
        <span className="leftbar-component">
          <QuestionMarkIcon />
          My Topics
        </span>
      </Link>
    </aside>
  );
};

export default LeftNavBar;
