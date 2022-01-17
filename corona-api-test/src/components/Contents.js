// 리액트 후크인 useState에 데이터를 담아서 배열을 관리하고, useEffect를 통해서 fetch api를 사용한다.
// api를 요청하기 위하여 axios 라이브러리와 차트를 보여주기 위하여 chartjs-2를 설치
// ARC(Advanced REST client)에서 api 주소 값을 입력해보면 어떤 api가 사용될 수 있는지 확인할 수 있다.
// 클래스에서 마운트가 되었을 때, 바로 메소드를 실행하는 효과를 주기 위해 useEffect 사용


import React, { useState, useEffect } from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import axios from 'axios'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, LineElement, PointElement } from 'chart.js'

ChartJS.register(
    CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend, ArcElement
)




const Contents = () => {

    const [confirmedData, setConfirmedData] = useState({})
    const [quarantinedData, setQuarantinedData] = useState({})
    const [comparedData, setComparedData] = useState({})


    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr?limit=10");
            makeData(res.data)
        }
        const makeData = (items) => {
            const arr = items.reduce((acc, cur) => {
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                
                const findItem = acc.find(a=> a.year === year && a.month === month);

                if(!findItem){
                    acc.push({year , month , date , confirmed, active, death})
                }

                if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.confirmed = confirmed;
                }

                return acc;
            }, [])

            const labels = arr.map(a=> `${a.month + 1}월`);
            setConfirmedData({
                labels,
                datasets : [
                { 
                    label : "국내 누적 확진자",
                    backgroundColor : "salmon",
                    fill : true, 
                    data : arr.map(a => a.confirmed)
                },
            ]
        });

            setQuarantinedData({
                labels,
                datasets : [
                { 
                    label : "월별 격리자 현황",
                    borderColor : "salmon",
                    fill : false, 
                    data : arr.map(a => a.death)
                },
            ]
        });

            const last = arr[arr.length -1];        

            setComparedData({
                labels : ["확진자" , "사망"],
                datasets : [
                { 
                    label : "누적 확진, 사망 비율",
                    backgroundColor: ["#ff3d67" ,  "#ffc233"],
                    borderColor : ["#ff3d67" ,  "#ffc233"],
                    fill : false, 
                    data : [last.confirmed, last.death]
                },
            ]
        });

    }

        fetchEvents();    
    }, [])

    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
                <div>
                    <Bar
                    data={confirmedData}
                    options = 
                        {
                            { title: { display: true, text: "누적 확진자 추이", fontSize: 12 } },
                            { legend: { display: true, position: "bottom", fontSize: 12 } },
                            { scales: { y: { title: { font: { size: 12 } } } } }
                        }
                    />
                </div>  
                <div>
                    <Line
                    data={quarantinedData}
                    options = 
                        {
                            { title: { display: true, text: "월별 격리자 현황", fontSize: 16 } },
                            { legend: { display: true, position: "bottom"} }
                        }
                    />
                </div>  
                <div>
                    <Doughnut
                    data={comparedData}
                    options = 
                        {
                            { title: { display: true, text: `누적 확진, 사망 (${new Date().getMonth()+1}월)`, fontSize: 16 } },
                            { legend: { display: true, position: "bottom"} }
                        }
                    />
                </div>  
            </div>
        </section>
    )
}

export default Contents