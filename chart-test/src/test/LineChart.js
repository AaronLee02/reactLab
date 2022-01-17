import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

    const [ chart, setChart ] = useState({})

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=15"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var apiKey = "coinranking49fd26f347e0f252151679cf833748c243d9c3353575c459"

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])

    var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.price),
            /* data: chart?.coins?.map(x => x.marketCap), */
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)',
                'rgba(255, 128, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(0, 0, 128, 0.2)',
                'rgba(128, 0, 128, 0.2)',
                'rgba(255, 128, 128, 0.2)',
                'rgba(255, 207, 33, 0.2)',
                'rgba(128, 128, 128, 0.2)',
                'rgba(50, 128, 200, 0.2)',
                'rgba(50, 200, 128, 0.2)',
                'rgba(128, 50, 0, 0.2)',
                'rgba(128, 50, 128, 0.2)',
                'rgba(200, 200, 80, 0.2)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 128, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 128, 1)',
                'rgba(128, 0, 128, 1)',
                'rgba(255, 128, 128, 1)',
                'rgba(255, 207, 33, 1)',
                'rgba(128, 128, 128, 1)',
                'rgba(50, 128, 200, 1)',
                'rgba(50, 200, 128, 1)',
                'rgba(128, 50, 0, 1)',
                'rgba(128, 50, 128, 1)',
                'rgba(200, 200, 80, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <div>
            <Line
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default LineChart
