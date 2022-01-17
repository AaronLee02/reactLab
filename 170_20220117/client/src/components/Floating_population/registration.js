import React, { Component } from "react";
import { Link } from "react-router-dom";

class registration extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">MOA</a>
            </li>
            <li className="active">펀딩등록</li>
          </ol>




          <form className="wz form Form_form__3ASTU">
            <div className="field Form_field__35I9T required CorporationRegistrationCorpNameField_field__1N1CN">
              <label className="wz label Label_label__3oH0h">카테고리</label>
              <p className="CorporationRegistrationCorpNameField_info__3fSE7">
                서포터들이 관심을 가질만한 카테고리를 1개만 선택하세요.
              </p>
              <div className="wz dropdown outline block Dropdown_dropdown__31dpZ">
                <div
                  className="Dropdown_value__35Inl Dropdown_placeholder__3Wobx"
                  aria-hidden="true"
                >
                  카테고리 선택
                </div>
                <select name="categoryId">
                  <option value disabled>
                    카테고리 선택
                  </option>
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
                  <option value={312}>기부·후원</option>
                </select>
              </div>
            </div>




            <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
              <label className="wz label Label_label__3oH0h">
                프로젝트 제목
              </label>
              <div className="FormikFieldInput_inputContainer__jgofT">
                <div className="wz input right FormikFieldInput_input__3srmA">
                  <input
                    placeholder="제목 입력"
                    maxLength={40}
                    values="[object Object]"
                    errors="[object Object]"
                    touched="[object Object]"
                    submitcount={0}
                    initialvalues="[object Object]"
                    name="title"
                    type="text"
                    defaultValue
                  />
                </div>
                <em className="helper FormikFieldInput_helper__3sJ2a">
                  40자 남음
                </em>
              </div>
            </div>




            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
                  <label className="wz label Label_label__3oH0h">
                    목표 금액
                  </label>
                  <div className="FormikFieldInput_description__2J086">
                    최소 50만 원 ~ 최대 1억 원으로 설정하세요.
                  </div>
                  <div className="FormikFieldInput_inputContainer__jgofT">
                    <div className="wz input right FormikFieldInput_input__3srmA FormikFieldInput_price__3g2tv">
                      <input
                        placeholder="목표 금액 입력"
                        values="[object Object]"
                        errors="[object Object]"
                        touched="[object Object]"
                        submitcount={0}
                        initialvalues="[object Object]"
                        name="targetAmount"
                        type="text"
                        defaultValue
                      />
                    </div>
                    <span
                      className="FormikFieldInput_priceText__cId43"
                      style={{ display: "inline" }}
                    >
                      원
                    </span>
                    <em className="helper FormikFieldInput_helper__3sJ2a" />
                  </div>
                </div>
              </div>
            </div>
            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="FundingBaseInfoImageContainer_container__3SceA">
                  <input
                    name="representativeEncPhotoId"
                    type="hidden"
                    defaultValue
                  />
                  <div className="field Form_field__35I9T required FundingBaseInfoImageField_field__3Wdlo">
                    <div className="FundingBaseInfoImageField_container__2Q_xy">
                      <label className="wz label Label_label__3oH0h">
                        <div className="ToolTipMobile_toolTipContainer__2tYPd">
                          <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">
                            대표 이미지
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="FundingBaseInfoImageField_container__2Q_xy">
                      <button
                        type="button"
                        className="wz button gray large FundingBaseInfoImageField_button__3QHEg"
                      >
                        <i aria-hidden="true" className="icon camera-o" />
                        등록하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            
            
             
            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="field Form_field__35I9T required">
                  <label className="wz label Label_label__3oH0h">
                    프로젝트 종료일
                  </label>
                  <div className="FundingBaseInfoDateField_description__ng5P0">
                    요건・콘텐츠 확인 및 프로젝트 진행 일정과 리워드 발송 일정을
                    함께 고려하여 종료일을 설정해주세요.
                  </div>
                  <div className="FundingBaseInfoDateField_inputWrapper__39AXT">
                    <div className="FundingBaseInfoDateField_input__3g63a">
                      <div className="wz input right FundingBaseInfoDateField_input__3g63a">
                        <input
                          pattern="\d*"
                          name="whenHoldTo"
                          placeholder="예)20120501"
                          maxLength={8}
                          readOnly
                          closeclass="FundingBaseInfoDateField_close__cvANs"
                          type="tel"
                          defaultValue
                        />
                      </div>
                      <button
                        type="button"
                        className="wz button less icon dense FundingBaseInfoDateField_close__cvANs"
                      >
                        <i aria-hidden="true" className="icon close" />
                      </button>
                    </div>
                    <button type="button" className="wz button less icon dense">
                      <i aria-hidden="true" className="icon calendar-o" />
                    </button>
                  </div>  
                </div>
              </div>
            </div>
            
            
             <div className="MouseOverGuide_guideWrapper__28wbb">
                <div className="MouseOverGuide_guide__13NEZ">
                  <h5 className="MouseOverGuide_title__1sJjC" />
                  <div className="MouseOverGuide_content__I9HrE">
                    <div data-role="title">・ 오픈예정(선택)</div>
                    승인 완료 후 오픈예정을 게시할 수 있으며, 이후 예약한 일시에
                    오픈예정이 종료되고 프로젝트가 오픈됩니다.
                    <br />
                    <br />
                    <div data-role="title">・ 오픈~종료</div>
                    승인 완료 후 프로젝트를 오픈할 수 있으며, 평균 30일간
                    진행합니다.
                    <br /> <br />
                  </div>
                </div>
              </div>

            
            
            
            <div className="CorporationRegistrationAdminFieldsContainer_container__17OPi">
              <div className="field Form_field__35I9T required FormFieldInput_field__2r889">
                <label className="wz label FormFieldInput_label__2Ibta Label_label__3oH0h">
                  관리자 명
                </label>
                <div className="FormFieldInput_inputContainer__3rjBp">
                  <div className="wz input right FormFieldInput_input__19Je0">
                    <input
                      name="nickName"
                      disabled
                      placeholder
                      type="text"
                      defaultValue="이진경"
                    />
                  </div>
                </div>
              </div>
            </div>




              <div className="field Form_field__35I9T required FormFieldInput_field__2r889">
                <label className="wz label FormFieldInput_label__2Ibta Label_label__3oH0h">
                  관리자 이메일
                </label>
                <div className="FormFieldInput_inputContainer__3rjBp">
                  <div className="wz input right FormFieldInput_input__19Je0">
                    <input
                      name="userName"
                      disabled
                      placeholder
                      type="text"
                      defaultValue="94tuffhr0202@gmail.com"
                    />
                  </div>
                  <em className="helper FormFieldInput_helper__3AfGh">
                    관리자명과 이메일 주소는 로그인 아이디와 연동되어 있으므로
                    변경을 원할 경우 회원 정보 설정에서 변경하세요.
                  </em>
                </div>
              </div>
              
              
              
              
              <div className="field Form_field__35I9T required CorporationRegistrationAdminMobileField_field__1S21G">
                <label className="wz label Label_label__3oH0h">
                  관리자 휴대폰 번호
                </label>
                <div className="CorporationRegistrationAdminMobileField_inputWrapper__3jmcw">
                  <div className="wz input right CorporationRegistrationAdminMobileField_input__319MK">
                    <input
                      placeholder
                      type="text"
                      defaultValue={"01079224332"}
                      readOnly
                    />
                  </div>
                </div>
                <em className="helper success">인증을 완료한 회원입니다.</em>
              </div>
              
              
              
              
              <div className="MouseOverGuide_container__3jDBz">
                <div className="MouseOverGuide_contents__APrXG">
                  <div className="StorySummaryField_container__1Ld4C">
                    <div className="field Form_field__35I9T FormFieldTextarea_field__33Ncu">
                      <div className="wide column-2 field Form_field__35I9T required">
                        <label className="wz label Label_label__3oH0h">
                          상세페이지 내용
                        </label>
                      </div>
                      <div className="wide column-4">
                        <div className="wz input">
                          <grammarly-extension
                            data-grammarly-shadow-root="true"
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              pointerEvents: "none",
                            }}
                            className="cGcvT"
                          />
                          <grammarly-extension
                            data-grammarly-shadow-root="true"
                            style={{
                              mixBlendMode: "darken",
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              pointerEvents: "none",
                            }}
                            className="cGcvT"
                          />
                          <textarea
                            placeholder="내용 입력"
                            helper="[object Object]"
                            maxLength={100}
                            name="storyInfo.coreMessage"
                            description="프로젝트 페이지 상단 및 지지서명 시 노출됩니다."
                            rows={3}
                            spellCheck="false"
                            defaultValue={"이거 아주 좋아 너무 너무 됴아 ㅎㅎ"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="field Form_field__35I9T required ImageFormField_field__X1jTW StoryImageField_field__2BLTd">
                <div className="ImageFormField_buttonWrapper__su3pO field Form_field__35I9T required">
                  <label className="wz label Label_label__3oH0h">
                    상세페이지 사진 등록
                  </label>
                  <label className="wz label ImageFileButton_label__3thB2 Label_label__3oH0h">
                    <button
                      type="button"
                      className="wz button gray ImageFileButton_button__3gAHD"
                    >
                      <i aria-hidden="true" className="icon camera-o" />
                        등록하기
                    </button>




{/*                     <div className="wz input right ImageFileButton_input__1Dnch">
                      <input
                        accept="image/JPEG,image/JPG,image/GIF,image/PNG"
                        name="uploadFile"
                        placeholder
                        type="file"
                        defaultValue
                      />
                    </div> */}


                    
                  </label>
                </div>
              </div>

            

 
              <div className="CorporationRegistrationAdminFieldsContainer_checkWrap__2CCAe">
                <label className="wz Checkbox_checkbox__2Dr81 checkbox">
                  <input type="checkbox" name="isAgreeCollection" />
                  <div>(필수) 개인 정보 수집 동의</div>
                </label>
              </div>
              
            
            <div className="CorporationRegistrationContainer_buttonWrapper__2a1lo">
              <button
                type="button"
                disabled
                data-event="studio.reward.maker.registration.start"
                className="wz button primary CorporationRegistrationContainer_button__D8sW6"
              >
                시작하기
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default registration;
