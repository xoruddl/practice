import "./MainBody.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const MainBody = () => {
  const nav = useNavigate();
  return (
    <div className="MainBody">
      <section className="Top">
        <img src="hiarcFont.png" />
        <div className="introButton">
          <button
            onClick={() => {
              nav("/introduce");
            }}
          >
            학회소개
          </button>
          <button
            onClick={() => {
              nav("/activity");
            }}
          >
            학회활동
          </button>
          <button
            onClick={() => {
              nav("/study");
            }}
          >
            스터디
          </button>
        </div>
      </section>
      <section className="intro">
        <h3>HI-ARC는...</h3>
        <p>
          하이아크는 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다.
          하이아크에서는 ICPC를 비롯한 각종 프로그래밍 대회를 준비하며,{" "}
          알고리즘과 문제 해결 능력을 기르기 위한 다수의 스터디를 진행하고
          있습니다. 더불어 연세대, 이화여대, 서강대, 숙명여대와 함께 운영하는
          동아리 연합 ICPC Sinchon 소속입니다. 매번 방학 기간을 이용하여
          연합스터디와 합동 캠프, 프로그래밍 대회 SUAPC 등을 진행하고 있습니다.
          이외에도 Discord 등을 통하여 다양한 정보와 지식을 함께 교류해 나가고
          있습니다.
        </p>
        <a href="https://icpc-sinchon.io/" className="ICPC_button">
          ICPC 신촌 홈페이지 구경가기
        </a>
      </section>
    </div>
  );
};

export default MainBody;
