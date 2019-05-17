A React app to create Network graph using JSON data

The working example is shown here: https://eiranling.github.io/json-to-graph

## How to use:

To use the app, simply enter JSON data on the left hand box in the correct format. 
### Formatting

To define a node and it's connections, simply put the following information into the JSON data area
```
{  
"sourceNode": ["targetNode1", "targetNode2"],
"targetNode1": ["targetNode3"]
}
```

This will result in the following output:
![](./doc/images/example.png)

The app also allows the handling of custom labels and weights to specify this, use the following format
```
{
"sourceNode": {
    "targetNode1": { 
        "label": "label for the link", 
        "weight": 2 
        }
    }
}
```
