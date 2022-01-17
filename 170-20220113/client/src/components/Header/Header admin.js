import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return(
            <header>
                <div className="top_bg">
                    <div className="container">
                        <div className="header_top-sec">
                            <div className="top_left">
                                <ul classNameName="hd_top">
                                    <li className="top_link"><Link to={'/LoginForm'}>로그인</Link></li>
                                    <li className="top_link"><Link to={'/register'}>회원가입</Link></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="header-top">
                    <div className="header-bottom">
                        <div className="container">
                            <div className="logo">
                                <Link to={'/'}><h1>MOA</h1></Link>
                            </div>
                            <div className="top-nav">
                                <ul className="memenu skyblue">
                                    <li className="grid"><Link to={'/product'}>펀딩하기</Link></li>
                                    <li className="grid"><Link to={'/registration'}>펀딩등록</Link></li>
                                    <li className="grid"><Link to={'/event'}>이벤트</Link></li>
                                    <li className="grid"><Link to={'/SoftwareList'}>게시판</Link></li>
                                    <li className="grid"><Link to={'/data'}>데이터</Link></li>
                                    <li className="grid"><Link to={'/MarketCapChart'}>그래프</Link></li>
                                    <li className="grid"><Link to={'/MarketCapChart'}>지도</Link></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;