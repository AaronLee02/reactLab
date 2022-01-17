import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class event extends Component {
    render () {
        return (
          
      <div className="contact">
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="index.html">MOA</a></li>
          <li className="active">이벤트·공지사항</li>
        </ol></div>
      <main className="board wzui">
        <div className="board-visual" style={{display: 'none'}}>
          <div className="board-visual-img" />
        </div>
        <div className="board-main">
          <ul>
            <li>
              <a className="article " href="/web/wboard/newsBoardDetail/7976?headWordId=2&cPage=1">
                <em className="status closed">진행중</em>
                <em className="notice">중요</em>
                <em className="notice">BEST</em>
                <div className="info">
                  <div className="thumb" style={{backgroundImage: 'url(https://cdn.wadiz.kr/ft/images/green001/2021/1228/20211228095651665_0.jpg/wadiz/resize/400/format/jpg/quality/80/optimize)'}} />
                  <h3 className="title">[스토어]  바를참스킨 1위 토너 '링톤' 스토어 입점 프로모션 l 최대 47% 할인 + 사은품 EVENT! (~1/3)</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="article " href="/web/wboard/newsBoardDetail/7975?headWordId=2&cPage=1">
                <em className="status closed">진행중</em>
                <em className="notice">중요</em>
                <em className="notice">BEST</em>
                <div className="info">
                  <div className="thumb" style={{backgroundImage: 'url(https://cdn.wadiz.kr/ft/images/green001/2021/1227/20211227130150836_0.jpg/wadiz/resize/400/format/jpg/quality/80/optimize)'}} />
                  <h3 className="title">[스토어] 영혼방석 '밸런스온 핏 라지' 스토어 입점 프로모션 (~12/31)</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="article " href="/web/wboard/newsBoardDetail/7974?headWordId=2&cPage=1">
                <em className="status closed">진행중</em>
                <em className="notice">중요</em>
                <em className="notice">BEST</em>
                <div className="info">
                  <div className="thumb" style={{backgroundImage: 'url(https://cdn.wadiz.kr/ft/images/green001/2021/1223/20211223201544404_0.jpg/wadiz/resize/400/format/jpg/quality/80/optimize)'}} />
                  <h3 className="title">[스토어] '오일풀링 가글' 스토어 입점 프로모션 ㅣ 최대 55%할인 +사은품 증정 EVENT! (~12/30)</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="article " href="/web/wboard/newsBoardDetail/7941?headWordId=2&cPage=1">
                <em className="status closed">진행중</em>
                <em className="notice">중요</em>
                <em className="notice">BEST</em>
                <div className="info">
                  <div className="thumb" style={{backgroundImage: 'url(https://cdn.wadiz.kr/ft/images/green001/2021/1201/20211201152728676_0.png/wadiz/resize/400/format/jpg/quality/80/optimize)'}} />
                  <h3 className="title">[캐릭터 기획전]  롯데월드 로티와 친구들 캐릭터 제품화 사업에  도전하세요 ~!</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="article " href="/web/wboard/newsBoardDetail/7922?headWordId=2&cPage=1">
                <em className="status closed">진행중</em>
                <em className="notice">중요</em>
                <em className="notice">BEST</em>
                <div className="info">
                  <div className="thumb" style={{backgroundImage: 'url(https://cdn.wadiz.kr/ft/images/green001/2021/1122/20211122114825472_0.jpg/wadiz/resize/400/format/jpg/quality/80/optimize)'}} />
                  <h3 className="title">[펀딩] 2022 트렌드를 이끌 S/S 패션위크 메이커 모집 (~1/9)</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="board-footer">
          <div className="pagination">
            {/* 모바일용 버튼 */}
            <button className="prev-page icon-chevron-left mobile-only" onclick="movePage(0)" disabled>
              <span className="text-hidden">이전 목록</span>
            </button>
            <div className="page">
              {/* 모바일용 페이지 리스트 */}
              <div className="mobile-only">
                <span className="current-count">1</span>/<span className="total-count"><span>50</span> 페이지</span>
              </div>
              <div className="desktop-only">
                {/* 데스크탑용 버튼 */}
                <button className="prev-page icon-chevron-left" onclick="movePage(0)" disabled>
                  <span className="text-hidden">이전 목록</span>
                </button>
                {/* 데스크탑용 페이지 리스트 */}
                <a className="current" href="#" onclick="movePage(1)">1</a>
                <a href="#" onclick="movePage(2)">2</a>
                <a href="#" onclick="movePage(3)">3</a>
                <a href="#" onclick="movePage(4)">4</a>
                <a href="#" onclick="movePage(5)">5</a>
                <a href="#" onclick="movePage(6)">6</a>
                {/* 데스크탑용 버튼 */}
                <button className="next-page icon-chevron-right" onclick="movePage(7)">
                  <span className="text-hidden">다음 목록</span>
                </button>
              </div>
            </div>
            {/* 모바일용 버튼 */}
            <button className="next-page icon-chevron-right mobile-only" onclick="movePage(2)">
              <span className="text-hidden">다음 목록</span>
            </button>
          </div>
          <div className="search">
            <form method="post" id="news-board-search">
              <div className="filter-container">
                <select id="searchSelectInBoard" className="filter" name>
                  <option value="tc">제목+내용</option>
                  <option value="t">제목</option>
                  <option value="c">내용</option>
                </select>
              </div>
              <div className="field">
                <label className="text-hidden" htmlFor>검색창</label>
                <input id="searchTextInBoard" name="searchTextInBoard" className="search-form" type="text" defaultValue />
                <button className="btn-search dense" type="submit">검색</button>
              </div>
            </form>
            <form id="formSearch" name="formSearchBoard" action="/web/wboard/newsBoardList/2" method="post">
              <input id="searchText1" name="searchText1" type="hidden" defaultValue />
              <input id="searchSelect1" name="searchSelect1" type="hidden" defaultValue />
              <input id="searchSelect2" name="searchSelect2" type="hidden" defaultValue />
              <input id="searchSelect4" name="searchSelect4" type="hidden" defaultValue />
              <input id="searchSelect5" name="searchSelect5" type="hidden" defaultValue />
            </form>
          </div>
        </div>
        <div aria-hidden="true" style={{position: 'relative', left: '0px', bottom: '48px', width: '100%'}} /></main>
    </div>
  );
}
}

export default event;