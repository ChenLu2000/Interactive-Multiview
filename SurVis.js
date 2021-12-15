//selectors widget
{
    "widget":"selectorsWidget",
    "params":{
        "name":"selectorsFilter",
        "field":["year","keyword"],
        "on":"click"
    }
    "transform":{
        "param":["filterByTime","filterKeywordByKeywords","filterKeywordByDetail"]
    }
}

//Timeline view
{
    "param":{
        "name":"filterByTime",
        "field":"time",
        "on":"click"
    },
    "transform":{
        "param":["filterByTime","filterKeywordByKeywords","filterKeywordByDetail"]
    }
    "mark":"rect",
    "encoding":{
        "x":"time",
        "y":"publications",
        "color":"count"
    }
}

//Keywords view
{
    "param":{
        "name":"filterKeywordByKeywords",
        "field":"keyword",
        "on":"click"
    },
    "transform":{
        "param":["filterByTime","filterKeywordByKeywords","filterKeywordByDetail"]
    },
    "mark":"text",
    "encoding":{
        "size":"publications"
    }
}
//detail view
{
    "param":{
        "name":"filterKeywordsByDetail",
        "field":"keyword",
        "on":"click"
    },
    "transform":{
        "param":["filterByTime","filterKeywordByKeywords","filterKeywordByDetail"]
    }
    "mark":"text",
    "encoding":{
        "..."
    }
}