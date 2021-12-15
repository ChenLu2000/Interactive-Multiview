// Network view
// Subview 1: graph
"data": {
    "values": [
        { "NodeID": "a", "NodeLabel": "b", "x_coord": "c", "y_coord": "d" },
        ...
    ]
},
"layer": [
    {   // node layer
        "param": [
            { // show detailed information
                "name": "showTag",
                "select": {"type": "point","field": ["NodeID"]},
                "on": "mouseover"
            },
            { // show a new graph layout with clicked point as center
                "name": "showCentricView",
                "select": {"type": "point","field": ["NodeID"]},
                "on": "doubleclick"
            },
            { // add a streamgraph to the ego-network view
                "name": "addStreamgraph",
                "select": {"type": "point","field": ["NodeID"]},
                "on": "click"
            }
        ]
        "transform": {"param": ["showCentricView", "jitter", "heatmap", "chooseNodeLabel", "hoverStreamgraph"]},
        "mark": { "type": "circle" },
        "encoding": {
            "x": { "field": "x_coord" },"y": { "field": "y_coord" },
            "color": {"field": "NodeLabel"}
        }
    },
    { // edge layer
        "transform": {
            "param": ["showEdgesTemp", "fixEdges"]
        },
        "mark": { "type": "rule" },
        "encoding": {
            "x": { "field": "x_coord" },
            "y": { "field": "y_coord" },
            "x2": { "field": "x_coord_2" },
            "y2": { "field": "y_coord_2" },
            "color": "grey"
        }
    },
    { // tag layer
        "transform": {
            "param": ["showTag"]
        },
        "mark": { "type": "rect" },
        "encoding": {
            "color": "event_types",
        }
    }
]
// Subview 2: timeline
{
    "data": {
        "values": [
            { "Time": "a" },
            ...
        ]
    },
    "param": [
        { // show edge layer temporally and highlight time point
            "name": "showEdgesTemp",
            "select": {"type": "point","field": ["Time"]},
            "on": "mouseover"
        },
        { // fix edge layer
            "name": "fixEdges",
            "select": {"type": "point","field": ["Time"]},
            "on": "click"
        }
    ]
    "transform": {
        "param": ["showEdgesTemp", "hoverStreamgraph","showEdgesTemp","fixEdges"]
    },
    "mark": { "type": "circle" },
    "encoding": {
        "color": {"field": "NodeLabel"}
    }
}
// Subview 3: widgets
{
    "widget": "Jitter",
        "param": [
            {
                "name": "jitter",
                "on": "click"
            },
        ]
},
{
    "widget": "Heatmap",
        "param": [
            {
                "name": "heatmap",
                "on": "click"
            },
        ]
}

// Ego-Network View
// Subview 1: legend
{
    "widget": "Legend",
    "param": [
        {
            "name": "chooseNodeLabel",
            "select":{
                "type": "point",
                "fields": ["nodeLabel"],
                "on": "mouseover"
            }
        },
    ]
}
// Subview 2: timeline
{
    "data": {
        "values": [
            { "Time": "a" },
            ...
        ]
    },
    "transform":{"param":["hoverStreamgraph"]}
    "mark": { "type": "circle" },
    "encoding": {
        "color": {"field": "NodeLabel"}
    }
}
// Subview 3: streamgraph
{
    "data": {
        "values": [
            { "Time": "a", "Frequency": "b" },
            ...
        ]
    },
    "param": {
        "name": "hoverStreamgraph",
            "select": {
                "type": "point",
                "field": ["Time", "nodeID"]
            },
        "on": "mouseover"
    },
    "transform": {
        "filter": {
            "param": "chooseNodeLabel"
        }
        "param": ["hoverStreamgraph","showCentricView","selectItem"]
    }
    "mark": "area",
        "encoding": {
        "x": {"timeUnit": "monthdate","field": "Time"},
        "y": {"aggregate": "sum","field": "Frequency"},
        "color": {"field": "nodeLabel"}
    }
}

// Event Type View
{
    "data":{
        "values": [
            { "eventType": "a", "min":"b", "max":"c" },
            ...
        ]
    },
    "param":[
        {
            "name":"creatEventType"
            "select":{
                "type": "point",
                "field": "eventType",
                "on": "rightclick"
            }
        },
        {
            "name":"removeEventType"
            "select":{
                "type": "point",
                "field": "eventType",
                "on": "doubleclick"
            }
        }
    ],
    "transform":{
        "param": ["creatEventType","removeEventType","add"]
    },
    "mark":"circle"
    "encoding":{
        "color": {
            "field": ["eventType", "min", "max"]
        }
    }
}

// Event Type Editor View
"layers":[
    {
        "transform":{"param":["creatEventType"]}
        "widget": ["Value Range", "Slope Range"]
        "param": [
            {
                "name": "selectRange",
                "select":{
                    "type": "point",
                    "fields": ["widget"],
                    "on": "click"
                }
            },
        ]
    },
    {
        "transform":{"param":["brush"]}
        "widget": "add"
        "param": [
            {
                "name": "add",
                "on": "click"
            }
        ]
    }
    {
        "data":{
            "values": [
                { "nodeLabel": "a", "Frequency":"b", "Slope":"c"},
                ...
            ]
        },
        "param": [
            {
                "name": "brush",
                "select":{
                    "type": "interval",
                    "fields": ["Frequency"],
                    "on": "brush"
                }
            },
        ],
        "mark":"line",
        "encoding":{
            "x":{"field":"Frequency"},
            "y":{"field":"Slope"}
        },
        "transform":{
            "param":["brush"]
        }
    }
]


// Table
{
    "data":{
        "values": [
            { "nodeID":"a", "nodeLabel": "b", "Events":"c"},
            ...
        ]
    },
    "param": [
        {
            "name": "selectItem",
            "select":{
                "type": "point",
                "fields": ["NodeID"],
                "on": "click"
            }
        },
    ],
    "transform":["selectItem","addStreamgraph"]
}