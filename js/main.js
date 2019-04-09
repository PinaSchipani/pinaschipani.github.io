var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "MIV% Share of Value"
    },
    legend: {
        cursor: "pointer",
        itemclick: explodePie
    },
    data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{MIV} - {y}%",
        dataPoints: [{
            y: 26, name: "School Aid", exploded: true
        }
            , {
            y: 14.60, name: "Owned Media"
        }
            , {
            y: 0.30, name: "Partners"
        }
            , {
            y: 32.10, name: "Media"
        }
            , {
            y: 49.00, name: "Influencers"
        }
            , {
            y: 4.00, name: "Celebrities"
        }
            , {
            y: 22, name: "Other Local Assistance"
        }
        ]
    }
    ]
}

);
chart.render();
}

function explodePie(e) {
    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    }
    else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();