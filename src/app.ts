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
        x: {}
    }
});


