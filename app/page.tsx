const cases = [
  ['화장품 패키지','스킨케어·뷰티 제품에 맞춘 단상자 제작'],
  ['생활용품 패키지','샤워기·필터 등 생활용품 맞춤 패키지'],
  ['농수산물 박스','유통 환경과 중량을 고려한 골판지 박스'],
  ['선물용 택배박스','선물 포장과 배송을 동시에 고려한 메일러형 박스'],
  ['공산품 패키지','산업재·공산품 규격에 맞춘 포장박스'],
  ['전자제품·액세서리','제품 보호와 브랜드 이미지를 고려한 칼라박스'],
]

const strengths = [
  ['직접 생산','설계부터 인쇄, 가공, 접착, 출고까지 자체 공정으로 관리합니다.'],
  ['빠른 납기','생산 일정과 물류 흐름을 고려해 고객 일정에 맞춰 대응합니다.'],
  ['안전재고 운영','반복 생산 제품은 안전재고 운영으로 긴급 주문에 대응합니다.'],
  ['소량 제작 가능','신제품 테스트와 초기 판매를 위한 소량 제작도 상담 가능합니다.'],
  ['패키지 설계','CAD 설계와 샘플 제작으로 양산 전 구조를 검증합니다.'],
  ['전국 납품','쇼핑몰, 제조사, 유통회사 등 다양한 고객사에 납품합니다.'],
]

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">욱스박스<small>WOOK&apos;s BOX by 욱성수출포장</small></div>
        <div className="menu">
          <a href="#portfolio">제작사례</a>
          <a href="#process">생산공정</a>
          <a href="#design">패키지 설계</a>
          <a href="#contact">견적문의</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">PACKAGING SOLUTIONS</div>
          <h1>끝까지 책임지는<br/>패키지 파트너</h1>
          <p>빠른 납기 · 안전재고 · 소량 제작 · 전국 납품. 욱스박스는 제품의 출하가 멈추지 않도록 패키지 공급을 책임집니다.</p>
          <div className="buttons">
            <a className="btn primary" href="#contact">견적 문의하기</a>
            <a className="btn secondary" href="#portfolio">제작사례 보기</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="section-title">왜 욱스박스인가?</h2>
          <p className="lead">욱스박스는 단순히 박스를 제작하는 것이 아니라, 고객의 생산과 출하 일정까지 고려하는 B2B 패키지 파트너입니다.</p>
          <div className="grid">
            {strengths.map(([t,d]) => <div className="card" key={t}><span className="tag">WOOK&apos;s POINT</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className="dark">
        <div className="wrap">
          <h2 className="section-title">대표 제작사례</h2>
          <p className="lead">고객사 보호를 위해 브랜드명과 상품명은 비공개 처리하고, 업종과 용도 중심으로 소개합니다.</p>
          <div className="grid">
            {cases.map(([t,d]) => <div className="card" key={t}><span className="tag">PORTFOLIO</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="design">
        <div className="wrap">
          <h2 className="section-title">패키지 설계</h2>
          <p className="lead">제품 크기, 중량, 유통 환경을 분석해 CAD 설계와 샘플 제작을 진행합니다. 양산 전 실제 구조를 확인하여 리스크를 줄입니다.</p>
          <div className="grid">
            <div className="card"><h3>제품 분석</h3><p>규격, 중량, 적재 방식, 배송 환경을 확인합니다.</p></div>
            <div className="card"><h3>CAD 설계</h3><p>제품에 맞는 전개도와 구조를 설계합니다.</p></div>
            <div className="card"><h3>샘플 제작</h3><p>실물 샘플로 조립성, 보호성, 생산성을 검토합니다.</p></div>
          </div>
        </div>
      </section>

      <section id="process" className="dark">
        <div className="wrap">
          <h2 className="section-title">직접 생산 공정</h2>
          <p className="lead">샘플 제작부터 후렉소 인쇄, 톰슨 가공, 삼면접착, 철봉합까지 직접 생산 공정을 운영합니다.</p>
          <div className="process">
            {['샘플 제작','후렉소 인쇄','톰슨 가공','삼면접착','철봉합 VEGA'].map((s,i)=><div className="step" key={s}><b>STEP {i+1}</b><h3>{s}</h3></div>)}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <h2 className="section-title">견적 문의</h2>
          <div className="contact">
            <div className="info">
              <h3>욱성수출포장 · 욱스박스</h3>
              <p>전화: 031-354-0472</p>
              <p>팩스: 031-354-0475</p>
              <p>이메일: wooksung56@naver.com</p>
              <p>주소: 경기도 화성시 팔탄면 현대기아로 25-9</p>
            </div>
            <form className="form">
              <input placeholder="회사명" />
              <input placeholder="담당자 / 연락처" />
              <select><option>문의 제품 선택</option><option>골판지박스</option><option>단상자</option><option>선물세트</option><option>메일러박스</option></select>
              <textarea rows={4} placeholder="규격, 수량, 인쇄 여부 등 문의 내용을 입력해주세요." />
              <button type="button">견적 요청하기</button>
            </form>
          </div>
        </div>
      </section>

      <a className="float" href="tel:031-354-0472">전화 상담</a>
      <footer>© WOOK&apos;s BOX by 욱성수출포장 · 사업자등록번호 124-43-62110</footer>
    </main>
  )
}
