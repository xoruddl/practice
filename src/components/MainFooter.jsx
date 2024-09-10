import "./MainFooter.css";

const MainFooter = () => {
  return (
    <div className="MainFooter">
      <img className="hiarcImg" src="hiarcImg.png" />
      <section className="left">
        <div className="left1">HI-ARC 하이아크</div>
        <div>홍익대학교 컴퓨터공학과 알고리즘 학회</div>
      </section>
      <section className="right">
        <div className="right1">instagram | @hi-arc.official</div>
        <div className="right2"> email | hiarc.official@gmail.com</div>
        <div className="right3"> kakao | @hi-arc</div>
      </section>
    </div>
  );
};

export default MainFooter;
