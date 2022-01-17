import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <h1>가상화폐</h1>
        {/* <h1><a href="./MarketCapChart">가상화폐</a></h1> */}
        <select onchange="location.href=this.value">
        <option>------선택하세요-----</option>
        <option value = "http://www.naver.com">현재가</option>
        <option value = '/MarketCapChart'>시가총액</option>
        <option>--------------------------</option>
        <option value = 'localhost'>MOA 페이지로 이동</option>
        </select>
      </header>
    )
}

export default Header


/*

# 2
import React, { useMemo } from "react";
import Select from "react-select";

function Header() {
  const options = useMemo(
    () => [
      { value: './PriceChart', label: "현재가" },
      { value: './MarketCapChart', label: "시가총액" },
    ],
    []
  );
  return (
    <div className="header">
      <h1>가상화폐</h1>
      <Select options={options} />
    </div>
  );
}

export default Header;

*/