import "./CommonHeader.css";
import { useNavigate } from "react-router-dom";

const CommonHeader = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="Top">
        <button
          onClick={() => {
            nav("/");
          }}
          className="leftButton"
        >
          HI_ARC
        </button>
        <a href="http://hi-arc.quest/home/" className="hitingButton">
          하이팅
        </a>
      </div>
    </div>
  );
};

export default CommonHeader;
