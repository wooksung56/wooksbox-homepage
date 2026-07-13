const strengths = [
  ["직접 생산", "설계부터 인쇄, 가공, 접착, 검수와 출고까지 자체 공정으로 관리합니다."],
  ["빠른 납기", "생산 일정과 물류 흐름을 함께 관리해 고객사의 출하 일정에 대응합니다."],
  ["소량 제작", "신제품 테스트와 초기 판매를 위한 소량 주문도 상담 가능합니다."],
  ["안전재고", "반복 생산 제품은 안전재고 운영으로 갑작스러운 주문에도 대응합니다."],
  ["맞춤 설계", "제품 규격, 중량, 적재와 배송 환경을 고려해 구조를 설계합니다."],
  ["전국 납품", "쇼핑몰, 제조사, 화장품사, 농수산물·축산물 유통사 등에 납품합니다."],
];

const portfolio = [
  { title: "생활용품 패키지", desc: "샤워기·필터 등 생활용품 단상자", image: "/portfolio/living-package.jpg" },
  { title: "화장품 패키지", desc: "스킨케어·뷰티 제품용 고급 단상자", image: "/portfolio/cosmetic-package.jpg" },
  { title: "선물용 택배박스", desc: "크라프트 메일러형 선물 패키지", image: "/portfolio/gift-mailer.jpg" },
  { title: "과일 선물세트", desc: "손잡이형 농산물 선물 패키지", image: "/portfolio/fruit-gift-handle.jpg" },
  { title: "프리미엄 칼라박스", desc: "고급 인쇄·분리형 구조 패키지", image: "/portfolio/premium-box.jpg" },
  { title: "공산품 패키지", desc: "전자제품·부품·산업재 규격 박스", image: "/portfolio/industrial-box.jpg" },
  { title: "진열용 POP 박스", desc: "매장 진열과 브랜드 노출을 위한 구조", image: "/portfolio/display-box.jpg" },
  { title: "맞춤형 내부 트레이", desc: "제품 고정과 보호를 위한 인서트 구조", image: "/portfolio/inner-tray.jpg" },
  { title: "농수산물 박스", desc: "유통과 적재 환경을 고려한 골판지 박스", image: "/portfolio/agri-box.jpg" },
  { title: "특수 구조 박스", desc: "원형·비정형 제품을 위한 맞춤 구조", image: "/portfolio/round-structure.jpg" },
  { title: "장형 공산품 박스", desc: "긴 제품에 맞춘 맞춤 규격 패키지", image: "/portfolio/long-box.jpg" },
  { title: "칼라박스", desc: "브랜드 인쇄와 구조 설계를 결합한 패키지", image: "/portfolio/stacked-color-box.jpg" },
];

const processes = [
  { no: "01", title: "후렉소 인쇄", text: "골판지 원단에 로고와 정보를 인쇄합니다.", image: "/process/printer-front.jpg" },
  { no: "02", title: "원단 투입", text: "규격에 맞는 원단을 안정적으로 투입합니다.", image: "/process/printer-feed.jpg" },
  { no: "03", title: "인쇄·슬롯 가공", text: "인쇄와 절단, 오시 공정을 연속으로 진행합니다.", image: "/process/printer-out.jpg" },
  { no: "04", title: "톰슨 가공", text: "특수 구조와 손잡이, 창문 등을 정밀하게 가공합니다.", image: "/process/thomson.jpg" },
  { no: "05", title: "자동 접착", text: "일정한 품질로 접착하고 형태를 완성합니다.", image: "/process/gluer.jpg" },
  { no: "06", title: "자동 봉합", text: "대형·산업용 박스는 철봉합으로 강도를 확보합니다.", image: "/process/stitcher.jpg" },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top"><strong>욱스박스</strong><span>WOOK&apos;s BOX by 욱성수출포장</span></a>
        <nav className="nav"><a href="#why">강점</a><a href="#portfolio">제작사례</a><a href="#process">생산공정</a><a href="#contact">견적문의</a></nav>
      </header>

      <section id="top" className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">PACKAGING SOLUTIONS</p>
          <h1>끝까지 책임지는<br />패키지 파트너</h1>
          <p className="heroText">빠른 납기 · 품질 · 소량 제작 · 안전재고 · 물류 시스템</p>
          <div className="heroActions"><a className="button primary" href="#contact">견적 문의하기</a><a className="button secondary" href="#portfolio">제작사례 보기</a></div>
        </div>
        <div className="heroBadge">DIRECT FACTORY · HWASEONG</div>
      </section>

      <section id="why" className="section light">
        <div className="sectionHead">
          <p className="eyebrow darkText">WHY WOOK&apos;s BOX</p>
          <h2>박스만 만드는 것이 아니라<br />고객사의 출하까지 생각합니다.</h2>
          <p>욱스박스는 B2B 맞춤 패키지를 설계하고 직접 생산하는 욱성수출포장의 브랜드입니다.</p>
        </div>
        <div className="strengthGrid">
          {strengths.map(([title, text], index) => <article className="strengthCard" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="portfolio" className="section darkSection">
        <div className="sectionHead"><p className="eyebrow">PORTFOLIO</p><h2>실제 제작사례</h2><p>고객사 보호를 위해 제품명 대신 업종과 용도 중심으로 소개합니다.</p></div>
        <div className="portfolioGrid">
          {portfolio.map((item) => <article className="portfolioCard" key={item.title}><div className="portfolioImageWrap"><img src={item.image} alt={item.title} className="portfolioImage" /></div><div className="portfolioCopy"><h3>{item.title}</h3><p>{item.desc}</p></div></article>)}
        </div>
      </section>

      <section id="process" className="section processSection">
        <div className="sectionHead"><p className="eyebrow darkText">OUR PROCESS</p><h2>설계부터 출고까지<br />직접 관리합니다.</h2><p>후렉소 인쇄, 톰슨, 접착, 봉합까지 주요 공정을 자체 설비로 운영합니다.</p></div>
        <div className="processGrid">
          {processes.map((item) => <article className="processCard" key={item.no}><img src={item.image} alt={item.title} /><div className="processBody"><span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="factoryIntro">
        <div className="factoryIntroImage" />
        <div className="factoryIntroText"><p className="eyebrow">DIRECT MANUFACTURING</p><h2>직접 생산하는 공장,<br />직접 책임지는 품질</h2><p>제품의 크기와 중량, 적재 방식, 배송 환경까지 고려해 패키지를 설계하고 생산합니다.</p><a className="textLink" href="#contact">생산 상담하기 →</a></div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="contactBox">
          <div><p className="eyebrow">CONTACT</p><h2>제품에 맞는 박스,<br />지금 상담해보세요.</h2><p className="contactLead">규격, 수량, 인쇄 여부, 납기일을 알려주시면 상담이 더 빠릅니다.</p></div>
          <div className="contactInfo"><a href="tel:031-354-0472"><span>전화</span><strong>031-354-0472</strong></a><a href="mailto:wooksung56@naver.com"><span>이메일</span><strong>wooksung56@naver.com</strong></a><div><span>주소</span><strong>경기도 화성시 팔탄면 현대기아로 25-9</strong></div></div>
        </div>
      </section>

      <footer><div><strong>욱스박스 · WOOK&apos;s BOX</strong><p>욱성수출포장 | 끝까지 책임지는 패키지 파트너</p></div><p>© WOOK&apos;s BOX. All rights reserved.</p></footer>
      <a className="floatingCall" href="tel:031-354-0472">전화 상담</a>
    </main>
  );
}
