import { useState } from "react";
import { ReactSVG } from "react-svg";

import "../../../styles/utility/index.scss";
import "../../../styles/pages/fund/tdf/index.scss";

const tdfData = [
  {
    year: "2060",
    stock: 79,
    bond: 21,
    customer: "20대",
    point: "은퇴 35년 전",
  },
  {
    year: "2055",
    stock: 78,
    bond: 22,
    customer: "20~30대",
    point: "은퇴 30년 전",
  },
  {
    year: "2050",
    stock: 73,
    bond: 27,
    customer: "30대",
    point: "은퇴 25년 전",
  },
  {
    year: "2045",
    stock: 69,
    bond: 31,
    customer: "30~40대",
    point: "은퇴 20년 전",
  },
  {
    year: "2040",
    stock: 64,
    bond: 36,
    customer: "40대",
    point: "은퇴 15년 전",
  },
  {
    year: "2035",
    stock: 59,
    bond: 41,
    customer: "40~50대",
    point: "은퇴 10년 전",
  },
  {
    year: "2030",
    stock: 52,
    bond: 48,
    customer: "50대 이상",
    point: "은퇴 5년 전",
  },
  {
    year: "2025",
    stock: 35,
    bond: 65,
    customer: "은퇴 이후",
    point: "은퇴 시점",
  },
  {
    year: "2020",
    stock: 32,
    bond: 68,
    customer: "은퇴 이후",
    point: "은퇴 5년 후",
  },
  {
    year: "2015",
    stock: 30,
    bond: 70,
    customer: "은퇴 이후",
    point: "은퇴 10년 후",
  },
];

const faqItems = [
  "삼성자산운용의 대표 연금 상품인 '삼성 TDF'란 무엇인가요?",
  "내 은퇴 연도에 맞는 '삼성 TDF' 상품 라인업은 어떻게 선택하나요?",
  "TDF 투자에서 가장 중요한 '글라이드 패스(Glide Path)'의 역할은 무엇인가요?",
  "왜 많은 투자자들이 연금 자산으로 삼성 TDF를 선택하고 신뢰하나요?",
];

