import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class registration extends Component {
    render () {
        return (
          <div>
            <style dangerouslySetInnerHTML={{__html: "\n.fileDrop {\n\twidth: 80%;\n\theight: 100px;\n\tborder: 1px dotted gray;\n\tbackground-color: lightslategrey;\n\tmargin: auto;\n}\n" }} />
            {/* Main content */}
            <section className="container">
              <ol className="breadcrumb">
                <li><a href="index.html">MOA</a></li>
                <li className="active">펀딩등록</li>
              </ol>
              <div className="row">
                {/* left column */}
                <div className="col-md-12">
                  {/* general form elements */}
                  <div className="box box-primary">
                    <div className="box-header" />
                    {/* /.box-header */}
                    <div data-react-modal-body-trap tabIndex={0} style={{position: 'absolute', opacity: 0}} />
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">
                      <div id="AppLayout_Container" className="AppLayout_container__3zbzb">
                        <div className="AppLayout_main__14bCi">
                          <div id="AppLayout_Contents" className="AppLayout_contents__wv3DF">
                            <div id="container" className="ContentsLayout_container__11k-W">
                              <div className="FundingBaseInfo_container__Do6GQ">
                                <div className="HeaderLayout_container__3fXkO">
                                  <div className="HeaderLayout_contents__F4hlC">
                                    <p className="FundingBaseInfo_description__1C9vV">프로젝트를 대표할
                                      주요 기본 정보를 입력하세요.</p>
                                  </div>
                                </div>
                                <form className="wz form FundingBaseInfoFormContainer_form__HsmB- Form_form__3ASTU">
                                  <div className="Loader_loader__d9YUC Form_loader__1YJ5I" />
                                  <div className="MouseOverGuide_container__3jDBz">
                                    <div className="MouseOverGuide_contents__APrXG">
                                      <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
                                        <label className="wz label FormikFieldInput_label__2ri6c Label_label__3oH0h"><div className="ToolTipMobile_toolTipContainer__2tYPd">
                                            <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">프로젝트
                                              제목</div>
                                            <div className="HelpFloating_wrap__1YCQT ToolTipMobile_helpFloating__fNzSX" style={{fontSize: '14px'}}>
                                              <button type="button" title="도움말 보기" className="HelpFloating_button__2m4lw" style={{fontSize: '14px'}}>
                                                <i className="icon help-o" aria-hidden="true" />
                                              </button>
                                              <div className="HelpFloating_message__dbHYV HelpFloating_black__2OrC0" style={{minWidth: '350px'}}>
                                                <div data-role="title">프로젝트 제목은 핵심만 매력적으로!</div>
                                                제품 서비스의 매력 포인트나 프로젝트의 주제가 잘 드러날 수 있는 키워드를 한 가지 이상
                                                포함하는 간결한 제목을 써 주시는 것이 좋습니다.<br />
                                                <br />키워드를 뒤에 작성해 주실 경우 정보 전달이 어려울 수 있으니, 가급적 제목
                                                초반에 써 주세요.<br />
                                                <br />(예시)<br />바지걸이+옷걸이가 하나로! 옷 정리에 1초만 투자하자<br />[8만
                                                원대 국민 무스탕] 가죽으로 26억 펀딩받은 비결?<br />[와디즈 한정] 광화문,
                                                블록으로 재탄생하다!
                                              </div>
                                            </div>
                                          </div></label>
                                        <div className="FormikFieldInput_inputContainer__jgofT">
                                          <div className="wz input right FormikFieldInput_input__3srmA">
                                            <input placeholder="제목 입력" maxLength={40} values="[object Object]" errors="[object Object]" touched="[object Object]" submitcount={0} initialvalues="[object Object]" name="title" type="text" defaultValue />
                                          </div>
                                          <em className="helper FormikFieldInput_helper__3sJ2a">40자
                                            남음</em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="MouseOverGuide_guideWrapper__28wbb">
                                      <div className="MouseOverGuide_guide__13NEZ">
                                        <h5 className="MouseOverGuide_title__1sJjC" />
                                        <div className="MouseOverGuide_content__I9HrE">
                                          <div data-role="title">프로젝트 제목은 핵심만 매력적으로!</div>
                                          제품 서비스의 매력 포인트나 프로젝트의 주제가 잘 드러날 수 있는 키워드를 한 가지 이상 포함하는
                                          간결한 제목을 써 주시는 것이 좋습니다.<br />
                                          <br />키워드를 뒤에 작성해 주실 경우 정보 전달이 어려울 수 있으니, 가급적 제목 초반에
                                          써 주세요.<br />
                                          <br />(예시)<br />바지걸이+옷걸이가 하나로! 옷 정리에 1초만 투자하자<br />[8만
                                          원대 국민 무스탕] 가죽으로 26억 펀딩받은 비결?<br />[와디즈 한정] 광화문, 블록으로
                                          재탄생하다!
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MouseOverGuide_container__3jDBz">
                                    <div className="MouseOverGuide_contents__APrXG">
                                      <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
                                        <label className="wz label FormikFieldInput_label__2ri6c Label_label__3oH0h"><div className="ToolTipMobile_toolTipContainer__2tYPd">
                                            <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">목표
                                              금액</div>
                                            <div className="HelpFloating_wrap__1YCQT ToolTipMobile_helpFloating__fNzSX" style={{fontSize: '14px'}}>
                                              <button type="button" title="도움말 보기" className="HelpFloating_button__2m4lw" style={{fontSize: '14px'}}>
                                                <i className="icon help-o" aria-hidden="true" />
                                              </button>
                                              <div className="HelpFloating_message__dbHYV HelpFloating_black__2OrC0" style={{minWidth: '350px'}}>
                                                <div data-role="title">
                                                  <a href="https://www.wadiz.kr/link/goal" target="blank" rel="nofollow noopener noreferrer">목표
                                                    금액은 너무 낮지도, 너무 높지도 않게!</a>
                                                </div>
                                                마감일 자정 기준으로 목표 금액을 달성해야 프로젝트 성공으로 결제가 진행되니, 리워드 제작 및
                                                배송비, 인건/운영비 등을 고려해서 금액을 설정해 주세요.<br />
                                                <br />고민 없이 목표 금액을 설정할 경우 프로젝트가 실패하거나 성공해도 제품/서비스
                                                제작이 어려울 수 있어요.
                                              </div>
                                            </div>
                                          </div></label>
                                        <div className="FormikFieldInput_description__2J086">최소
                                          50만 원 ~ 최대 1억 원으로 설정하세요.</div>
                                        <div className="FormikFieldInput_inputContainer__jgofT">
                                          <div className="wz input right FormikFieldInput_input__3srmA FormikFieldInput_price__3g2tv">
                                            <input placeholder="목표 금액 입력" values="[object Object]" errors="[object Object]" touched="[object Object]" submitcount={0} initialvalues="[object Object]" name="targetAmount" type="text" defaultValue />
                                          </div>
                                          <span className="FormikFieldInput_priceText__cId43">원</span><em className="helper FormikFieldInput_helper__3sJ2a" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="MouseOverGuide_guideWrapper__28wbb">
                                      <div className="MouseOverGuide_guide__13NEZ">
                                        <h5 className="MouseOverGuide_title__1sJjC" />
                                        <div className="MouseOverGuide_content__I9HrE">
                                          <div data-role="title">
                                            <a href="https://www.wadiz.kr/link/goal" target="blank" rel="nofollow noopener noreferrer">목표 금액은 너무 낮지도,
                                              너무 높지도 않게!</a>
                                          </div>
                                          마감일 자정 기준으로 목표 금액을 달성해야 프로젝트 성공으로 결제가 진행되니, 리워드 제작 및
                                          배송비, 인건/운영비 등을 고려해서 금액을 설정해 주세요.<br />
                                          <br />고민 없이 목표 금액을 설정할 경우 프로젝트가 실패하거나 성공해도 제품/서비스 제작이
                                          어려울 수 있어요.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MouseOverGuide_container__3jDBz">
                                    <div className="MouseOverGuide_contents__APrXG">
                                      <div className="FundingBaseInfoImageContainer_container__3SceA">
                                        <input name="representativeEncPhotoId" type="hidden" defaultValue />
                                        <div className="field Form_field__35I9T required FundingBaseInfoImageField_field__3Wdlo">
                                          <div className="FundingBaseInfoImageField_container__2Q_xy">
                                            <label className="wz label Label_label__3oH0h"><div className="ToolTipMobile_toolTipContainer__2tYPd">
                                                <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">대표
                                                  이미지</div>
                                                <div className="HelpFloating_wrap__1YCQT ToolTipMobile_helpFloating__fNzSX" style={{fontSize: '14px'}}>
                                                  <button type="button" title="도움말 보기" className="HelpFloating_button__2m4lw" style={{fontSize: '14px'}}>
                                                    <i className="icon help-o" aria-hidden="true" />
                                                  </button>
                                                  <div className="HelpFloating_message__dbHYV HelpFloating_black__2OrC0" style={{minWidth: '350px'}}>
                                                    <div>
                                                      <div data-role="title">
                                                        <a href="https://www.wadiz.kr/web/wcast/detail/6668" target="blank" rel="nofollow noopener noreferrer">클릭할 수밖에
                                                          없는 매력적인 이미지 만들기</a>
                                                      </div>
                                                      프로젝트의 첫인상인 대표 이미지는 프로젝트 주제에 따라 리워드가 가장 매력적으로 보이는
                                                      사진을 선택해 주세요.<br />
                                                      <br />SNS 노출 시 이미지가 1:1 비율로 보일 수 있으므로 이미지 내 좌우
                                                      여백이 충분하고 리워드가 중앙에 위치한 사진을 선택해 주세요.<br />
                                                      <br />이미지 내 텍스트와 로고는 사용을 지양해 주세요.
                                                    </div>
                                                  </div>
                                                </div>
                                              </div></label>
                                          </div>
                                          <div className="FundingBaseInfoImageField_container__2Q_xy">
                                            <button type="button" className="wz button gray large FundingBaseInfoImageField_button__3QHEg">
                                              <i aria-hidden="true" className="icon camera-o" />등록하기
                                            </button>
                                            <em className="helper error" /><em className="helper FundingBaseInfoImageField_helper__1jZUw">3MB
                                              이하의 JPEG, PNG 파일</em><em className="helper FundingBaseInfoImageField_helper__1jZUw">해상도
                                              1200x675 픽셀 이상</em><em className="helper FundingBaseInfoImageField_helper__1jZUw">텍스트
                                              및 로고 삽입 금지</em>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="MouseOverGuide_guideWrapper__28wbb">
                                      <div className="MouseOverGuide_guide__13NEZ">
                                        <h5 className="MouseOverGuide_title__1sJjC" />
                                        <div className="MouseOverGuide_content__I9HrE">
                                          <div>
                                            <div data-role="title">
                                              <a href="https://www.wadiz.kr/web/wcast/detail/6668" target="blank" rel="nofollow noopener noreferrer">클릭할
                                                수밖에 없는 매력적인 이미지 만들기</a>
                                            </div>
                                            프로젝트의 첫인상인 대표 이미지는 프로젝트 주제에 따라 리워드가 가장 매력적으로 보이는 사진을
                                            선택해 주세요.<br />
                                            <br />SNS 노출 시 이미지가 1:1 비율로 보일 수 있으므로 이미지 내 좌우 여백이
                                            충분하고 리워드가 중앙에 위치한 사진을 선택해 주세요.<br />
                                            <br />이미지 내 텍스트와 로고는 사용을 지양해 주세요.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MouseOverGuide_container__3jDBz">
                                    <div className="MouseOverGuide_contents__APrXG">
                                      <div className="field Form_field__35I9T required FormikFieldDropdown_field__sT10O">
                                        <label className="wz label FormikFieldDropdown_label__3g5jL Label_label__3oH0h"><div className="ToolTipMobile_toolTipContainer__2tYPd">
                                            <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">카테고리</div>
                                            <div className="HelpFloating_wrap__1YCQT ToolTipMobile_helpFloating__fNzSX" style={{fontSize: '14px'}}>
                                              <button type="button" title="도움말 보기" className="HelpFloating_button__2m4lw" style={{fontSize: '14px'}}>
                                                <i className="icon help-o" aria-hidden="true" />
                                              </button>
                                              <div className="HelpFloating_message__dbHYV HelpFloating_black__2OrC0" style={{minWidth: '350px'}}>
                                                <div data-role="title">어떤 서포터를 만나고 싶으세요?</div>
                                                프로젝트 펀딩할 서포터들이 관심을 가질만한 카테고리를 1개만 선택해주세요.<br />
                                                <br />(예시) 반려동물 정수기 : 테크·가전 or 반려동물 or 홈리빙
                                              </div>
                                            </div>
                                          </div></label>
                                        <div>
                                          <div className="wz dropdown outline block FormikFieldDropdown_dropdown__3HZEn Dropdown_dropdown__31dpZ">
                                            <div className="Dropdown_value__35Inl" aria-hidden="true">테크·가전</div>
                                            <select name="categoryId"><option value disabled>카테고리 선택</option>
                                              <option value={287}>테크·가전</option>
                                              <option value={288}>패션·잡화</option>
                                              <option value={311}>뷰티</option>
                                              <option value={289}>푸드</option>
                                              <option value={310}>홈·리빙</option>
                                              <option value={296}>여행·레저</option>
                                              <option value={297}>스포츠·모빌리티</option>
                                              <option value={290}>캐릭터·굿즈</option>
                                              <option value={309}>베이비·키즈</option>
                                              <option value={308}>반려동물</option>
                                              <option value={292}>게임·취미</option>
                                              <option value={294}>컬쳐·아티스트</option>
                                              <option value={316}>클래스·컨설팅</option>
                                              <option value={293}>출판</option>
                                              <option value={295}>소셜·캠페인</option>
                                              <option value={312}>기부·후원</option>
                                              <option value={313}>모임</option></select>
                                          </div>
                                          <em className="helper FormikFieldDropdown_helper__kNOI9" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="MouseOverGuide_guideWrapper__28wbb">
                                      <div className="MouseOverGuide_guide__13NEZ">
                                        <h5 className="MouseOverGuide_title__1sJjC" />
                                        <div className="MouseOverGuide_content__I9HrE">
                                          <div data-role="title">어떤 서포터를 만나고 싶으세요?</div>
                                          프로젝트 펀딩할 서포터들이 관심을 가질만한 카테고리를 1개만 선택해주세요.<br />
                                          <br />(예시) 반려동물 정수기 : 테크·가전 or 반려동물 or 홈리빙
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MouseOverGuide_container__3jDBz">
                                    <div className="MouseOverGuide_contents__APrXG">
                                      <div className="field Form_field__35I9T required">
                                        <label className="wz label Label_label__3oH0h"><div className="ToolTipMobile_toolTipContainer__2tYPd">
                                            <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">프로젝트
                                              종료일</div>
                                            <div className="HelpFloating_wrap__1YCQT ToolTipMobile_helpFloating__fNzSX" style={{fontSize: '14px'}}>
                                              <button type="button" title="도움말 보기" className="HelpFloating_button__2m4lw" style={{fontSize: '14px'}}>
                                                <i className="icon help-o" aria-hidden="true" />
                                              </button>
                                              <div className="HelpFloating_message__dbHYV HelpFloating_black__2OrC0" style={{minWidth: '350px'}}>
                                                <div data-role="title">・ 요건확인・콘텐츠확인</div>
                                                모든 확인이 완료된 후 프로젝트 오픈이 가능하며 프로젝트 특성 및 완성도에 따라 소요 일정이
                                                다를 수 있습니다.<br />
                                                <br />
                                                <div data-role="title">・ 오픈예정(선택)</div>
                                                승인 완료 후 오픈예정을 게시할 수 있으며, 이후 예약한 일시에 오픈예정이 종료되고 프로젝트가
                                                오픈됩니다.<br />
                                                <br />
                                                <div data-role="title">・ 오픈~종료</div>
                                                승인 완료 후 프로젝트를 오픈할 수 있으며, 평균 30일간 진행합니다.<br />
                                                <br />
                                                <div data-role="title">・ 리워드 발송</div>
                                                종료일 기준으로 11개월 이내 리워드 발송을 시작해야 합니다.<br />
                                                <br />
                                                <a href="https://www.notion.so/5146a41dc414407c86c069f39ad0eaab" target="_blank" rel="nofollow noopener noreferrer">자세히
                                                  알아보기</a>
                                              </div>
                                            </div>
                                          </div></label>
                                        <div className="FundingBaseInfoDateField_description__ng5P0">요건・콘텐츠
                                          확인 및 프로젝트 진행 일정과 리워드 발송 일정을 함께 고려하여 종료일을 설정해주세요.</div>
                                        <div className="FundingBaseInfoDateField_inputWrapper__39AXT">
                                          <div className="FundingBaseInfoDateField_input__3g63a">
                                            <div className="wz input right FundingBaseInfoDateField_input__3g63a">
                                              <input pattern="\d*" name="whenHoldTo" placeholder="예)20120501" maxLength={8} readOnly closeclass="FundingBaseInfoDateField_close__cvANs" type="tel" defaultValue />
                                            </div>
                                            <button type="button" className="wz button less icon dense FundingBaseInfoDateField_close__cvANs">
                                              <i aria-hidden="true" className="icon close" />
                                            </button>
                                          </div>
                                          <button type="button" className="wz button less icon dense">
                                            <i aria-hidden="true" className="icon calendar-o" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="MouseOverGuide_guideWrapper__28wbb">
                                      <div className="MouseOverGuide_guide__13NEZ">
                                        <h5 className="MouseOverGuide_title__1sJjC" />
                                        <div className="MouseOverGuide_content__I9HrE">
                                          <div data-role="title">・ 요건확인・콘텐츠확인</div>
                                          모든 확인이 완료된 후 프로젝트 오픈이 가능하며 프로젝트 특성 및 완성도에 따라 소요 일정이 다를 수
                                          있습니다.<br />
                                          <br />
                                          <div data-role="title">・ 오픈예정(선택)</div>
                                          승인 완료 후 오픈예정을 게시할 수 있으며, 이후 예약한 일시에 오픈예정이 종료되고 프로젝트가
                                          오픈됩니다.<br />
                                          <br />
                                          <div data-role="title">・ 오픈~종료</div>
                                          승인 완료 후 프로젝트를 오픈할 수 있으며, 평균 30일간 진행합니다.<br />
                                          <br />
                                          <div data-role="title">・ 리워드 발송</div>
                                          종료일 기준으로 11개월 이내 리워드 발송을 시작해야 합니다.<br />
                                          <br />
                                          <a href="https://www.notion.so/5146a41dc414407c86c069f39ad0eaab" target="_blank" rel="nofollow noopener noreferrer">자세히
                                            알아보기</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                <div className="FundingBaseInfo_btnWrapper__3J9jG">
                                  <button type="button" className="wz button primary">저장하기</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Toast_toast__1b_B2">
                        <div className="Toast_content__G-bTq" />
                      </div>
                    </div>
                    <noscript>
                      &lt;iframe
                      src="https://www.googletagmanager.com/ns.html?id=GTM-NDMQ9N4"
                      height="0" width="0" style="display: none; visibility: hidden"&gt;&lt;/iframe&gt;
                    </noscript>
                    <div data-react-modal-body-trap tabIndex={0} style={{position: 'absolute', opacity: 0}} />
                    <style dangerouslySetInnerHTML={{__html: "\n.ab-iam-root.v3 {\n\tz-index: 9999;\n}\n" }} />
                    <div id="ch-plugin">
                      <div id="ch-plugin-core">
                        <style data-styled="active" data-styled-version="5.1.1" dangerouslySetInnerHTML={{__html: "" }} />
                        <div data-ch-testid="launcher" className="Launcherstyled__Wrapper-oef45p-0 gplWoF" style={{}}>
                          <div id="ch-plugin-launcher" className="Launcherstyled__ImageWrapper-oef45p-3 ikezY">
                            <img src="https://cf.channel.io/pub-file/22503/5fd6fd874e7f9156515f/group-4-copy.png" width={60} height={60} className="Launcherstyled__Image-oef45p-4 hhvnia" />
                            <div data-ch-testid="badge" hidden className="Badgestyled__Badge-sc-1ztqq4-0 Launcherstyled__Badge-oef45p-5 dEGbnR">0</div>
                          </div>
                        </div>
                      </div>
                      <div id="ch-plugin-script" style={{display: 'none'}} className="ch-messenger-hidden">
                        <iframe id="ch-plugin-script-iframe" style={{position: 'relative !important', height: '100%', width: '100% !important', border: 'none !important'}} />
                      </div>
                    </div>
                    <div id="wp_tg_cts" style={{display: 'none'}}>
                    </div>
                    <div style={{display: 'none', visibility: 'hidden'}}>
                    </div>
                    <div style={{display: 'none', visibility: 'hidden'}}>
                    </div>
                    <div style={{display: 'none', visibility: 'hidden'}}>
                    </div>
                    <div id="adn_container" style={{display: 'none'}} />
                    <iframe src="https://asia.creativecdn.com/tags?type=iframe&id=pr_zYkMXedNbZpB0E00dQEx&id=pr_zYkMXedNbZpB0E00dQEx_lid_UbdL8C8O1c4kLy4V3jum&su=https%3A%2F%2Fwww.wadiz.kr%2Fstudio%2Freward%2F137636%2Ffunding%2FbaseInfo&sr=https%3A%2F%2Fwww.wadiz.kr%2Fstudio%2Fcorporation%2FrewardRegistration&ts=1640845365832" width={1} height={1} scrolling="no" frameBorder={0} style={{display: 'none'}} referrerPolicy="no-referrer-when-downgrade" />
                    <style data-styled="active" data-styled-version="5.1.1" dangerouslySetInnerHTML={{__html: "" }} />
                    <img width={0} height={0} src="//itg.realclick.co.kr/dsp_tk/tk_roi_v2.js?user_cookie=MTIyLjQ2LjQxLjI0OHwxNTkxNjczMDc4fDE5MTQ=&user_domain=www.wadiz.kr&tk_info=RFozZDJGa2FYb3x8MjAyMTEyMzAxNTIyNDRfMzk4MXx8TVRJeUxqUTJMalF4TGpJME9Id3hOVGt4Tmpjek1EYzRmREU1TVRRPXwxNjQwODQ1MzY0fDEyMi40Ni4zNC4xMzV8" style={{display: 'none'}} />
                    <div className="ReactModalPortal" />
                    <div className="ReactModalPortal" />
                    <div id="criteo-tags-div" style={{display: 'none'}} />
                  </div></div></div></section></div>
        );
      }
    }
export default registration;