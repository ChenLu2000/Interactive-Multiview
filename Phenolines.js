// OverView
"data":{
    "values":[
        {"topic":"a", "phenotype":"b", "parent":"c","probability":"d","trend":"e"}
    ]
},
//repeat the layer
"layer":[
    {//Subview 1: Sunburst Chart
        "param":[
            {//show detail infomation
                "name": "showDetail_sun",
                "select": {
                    "type":"point",
                    "field":["phenotype"]
                },
                "on": "mouseover"
            },
            {// fix detail information
                "name": "fixDetail_sun",
                "select":{
                    "type": "point",
                    "field":["phenotype"]
                },
                "on":"click"
            }
        ],
        "transform":{
            "param":[
                "showDetail_sun","fixDetail_sun",
                "showDetail_scatter","fixDetail_scatter",
                "showDetail_list","fixDetail_list",
                "showDetail_search","fixDetail_search"
            ]
        },
        "mark": {"type": "sunburst"},
        "encoding":{
            "parent":"parent",
            "arc":"probability",
            "color":"trend"
        },
    },
    {//scatter plot
        "param":[
            {//show detail infomation
                "name": "showDetail_scatter",
                "select": {
                    "type":"point",
                    "field":["phenotype"]
                },
                "on": "mouseover"
            },
            {// fix detail information
                "name": "fixDetail_scatter",
                "select":{
                    "type": "point",
                    "field":["phenotype"]
                },
                "on":"click"
            }
        ],
        "transform":{
            "param":[
                "showDetail_sun","fixDetail_sun",
                "showDetail_scatter","fixDetail_scatter",
                "showDetail_list","fixDetail_list",
                "showDetail_search","fixDetail_search"
            ]
        },
        "mark": {"type": "circle"},
        "encoding":{
            "x":"trend",
            "y":"probalility",
            "color":"trend"
        },
    },
    {//list
        "param":[
            {//show detail infomation
                "name": "showDetail_list",
                "select": {
                    "type":"point",
                    "field":["phenotype"]
                },
                "on": "mouseover"
            },
            {// fix detail information
                "name": "fixDetail_list",
                "select":{
                     "type": "point",
                    "field":["phenotype"]
                },
                "on":"click"
                }
            ],
            "transform":{
                "param":[
                    "showDetail_sun","fixDetail_sun",
                    "showDetail_scatter","fixDetail_scatter",
                    "showDetail_list","fixDetail_list",
                ]
            },
            "mark": {"type": "text"},
            "encoding":{
                "order":"probility",
                "color":"trend"
            },
        },
]

// detail view
"data":{
    "values":[
        {"topic":"a", "phenotype":"b", "year":"c","probility":"d","attr":"e","value":"f"}
    ]
},
"layers":[
    {//legend
        "mark":"rect",
        "encoding":{
            "x":"topic",
            "y":"attr",
            "color":"value"
        }
    },
    {//line chart  - repeat each topic
        "mark":"line",
        "encoding":{
            "x":"year",
            "y":"probility",
            "color":"trend"
        }
    }
]
//search panel
    {//
        "param":[
            {//show detail infomation
                "name": "showDetail_search",
                "select": {
                    "type":"point",
                    "field":["phenotype"]
                },
                "on": "mouseover"
            },
            {// fix detail information
                "name": "fixDetail_search",
                "select":{
                     "type": "point",
                    "field":["phenotype"]
                },
                "on":"click"
                },
            {//input text
                "name":"search",
                "select"{"type":"point","field":["phenotype"]},
                "on":"keydown"
            }
            ],
            "transform":{
                "param":[
                    "showDetail_sun","fixDetail_sun",
                    "showDetail_scatter","fixDetail_scatter",
                    "showDetail_list","fixDetail_list",
                    "showDetail_search","fixDetail_search",
                ]
            },
            "mark": {"type": "text"},
            "encoding":{
                "color":"trend"
            },
    }

//compare widgets has three widget
{
    "widget":"scatterplot_widget",
    "param":[
        {"name":"fillColor", "on":"click"},
        {"name":"scatter_widget", "on":"click"},
        {"name":"radialChart_widget", "on":"click"},
    ]
}
//rank widget
{
    "widget":"rankWidget",
    "param":[
        {"name":"rankSort", "on":"click"}
    ]
}

//filter widget
{
    "widget":"filterWidget",
    "param":[
        {"name":"filter", "on":"keydown"}
    ]
}

//show and hidge topic widget
{
    "widget":"show_hide",
    "param":[
        {"name":"showHide", "on":"click", "fields":"topic"}
    ]
} 

