const graph_config = {
    "height": window.innerHeight,
    "width": window.innerWidth*0.70,
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0.75,
    "focusZoom": 1,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": false,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": false,
    "panAndZoom": false,
    "staticGraph": false,
    "d3": {
        "alphaTarget": 0.05,
        "gravity": -100,
        "linkLength": 100,
        "linkStrength": 1
    },
    "node": {
        "color": "#d3d3d3",
        "fontColor": "black",
        "fontSize": 8,
        "fontWeight": "normal",
        "highlightColor": "SAME",
        "highlightFontSize": 8,
        "highlightFontWeight": "normal",
        "highlightStrokeColor": "SAME",
        "highlightStrokeWidth": "SAME",
        "labelProperty": "id",
        "mouseCursor": "pointer",
        "opacity": 1,
        "renderLabel": true,
        "size": 200,
        "strokeColor": "none",
        "strokeWidth": 1.5,
        "svg": "",
        "symbolType": "circle"
    },
    "link": {
        "color": "#d3d3d3",
        "fontColor": "black",
        "fontSize": 8,
        "fontWeight": "normal",
        "highlightColor": "#d3d3d3",
        "highlightFontSize": 8,
        "highlightFontWeight": "normal",
        "labelProperty": "label",
        "mouseCursor": "pointer",
        "opacity": 1,
        "renderLabel": true,
        "semanticStrokeWidth": false,
        "strokeWidth": 1.5
    }
};


export default graph_config;