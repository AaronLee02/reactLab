import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class sub extends Component {
    render () {
        return (

			<div className="product-model">
			  <div className="container">
				<ol className="breadcrumb">
				  <li><a href="index.html">MOA</a></li>
				  <li className="active">펀딩하기</li>
				</ol>
			  </div>
			  <div id="page-container">
				{/* S : MAIN */}
				<div id="container" className="wd-layout-sub-content reward actionbar-hide">
				  {/* S : 캠페인 액션바 */}
				  {/* E : 리워드 네비게이션 */}
				  <div className="reward-body-wrap">
					{/* S : 서브 컨텐트 영역 */}
					<div className="wd-ui-sub-contents">
					  {/* S : 페이지 레이아웃 컨테이너 */}
					  <div className="wd-ui-info-wrap">
						{/* S : 우측 캠페인 관련 정보 */}
						<div className="wd-ui-sub-opener-info" style={{paddingTop: 0}}>
						  {/* S : 프로젝트 정보 ******************************************************************* 웹 */}
						  <h3 className="text-hidden" style={{fontSize: "50px"}}>프로젝트 정보</h3>
						  <div className="project-state-info">
							<div className="state-box">
							  <p className="remaining-day">13일 남음</p>
							  <p className="rate-bar">
							  <em style={{width: '2658%'}} />
							  </p>
							  <p className="achievement-rate" style={{marginBottom: "16px"}}>
								<strong>2658</strong>% 달성
							  </p>
							  <p className="total-amount" style={{marginBottom: '16px'}}>
								<strong>13,292,100</strong>원 펀딩
							  </p>
							  <p className="total-supporter" style={{marginBottom: '16px'}}>
								<strong>86</strong>명의 서포터
							  </p>
							</div>
							<div className="btn-wrap share">
							  <div className="btn-wrap-flex">
								<button id="btnLike" className="campaign-like btn-like">
								  <i className="icon-like" /> <em id="cntLike" className="cnt-like">39</em>
								</button>
								<button className="campaign-message btn-message">
								  <i className="chat-o icon" aria-hidden="true" />문의
								</button>
								<button id="btnShare" className="campaign-share btn-share" onclick="wadiz.share.kakaoSdkInit();">공유하기</button>
							  </div>
							  <div id="shareSection" className="share-section">
								<ul className="share-list" style={{marginTop: '10px'}}>
								  <li><button className="wz button dense icon-facebook circular" onclick="wadiz.share.facebook();" title="페이스북 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-kakao circular" onclick="wadiz.share.kakao();" title="카카오톡 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-twitter circular" onclick="wadiz.share.twitter();" title="트위터 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-link circular" onclick="wadiz.share.urlCopy();" title="URL 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-code circular" onclick="window.open('/web/embed/reward/134520','_blank');" title="임베드 공유" style={{width: '36px', padding: 0}} /></li>
								</ul>
							  </div>
							</div>
						  </div>
						  {/*E : 프로젝트 정보  */}
						  {/* S : 인기 프로젝트 리스트 */}
						  <div id="normalpane" className="recommend-box-container">
							{/* E : 공간 사이드 배너 */}
							<div className="recommend-box" style={{border: '0px', padding: '0px', margin: '0px'}}>
							  <div className="App_container__t0vcU">
								<div className="PopularDesktop_container__3UXQV">
								  <div className="PopularDesktop_header__3rc0H">
									<div className="PopularDesktop_title__39tIW">펀딩 랭킹 TOP10</div>
									<div className="Tooltip_container__36IdB">
									  <div className="Tooltip_symbol__3pUOM">
										<div style={{display: 'none'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltip__1MtXO" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 1a19 19 0 1019 19A19.06 19.06 0 0020 1zm0 29.5a1.8 1.8 0 111.8-1.79 1.8 1.8 0 01-1.8 1.75zm6-16.13a6.28 6.28 0 01-2.7 5.2l-.6.5c-1.7 1.7-1.7 2.4-1.7 4.3h-2a6.51 6.51 0 012.3-5.7L22 18a4.29 4.29 0 002-3.7 3.7 3.7 0 00-4-4 3.7 3.7 0 00-4 4h-2a5.7 5.7 0 016-6 5.7 5.7 0 016 6z" /></svg>
										</div>
										<div style={{display: 'block'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltipActive__1fmny" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 39a19 19 0 1119-19 19.06 19.06 0 01-19 19zm0-36a17 17 0 1017 17A17 17 0 0020 3z" />
											<path d="M24.34 10A5.75 5.75 0 0020 8.33a5.7 5.7 0 00-6 6h2a3.7 3.7 0 014-4 3.7 3.7 0 014 4A4.29 4.29 0 0122 18l-.7.6a6.51 6.51 0 00-2.3 5.7h2c0-1.9 0-2.6 1.7-4.3l.6-.5a6.28 6.28 0 002.7-5.2 5.73 5.73 0 00-1.66-4.3zM20 26.87a1.8 1.8 0 100 3.6 1.8 1.8 0 100-3.6z" /></svg>
										</div>
									  </div>
									  <div className="Tooltip_messagebox__24RSt" style={{width: '230px'}}>조회 시간을 기준으로 24시간 내 프로젝트 참여자가
										많은 순으로 노출됩니다</div>
									</div>
								  </div>
								  <div className="PopularDesktop_separator__13mT5" />
								  <div className="CardTable_container__3wIpe" style={{width: 'calc(100% - 0px)'}}>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">1</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135958?_refer_section_st=Popular_0" title="카시트에 앉으면 무릎이 불편해요! 무릎 성장판 보호 #카시트발판">카시트에 앉으면
										  무릎이 불편해요! 무릎 성장판 보호 #카시트발판</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">2</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135539?_refer_section_st=Popular_1" title="[100% 혜택] 월급 나오는 블로그, 새해부터 시작하기 ">[100% 혜택] 월급
										  나오는 블로그, 새해부터 시작하기 </a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">3</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135154?_refer_section_st=Popular_2" title="[1억앵콜] 10초면 청담동 미용실을 느낄수 있어요! #유기농시럽 ">[1억앵콜]
										  10초면 청담동 미용실을 느낄수 있어요! #유기농시럽 </a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">4</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/136274?_refer_section_st=Popular_3" title="[마지막앵콜/설 전배송]필터유지비 한달 830원 끝! 공기청정기 Mam2">[마지막앵콜/설
										  전배송]필터유지비 한달 830원 끝! 공기청정기 Mam2</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">5</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/133373?_refer_section_st=Popular_4" title="EMS로 근육 깊숙한 전기자극/하루운동 20분으로 해결/입기만해도 찌릿!">EMS로
										  근육 깊숙한 전기자극/하루운동 20분으로 해결/입기만해도 찌릿!</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">6</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/134020?_refer_section_st=Popular_5" title="[겨울철, 운동부상방지 필수템] 붙일 필요 없이 스포츠테이핑을 입자!">[겨울철,
										  운동부상방지 필수템] 붙일 필요 없이 스포츠테이핑을 입자!</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">7</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/137270?_refer_section_st=Popular_6" title="[평점 4.8 앵콜] 종이필터없이 커피 만들기, 스테인레스 커피필터">[평점 4.8
										  앵콜] 종이필터없이 커피 만들기, 스테인레스 커피필터</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">8</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135370?_refer_section_st=Popular_7" title="[슈가슈가룬] 내 마음속 동심 하트를 픽업! 원작자의 스페셜 일러스트굿즈">[슈가슈가룬]
										  내 마음속 동심 하트를 픽업! 원작자의 스페셜 일러스트굿즈</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">9</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/123916?_refer_section_st=Popular_8" title="[미친1.6억/4.9점] 아이비리그 출신이 만든 직장인 10분! 미드영어">[미친1.6억/4.9점]
										  아이비리그 출신이 만든 직장인 10분! 미드영어</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '0px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">10</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/136434?_refer_section_st=Popular_9" title="[2021 대한민국 주류대상] 런던에서도 소문난 프리미엄 전통 진">[2021
										  대한민국 주류대상] 런던에서도 소문난 프리미엄 전통 진</a></li>
									</div>
								  </div>
								</div>
								<div className="AIRecommendationDesktop_container__Kh9H6">
								  <div className="AIRecommendationDesktop_header__20IOW">
									<div className="AIRecommendationDesktop_title__3ULAg">같이
									  펀딩하기 좋은</div>
									<div className="Tooltip_container__36IdB">
									  <div className="Tooltip_symbol__3pUOM">
										<span className="AISymbol_icon__2gIjg" />
										<div style={{display: 'none'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltip__1MtXO" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 1a19 19 0 1019 19A19.06 19.06 0 0020 1zm0 29.5a1.8 1.8 0 111.8-1.79 1.8 1.8 0 01-1.8 1.75zm6-16.13a6.28 6.28 0 01-2.7 5.2l-.6.5c-1.7 1.7-1.7 2.4-1.7 4.3h-2a6.51 6.51 0 012.3-5.7L22 18a4.29 4.29 0 002-3.7 3.7 3.7 0 00-4-4 3.7 3.7 0 00-4 4h-2a5.7 5.7 0 016-6 5.7 5.7 0 016 6z" /></svg>
										</div>
										<div style={{display: 'block'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltipActive__1fmny" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 39a19 19 0 1119-19 19.06 19.06 0 01-19 19zm0-36a17 17 0 1017 17A17 17 0 0020 3z" />
											<path d="M24.34 10A5.75 5.75 0 0020 8.33a5.7 5.7 0 00-6 6h2a3.7 3.7 0 014-4 3.7 3.7 0 014 4A4.29 4.29 0 0122 18l-.7.6a6.51 6.51 0 00-2.3 5.7h2c0-1.9 0-2.6 1.7-4.3l.6-.5a6.28 6.28 0 002.7-5.2 5.73 5.73 0 00-1.66-4.3zM20 26.87a1.8 1.8 0 100 3.6 1.8 1.8 0 100-3.6z" /></svg>
										</div>
									  </div>
									  <div className="Tooltip_messagebox__24RSt" style={{width: '235px'}}>AI가 프로젝트별 특성과 와디즈 서포터들의 취향을
										분석하여 추천해요</div>
									</div>
								  </div>
								  <div className="AIRecommendationDesktop_separator__2CNAl" />
								  <div className="CardTable_container__3wIpe" style={{width: 'calc(100% - 0px)'}}>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/web/campaign/detail/136186?_refer_section_st=coItemCurator_0" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="[와디즈 최초공개] 목 통증, 목디스크 이젠 안녕! 의료기 인증 모션베개">[와디즈
											최초공개] 목 통증, 목디스크 이젠 안녕! 의료기 인증 모션베개</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">1188%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">홈·리빙</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1227/20211227172604242_136186.jpg/wadiz/resize/88/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1227/20211227172604242_136186.jpg/wadiz/resize/176/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/web/campaign/detail/128210?_refer_section_st=coItemCurator_1" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="실용성에 디자인을 더하다! 잇츠필 [뉴 웨건]">실용성에 디자인을 더하다!
											잇츠필 [뉴 웨건]</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">8%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">여행·레저</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1207/20211207163844455_128210.jpg/wadiz/resize/88/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1207/20211207163844455_128210.jpg/wadiz/resize/176/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/web/campaign/detail/134465?_refer_section_st=coItemCurator_2" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="화로,선반,설거지통,수납케이스 캠핑용품 기능을 모두 갖춘 멀티캠핑바스켓">화로,선반,설거지통,수납케이스
											캠핑용품 기능을 모두 갖춘 멀티캠핑바스켓</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">133%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">여행·레저</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1117/20211117154218191_134465.jpg/wadiz/resize/88/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1117/20211117154218191_134465.jpg/wadiz/resize/176/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '0px'}}>
									  <a href="/web/campaign/detail/131744?_refer_section_st=coItemCurator_3" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="[3분각질제거] 샤워만해도 세신받은 효과! 가마솥으로 빚어낸 때때 가마솝">[3분각질제거]
											샤워만해도 세신받은 효과! 가마솥으로 빚어낸 때때 가마솝</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">1033%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">뷰티</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1227/20211227200118108_131744.jpg/wadiz/resize/88/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1227/20211227200118108_131744.jpg/wadiz/resize/176/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						  {/* E : 인기 프로젝트 리스트 */}
						</div>
						{/* E : 우측 캠페인 관련 정보 */}
						{/* S : 캠페인 정보 */}
						<div className="wd-ui-sub-campaign-info-container">
						  <div className="wd-ui-sub-campaign-info">
							{/* S : 탭 주요 콘텐츠 */}
							<div className="wd-ui-tab-contents">
							  <section className="wd-ui-tab-contents">
								<h3 className="text-hidden">프로젝트 스토리</h3>
								<div className="view-slide-wrap" style={{padding: 0}}>
								  <ul className="view-slide-big image-slide slick-initialized slick-slider" style={{}}>
									<div aria-live="polite" className="slick-list draggable" style={{height: '401px'}}>
									  <div className="slick-track" role="listbox" style={{opacity: 1, width: '632px'}}>
										<li className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: '100%', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1}}>
										  <div className="img-responsive" style={{background: 'url("../img/301.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 0', width: '100%', height: 0, paddingBottom: '63.49%'}} />
										</li>
									  </div>
									</div>
								  </ul>
								</div>
								{/* S : campaign 컨텐츠 */}
								<div className="wd-ui-campaign-content">
								  <div className="wd-ui-cont" style={{paddingTop: '24px'}}>
									{/* S : 프로젝트 정보 */}
									<div className="project-state-info">
									  <div className="state-box">
										<p className="remaining-day" style={{marginBottom: '16px', color: '#495057'}}>13일 남음</p>
										<p className="rate-bar" style={{marginBottom: '8px'}}>
										  <em style={{width: '2658%'}} />
										</p>
										<p className="achievement-rate" style={{marginBottom: '8px', lineHeight: '30px', color: '#495057'}}>
										  <strong>2658</strong>% 달성
										</p>
										<p className="total-amount" style={{marginBottom: '8px', lineHeight: '30px', color: '#495057'}}>
										  <strong>13,292,100</strong>원 펀딩
										</p>
										<p className="total-supporter" style={{marginBottom: '6px', lineHeight: '30px', color: '#495057'}}>
										  <strong>86</strong>명의 서포터
										</p>
									  </div>
									  <div className="btn-wrap share">
										<div className="btn-wrap-flex">
										  <button className="campaign-like btn-like">
											<i className="icon-like" /> <em id="cntLike" className="cnt-like">39</em>
										  </button>
										  <button className="campaign-message btn-message">
											<i className="chat-o icon" aria-hidden="true" />문의
										  </button>
										  <button className="campaign-share btn-share" onclick="wadiz.share.kakaoSdkInit();">공유하기</button>
										</div>
										<div id="shareSection" className="share-section">
										  <ul className="share-list">
											<li><button className="wz button dense icon-facebook circular" onclick="wadiz.share.facebook();" title="페이스북 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-kakao circular" onclick="wadiz.share.kakao();" title="카카오톡 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-twitter circular" onclick="wadiz.share.twitter();" title="트위터 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-link circular" onclick="wadiz.share.urlCopy();" title="URL 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-code circular" onclick="window.open('/web/embed/reward/134520','_blank');" title="임베드 공유" style={{width: '36px', padding: 0}} /></li>
										  </ul>
										</div>
									  </div>
									</div>
									{/* E : 프로젝트 정보 */}
									<div id="reward-detail-news-up-list" className="news-up-list" data-campaign-id={134520} style={{display: 'none'}} />
									{/* S : 프로젝트 내용 */}
									<div id="introdetails" style={{height: 'auto'}} className="story">
									  <div className="inner-contents fr-view">
										<blockquote className="type-default">
										  <p>단 50초완성,캠핑에서 침대의 쿠션감을 즐겨요 ! &nbsp;라잇트리 드리미소파
											!&nbsp;</p>
										</blockquote>
										<p>" 드리미 소파 + 플라잉판초" 자연속에서의 포근한 휴식으로 안내합니다!</p>
										<p>
										  <img className="fr-fic fr-dib lazyloaded" data-width={808} data-height={451} data-src="https://cdn.wadiz.kr/ft/images/green001/2021/1223/20211223200404797_10.png/wadiz/format/jpg/quality/80/optimize" style={{}} src="https://cdn.wadiz.kr/ft/images/green001/2021/1223/20211223200404797_10.png/wadiz/format/jpg/quality/80/optimize" /><img className="fr-fic fr-dib lazyloaded" data-width={500} data-height={335} data-src="https://cdn.wadiz.kr/ft/images/green001/2021/1223/20211223195954842_34.gif" style={{}} src="https://cdn.wadiz.kr/ft/images/green001/2021/1223/20211223195954842_34.gif" />
										</p>
										<p>50초~1분만에 나만의 에어소파 완성 ! 30cm의 작았던 드리미소파가 가로 약1m로
										  순십간에 커지시는거 보이시나요?&nbsp;</p>
										<p>
										  <br />
										</p>
										<p>
										  <img data-fr-image-pasted="true" data-width={650} data-height={682} className="fr-fic fr-dib lazyloaded" data-src="https://cdn.wadiz.kr/ft/images/green001/2021/1130/20211130201456154_11.gif" style={{}} src="https://cdn.wadiz.kr/ft/images/green001/2021/1130/20211130201456154_11.gif" />폭신하고
										  따듯하니까 다양한 자세로 기대고,쉬고,눕고 즐길 수 있어요!
										</p>
									  </div>
									</div>
									{/* E : 프로젝트 내용 */}
								  </div>
								</div>
							  </section>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  );
		}
	  }

export default sub;