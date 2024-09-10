import "./MainHeader.css";
import CommonHeader from "./CommonHeader";

const MainHeader = () => {
  return (
    <div className="MainHeader">
      <CommonHeader />
      <img src="KakaoTalk_Photo_2024-09-02-01-40-38.png" />
      <section className="Bottom">
        <div>
          <div>@since 2017</div>
          <div>@Hongik Algorithm Research Club</div>
        </div>
        <div className="rightText">solve with us</div>
      </section>
    </div>
  );
};

export default MainHeader;