function TdfPage() {
  const [activeTdf, setActiveTdf] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const selectedTdf = tdfData[activeTdf];

  return (
    <div className="tdf-page">
      <header className="tdf-header">
        <div className="tdf-header__brand">
          <a className="tdf-logo" href="#">
            삼성자산운용
          </a>
          <div className="tdf-switch">
            <button type="button">KODEX ETF</button>
            <button className="active" type="button">
              삼성자산운용
            </button>
          </div>
        </div>
        <nav className="tdf-nav" aria-label="주 메뉴">
          {["연금투자", "펀드 상품", "인사이트", "고객라운지", "회사소개"].map(
            (item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ),
          )}
        </nav>
        <div className="tdf-tools">
          <button type="button">KR⌄</button>
          <button className="user" type="button" aria-label="마이페이지">
            <ReactSVG src="/assets/images/fund/tdf/icon-emp-01.svg" />
          </button>
          <button className="search" type="button" aria-label="검색">
            <ReactSVG src="/assets/images/fund/tdf/icon-circle-01.svg" />
          </button>
          <button className="menu" type="button" aria-label="전체 메뉴" />
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-section__main">
            <span
              className="hero-section__image"
              role="img"
              aria-label="비행기 창밖으로 보이는 날개와 하늘"
            />
            <div className="hero-section__copy">
              <h1>
                은퇴 시점에 맞춰 달라지는 투자,
                <br />
                <strong>삼성 TDF</strong>로 시작하세요
              </h1>
              <p>
                생애주기에 따라 자산 비중을 자동으로 조정하는
                <br />
                삼성 TDF로 장기 투자를 시작해 보세요.
              </p>
            </div>
          </div>
          <div className="hero-section__banners">
            <a className="hero-banner compare" href="#">
              <ReactSVG
                className="plus"
                src="/assets/images/fund/tdf/icon-plus.svg"
              />
              <h2>
                삼성자산운용 TDF
                <br />
                3개 상품을 한 눈에
                <br />
                비교해보세요
              </h2>
              <span
                className="banner-image"
                role="img"
                aria-label="TDF 상품 3종"
              />
            </a>
            <a className="hero-banner performance" href="#">
              <ReactSVG
                className="plus"
                src="/assets/images/fund/tdf/icon-plus.svg"
              />
              <h2>
                펀드별 수익률/투자성과를
                <br />
                확인해보세요
              </h2>
              <span
                className="banner-image"
                role="img"
                aria-label="수익률 그래프"
              />
            </a>
          </div>
        </section>

        <div className="tdf-content">
          <section className="section1">
            <div className="section-title">
              <span>
                <b>1</b>TDF란?
              </span>
              <h2>TDF, 어떻게 투자할까요?</h2>
              <p>
                TDF(Target Date Fund)는 투자자의 은퇴시점을 목표로 생애주기에
                따라 적극적인 투자에서 안정적인 투자로 포트폴리오를 알아서
                조정하는 자산배분 펀드입니다.
              </p>
            </div>
            <div className="section1__cards">
              <article>
                <h3>
                  <em>주기적인 리밸런싱</em>으로
                  <br />
                  최적의 자산 비중 유지
                </h3>
                <p>
                  생애주기에 따라 위험자산의 비중을 줄여가며 안정적으로
                  관리합니다.
                </p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list01-01.svg"
                />
              </article>
              <article>
                <h3>
                  <em>글로벌 자산배분</em>으로
                  <br />
                  위험은 낮추고 기회는 넓게
                </h3>
                <p>
                  다양한 국가와 자산에 분산 투자해 장기 투자 기회를 넓힙니다.
                </p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list01-02.svg"
                />
              </article>
              <article>
                <h3>
                  생애주기에 맞춰
                  <br />
                  자산 비중을 자동 조정하는 <em>Glide Path</em>
                </h3>
                <p>목표 시점에 가까워질수록 안정적인 자산의 비중을 높입니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list01-03.svg"
                />
              </article>
            </div>
          </section>

          <section className="section2">
            <div className="section-title">
              <span>
                <b>2</b>글로벌 액티브 TDF
              </span>
              <h2>오랜 경험으로 든든하게, 세계에 나눠 담는 내 자산</h2>
            </div>
            <div className="history">
              <h3>글로벌액티브 적격TDF의 역사</h3>
              <div className="history__line">
                {["2016.4", "2016.10", "2019.2", "2019.12", "2024.8"].map(
                  (year, index) => (
                    <div key={year}>
                      <b>{year}</b>
                      <span>
                        {index === 0
                          ? "TDF 첫 출시"
                          : index === 4
                            ? "2060 출시"
                            : "라인업 확대"}
                      </span>
                    </div>
                  ),
                )}
              </div>
              <p>은퇴자산의 적립부터 분배까지 아우르는 Total Solution 제공</p>
            </div>
            <div className="allocation">
              <h3>생애주기에 따른 자산&스타일 배분</h3>
              <div
                className="allocation__graph"
                role="img"
                aria-label="생애주기에 따른 자산 배분 그래프"
              >
                <div
                  className="allocation__highlight"
                  style={{ left: `calc(${activeTdf} * (100% / 10))` }}
                />
              </div>
              <div
                className="allocation__tabs"
                role="tablist"
                aria-label="TDF 연도 선택"
              >
                {tdfData.map((item, index) => (
                  <button
                    className={activeTdf === index ? "active" : ""}
                    type="button"
                    role="tab"
                    aria-selected={activeTdf === index}
                    onClick={() => setActiveTdf(index)}
                    key={item.year}
                  >
                    <span>{item.point}</span>
                    <b>TDF {item.year}</b>
                  </button>
                ))}
              </div>
              <div className="allocation__result">
                <p>
                  <span>선택 상품</span>
                  <b>TDF {selectedTdf.year}</b>
                </p>
                <p>
                  <span>주식 비중</span>
                  <strong>{selectedTdf.stock}%</strong>
                </p>
                <p>
                  <span>채권 등 비중</span>
                  <strong>{selectedTdf.bond}%</strong>
                </p>
                <p>
                  <span>주요 대상</span>
                  <b>{selectedTdf.customer}</b>
                </p>
              </div>
            </div>
            <div className="feature-cards">
              <article>
                <h3>
                  한국인의 생애주기에 최적화된
                  <br />
                  <em>한국형 Glide Path 설계</em>
                </h3>
                <p>소득과 은퇴 시점을 반영한 맞춤형 자산배분 전략입니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list02-01.svg"
                />
              </article>
              <article>
                <h3>
                  전문가의 정성 판단을 반영하는
                  <br />
                  <em>유연한 액티브 운용</em>
                </h3>
                <p>시장 변화에 맞춰 능동적으로 위험을 관리합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list02-02.svg"
                />
              </article>
              <article>
                <h3>
                  <em>현지 법인의 전문성</em>을<br />
                  활용한 글로벌 분산투자
                </h3>
                <p>글로벌 네트워크를 바탕으로 투자 기회를 발굴합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list02-03.svg"
                />
              </article>
            </div>
          </section>

          <section className="section3">
            <div className="section-title">
              <span>
                <b>3</b>글로벌 EMP TDF
              </span>
              <h2>전 세계 분산투자! 글로벌 대표 ETF로 완성!</h2>
            </div>
            <div className="quotes">
              <div>
                <span
                  className="person person01"
                  role="img"
                  aria-label="워렌 버핏"
                />
                <blockquote>
                  “저비용 인덱스 펀드는 대다수 투자자들에게 가장 합리적인 주식
                  투자 방법입니다.”<b>워렌 버핏, 2006</b>
                </blockquote>
              </div>
              <div>
                <blockquote>
                  “시장을 이기려 하지 말고, 시장 전체를 소유하라.”
                  <b>존 보글, &lt;모든 주식을 소유하라&gt;</b>
                </blockquote>
                <span
                  className="person person02"
                  role="img"
                  aria-label="존 보글"
                />
              </div>
            </div>
            <div className="feature-cards">
              <article>
                <h3>
                  <em>한국인의 특성</em>에 적합한
                  <br />
                  생애주기별 자산배분
                </h3>
                <p>한국 투자자의 은퇴 환경을 충분히 반영합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-01.svg"
                />
              </article>
              <article>
                <h3>
                  <em>글로벌 대표 ETF</em>로 완성하는
                  <br />
                  저비용 분산투자
                </h3>
                <p>다양한 지역과 자산에 효율적으로 투자합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-02.svg"
                />
              </article>
              <article>
                <h3>
                  <em>글로벌 ETF 리서치</em>를 통한
                  <br />
                  전문적인 상품 선정
                </h3>
                <p>정량·정성 분석으로 우수한 ETF를 선별합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-03.svg"
                />
              </article>
            </div>
          </section>

          <section className="section4">
            <div className="section-title">
              <span>
                <b>4</b>코리아 EMP TDF
              </span>
              <h2>국내 자산배분으로 한국인의 생애주기에 최적화된 TDF</h2>
            </div>
            <p className="section4__lead">
              한국 투자자의 특수성과 국내 자산의 효율성 극대화를 추구하는 한국형
              전략
            </p>
            <div className="section4__ratio">
              <span>공통 위험자산 비중 구조</span>
              <b>
                초기 <em>79%</em>
              </b>
              <i>→</i>
              <b>
                은퇴시점 <em>35.6%</em>
              </b>
              <i>→</i>
              <b>
                생애말 <em>23%</em>
              </b>
            </div>
            <div className="comparison">
              <h3>코리아 글라이드 패스와 글로벌 글라이드 패스 비교</h3>
              <div>
                <article>
                  <h4>
                    코리아 글라이드 패스 <span>한국형 전략</span>
                  </h4>
                  <dl>
                    <dt>투자 대상</dt>
                    <dd>국내 주식 및 채권 중심</dd>
                    <dt>환율 영향</dt>
                    <dd>원화 자산 중심으로 환율 영향 최소화</dd>
                    <dt>운용 방식</dt>
                    <dd>한국인의 소득과 은퇴 환경 반영</dd>
                  </dl>
                </article>
                <article>
                  <h4>글로벌 글라이드 패스</h4>
                  <dl>
                    <dt>투자 대상</dt>
                    <dd>글로벌 주식 및 채권</dd>
                    <dt>환율 영향</dt>
                    <dd>글로벌 통화에 분산</dd>
                    <dt>운용 방식</dt>
                    <dd>전 세계 시장 기회를 폭넓게 활용</dd>
                  </dl>
                </article>
              </div>
            </div>
            <div className="feature-cards">
              <article>
                <h3>
                  <em>한국인의 특성</em>에 적합한
                  <br />
                  생애주기별 자동 자산배분
                </h3>
                <p>한국형 글라이드 패스를 적용합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-01.svg"
                />
              </article>
              <article>
                <h3>
                  <em>국내 투자 대표 ETF</em>를 통한
                  <br />
                  효율적인 자산배분
                </h3>
                <p>국내 시장의 투자 효율을 높입니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-02.svg"
                />
              </article>
              <article>
                <h3>
                  <em>Core & Satellite</em>
                  <br />
                  전략을 통한 알파 추구
                </h3>
                <p>안정성과 성장 가능성을 함께 추구합니다.</p>
                <ReactSVG
                  className="icon"
                  src="/assets/images/fund/tdf/icon-list03-03.svg"
                />
              </article>
            </div>
          </section>

          <section className="section5">
            <div className="section-title">
              <span>
                <b>5</b>글로벌 액티브/EMP TDF 글라이드 패스
              </span>
              <h2>시간이 지나면 내 자산은 어떻게 변할까요?</h2>
            </div>
            <div className="bar-chart">
              <div className="bar-chart__labels">
                <span>주식 비중(%)</span>
                <span>펀드명</span>
                <span>대상고객</span>
              </div>
              <div className="bar-chart__items">
                {tdfData.map((item) => (
                  <div key={item.year}>
                    <span>{item.point}</span>
                    <i>
                      <b>{item.stock}%</b>
                    </i>
                    <strong>TDF {item.year}</strong>
                    <small>{item.customer}</small>
                  </div>
                ))}
              </div>
            </div>
            <p className="notice">
              * 글라이드 패스 관련 내용은 단순 참고자료이며 필요시 수시로 조정될
              수 있습니다.
              <br />
              ** 2026년 12월 말 기준　*** 55~60세 은퇴 기준
            </p>
          </section>

          <section className="section6">
            <div className="section-title">
              <span>
                <b>6</b>Q&A
              </span>
              <h2>삼성자산운용 TDF 한 눈에 보기</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div className={openFaq === index ? "active" : ""} key={item}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>Q{index + 1}</span>
                    {item}
                    <i />
                  </button>
                  {openFaq === index && (
                    <p>
                      삼성 TDF는 투자자의 목표 은퇴 시점에 맞춰 자산 비중을
                      자동으로 조정하는 장기 투자 상품입니다.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button className="more-button" type="button">
              더 보기
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TdfPage;
