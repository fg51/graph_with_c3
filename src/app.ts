/// <reference path = "../typings/index.d.ts" />

let chart = c3.generate({
    bindto: "#chart",
    data: {
        url: "/data.json",
        mimeType: "json",

        type: "line",
        keys: {
            x: "time",
            value: ["velocity", "height"]
        }
    },
    axis: {
        x: {
            tick: {
                values: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
            }
        }
    }
});


