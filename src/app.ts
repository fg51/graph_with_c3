/// <reference path = "../typings/index.d.ts" />

let chart = c3.generate({
    //size: {
    //    height: 800,
    //    width: 600
    //},
    bindto: "#chart",
    data: {
        url: "/data/data.json",
        mimeType: "json",

        type: "line",   //NOTE: chart type
        keys: {
            x: "time",
            value: ["velocity", "height"]   //NOTE: "key name" 
        },
        axes: { //NOTE: "value name": "target axes"
            velocity:"y",
            height:"y2"
        } },
    axis: {
        x: {
            tick: {
                values: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
            }
        },
        y: {
            label: "Height [m]"
        },
        y2: {
            show: true,
            label: "Velocity [m/s]"
        }
    }
});


