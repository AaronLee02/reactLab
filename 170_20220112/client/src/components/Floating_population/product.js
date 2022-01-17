import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class product extends Component {
    render () {
        return (
            
      <div className="product-model">
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="index.html">MOA</a></li>
          <li className="active">펀딩하기</li>
        </ol>
        <div className="RewardCategoryCircleList_container__1GDge">
          <div className="CategoryCircleList_container__3fAVd">
            {/* <button
                  class="CategoryCircleList_previous__xJMxg CategoryCircleList_hidden__2fdvp"
                  type="button" data-dir="이전">
                  <i class="icon chevron-left CategoryCircleList_icon__13sH8"
                      aria-hidden="true"></i>
              </button>  */}
            <div className="CategoryCircleList_wrap__3jHrp">
              <div className="CategoryCircleList_list__2YBF3">
                <a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_287.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">테크·가전</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_288.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">패션·잡화</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_311.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">뷰티</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_289.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">푸드</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_310.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">홈·리빙</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_296.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">여행·레저</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_297.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">스포츠·모빌리티</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_character.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">캐릭터·굿즈</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_309.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">베이비·키즈</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_308.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">반려동물</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_292.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">게임·취미</span></span></a><a className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT" href="#"><span className="CategoryCircle_container__2rZ3a"><span className="CategoryCircle_circle__3khwj" style={{backgroundImage: 'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_312.jpg")'}} /><span className="CategoryCircle_name__3Ca9T">기부·후원</span></span></a>
              </div>
            </div>
            {/* <button class="CategoryCircleList_next__1mHyX" type="button"
                  data-dir="다음">
                  <i class="icon chevron-right CategoryCircleList_icon__13sH8"
                      aria-hidden="true"></i>
              </button>  */}
          </div>
        </div>
        <div className="RewardProjectListApp_container__1ZYeD">
          <div className="ProjectListHead_container__rpQ37 RewardProjectListHead_container__2FzIj">
            <div className="ProjectListHead_bar__2dyHz">
              <div className="SortingSelect_container__3voSC ProjectListHead_sorting__2n1WY RewardProjectListHead_fundingSorting__2n0MF">
                전체<i className="icon expand-more SortingSelect_icon__khE3_" aria-hidden="true" /><select name="status" className="SortingSelect_select__23ANT"><option value="ALL">전체</option>
                  <option value="N">진행중</option>
                  <option value="Y">종료된</option></select>
              </div>
              <div className="SortingSelect_container__3voSC ProjectListHead_sorting__2n1WY">
                추천순<i className="icon expand-more SortingSelect_icon__khE3_" aria-hidden="true" /><select name="order" className="SortingSelect_select__23ANT"><option value="recommend">추천순</option>
                  <option value="popular">인기순</option>
                  <option value="amount">펀딩액순</option>
                  <option value="closing">마감임박순</option>
                  <option value="recent">최신순</option>
                  <option value="support">응원참여자순</option></select>
              </div>
              <div className="ProjectListHead_children__2Y7-F" />
              <button className="ProjectListHead_cardType__2_YL4" />
            </div>
            <div className="ProjectListHead_children__2Y7-F" />
          </div>
          <div className="ProjectCardList_container__3Y14k">
            <div className="ProjectCardList_list__1YBa2">
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn1.wadiz.kr/images/20211229/1640755715127.jpg/wadiz/optimize")'}} />
                        <div className="banner_adBadge__2iyux">AD</div>
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>[누적2816%] 씹으면 톡-터지는 햇빛 에너지, 업그레이드로 돌아왔어요</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">푸드</span><span className="RewardProjectCard_makerName__2q4oH">(주)홀리트리</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">541%</span><span className="RewardProjectCard_amount__2AyJF">2,708,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">13일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1215/20211215133659521_134945.png/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>[캐릭캐릭체인지]또 다른 나를 찾아줄 수호알 쿠션, 험프티 덤프티 쥬얼리</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">캐릭터·굿즈</span><span className="RewardProjectCard_makerName__2q4oH">올보이스(주)</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '58%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">58%</span><span className="RewardProjectCard_amount__2AyJF">29,172,100원</span><span className="RewardProjectCard_days__3eece"><span className="RewardProjectCard_remainingDay__2TqyN">25일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1125/20211125164845653_135171.png/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>글로벌3억 | 포터블 면도기의 끝판왕 ERAZOR with 세라믹블레이드</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">테크·가전</span><span className="RewardProjectCard_makerName__2q4oH">bluessom</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">2474%</span><span className="RewardProjectCard_amount__2AyJF">24,747,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">20일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn1.wadiz.kr/images/20211215/1639545896453.jpg/wadiz/optimize")'}} />
                        <div className="banner_adBadge__2iyux">AD</div>
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>임상확인| 닦아내기만 했는데 모공개선 95%? 무자극 클렌징패드</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">뷰티</span><span className="RewardProjectCard_makerName__2q4oH">(주)바를참스킨</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">2140%</span><span className="RewardProjectCard_amount__2AyJF">10,702,400원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">4일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1222/20211222191718665_130715.jpg/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>더 완벽해져 돌아온 헤리티지 사첼ㅣ노트북수납까지 거뜬히 클래식하게</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">패션·잡화</span><span className="RewardProjectCard_makerName__2q4oH">헤리티지프로젝트</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">4801%</span><span className="RewardProjectCard_amount__2AyJF">24,007,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">21일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1215/20211215160719866_111414.png/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>[크래프터 50주년 한정판]그 감동 그대로: 올드 성음기타 복각 프로젝트</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">컬쳐·아티스트</span><span className="RewardProjectCard_makerName__2q4oH">크래프터 코리아</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">1194%</span><span className="RewardProjectCard_amount__2AyJF">119,424,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">60일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn1.wadiz.kr/images/20211229/1640763193090.png/wadiz/optimize")'}} />
                        <div className="banner_adBadge__2iyux">AD</div>
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>225W 괴물흡입력! 강력하고 힘쎈 믿을 만한 '샤크 청소기' </strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">테크·가전</span><span className="RewardProjectCard_makerName__2q4oH">주식회사
                              마이하우스</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">837%</span><span className="RewardProjectCard_amount__2AyJF">8,379,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">11일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1209/20211209115432692_130188.jpg/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>[업그레이드펀딩] 2배 더 강력해진 코팅력! 더 견고해진 러라밸 구이바다</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">여행·레저</span><span className="RewardProjectCard_makerName__2q4oH">러브앤라이프밸런스</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">3192%</span><span className="RewardProjectCard_amount__2AyJF">15,960,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">18일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProjectCardList_item__1owJa">
                <div>
                  <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                    <a href="/sub" className="CardLink_link__1k83H CommonCard_image__vaqkf" aria-hidden="true" tabIndex={-1}><div className="CommonCard_rect__2wpm4">
                        <span className="CommonCard_background__3toTR CommonCard_visible__ABkYx" style={{backgroundImage: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1207/20211207200456648_135075.png/wadiz/format/jpg/quality/80/optimize")'}} />
                      </div></a>
                    <div className="CommonCard_info__1f4kq">
                      <div className="RewardProjectCard_info__3JFub">
                        <div className="RewardProjectCard_infoTop__3QR5w">
                          <a href="/sub" className="CardLink_link__1k83H"><p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                              <strong>[쫀뜩 어른이 애착인형]히피 바디필로우, 24시간 우리 마음을 지켜줘!</strong>
                            </p></a>
                          <div>
                            <span className="RewardProjectCard_category__2muXk">캐릭터·굿즈</span><span className="RewardProjectCard_makerName__2q4oH">스튜디오오리진</span>
                          </div>
                        </div>
                        <div className="RewardProjectCard_gauge__3p9US">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="RewardProjectCard_percent__3TW4_">445%</span><span className="RewardProjectCard_amount__2AyJF">4,451,000원</span><span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu"><span className="RewardProjectCard_remainingDay__2TqyN">39일</span><span className="RewardProjectCard_remainingDayText__2sRLV">남음</span><span className="RewardProjectCard_isAchieve__1LcUu" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="ProjectListMoreButton_container__1JFxX ProjectCardList_more__3AbzT">
                <button type="button" className="ProjectListMoreButton_button__27eTb">
                  더보기<i className="icon expand-more" aria-hidden="true" />
                </button>
                <div className="wz-loader ProjectListMoreButton_loader__1Kcvt" />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="rsidebar span_1_of_left">
               <section  class="sky-form">
                   <div class="product_right">
                       <h4 class="m_2"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Categories</h4>
                       <div class="tab1">
                           <ul class="place">								
                               <li class="sort">Fashion</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Gifts</p></a>
                                  <a href="#"><p>Flowers</p></a>
                                  <a href="#"><p>Shoes</p></a>
                                  <a href="#"><p>Suits</p></a>
                                  <a href="#"><p>Dresses</p></a>
                           </div>
                        </div>						  
                        <div class="tab2">
                           <ul class="place">								
                               <li class="sort">Women Ethnic Wear</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Sarees & More</p></a>
                                  <a href="#"><p>Salwar Suits</p></a>									
                           </div>
                        </div>
                        <div class="tab3">
                           <ul class="place">								
                               <li class="sort">Personal Care</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Make Up</p></a>
                           </div>
                        </div>
                        <div class="tab4">
                           <ul class="place">								
                               <li class="sort">Jewellery</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Fashion</p></a>
                                  <a href="#"><p>Precious</p></a>
                                  <a href="#"><p>1 Gram Gold</p></a>
                           </div>
                        </div>
                        <div class="tab5">
                           <ul class="place">								
                               <li class="sort">Specials</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Cakes</p></a>
                                  <a href="#"><p>Party Items</p></a>
                                  <a href="#"><p></p></a>
                                  <a href="#"><p>Relax Chairs</p></a>
                           </div>
                        </div>
                        
                        script
                      
                      script					 
               </section>
               <section  href="/resources/css/form.css"  type="sky-form">
                   <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>DISCOUNTS</h4>
                   <div class="row row1 scroll-pane">
                       <div class="col col-4">
                              <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Upto - 10% (20)</label>
                       </div>
                       <div class="col col-4">
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>40% - 50% (5)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30% - 20% (7)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>10% - 5% (2)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other(50)</label>
                       </div>
                   </div>
               </section> 				 				 
                 <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Price</h4>
                          <ul class="dropdown-menu1">
                               <li><a href="">								               
                              <div id="slider-range"></div>							
                              <input type="text" id="amount" style="border: 0; font-weight: NORMAL;   font-family: 'Arimo', sans-serif;" />
                           </a></li>			
                        </ul>
                 </section>
                
                   
                   <link rel="stylesheet" type="text/css" href="/resources/css/jquery-ui.css">
                  
                  
                   <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Type</h4>
                          <div class="row row1 scroll-pane">
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>1 Gram Gold (30)</label>
                              </div>
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Gold Plated   (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Platinum      (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Silver        (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Jewellery Sets  (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Stone Items   (30)</label>
                              </div>
                          </div>
                 </section>
                         <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Brand</h4>
                          <div class="row row1 scroll-pane">
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Akasana Collectio</label>
                              </div>
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Colori</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Crafts Hub</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Jisha</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Karatcart</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>Titan</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Amuktaa</label>
                              </div>
                          </div>
                 </section>			
           </div>	 */}
      </div>
    </div>
  );
}
}

export default product;