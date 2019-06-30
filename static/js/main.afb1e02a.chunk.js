(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(47),i=n.n(o),s=(n(56),n(9)),l=n(10),c=n(12),h=n(11),u=n(13),g=(n(57),n(25)),d=n(19),m=n.n(d),p=n(48),f=(n(58),n(59),n(29),n(26)),v=n.n(f),b=(n(60),n(61),n(62),n(63),n(64),n(65),n(66),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={language:{json:!0,name:"javascript"},value:""},n.changeLang=n.changeLang.bind(Object(g.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeLang",value:function(e){"JSON"===e.target.value?this.setState({language:{json:!0,name:"javascript"}}):"YAML"===e.target.value&&this.setState({language:"yaml"}),this.props.onLanguageChange(e)}},{key:"changeValue",value:function(e){this.props.onDataChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"left quarter form shadowed standard vertical-container"},r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),r.a.createElement("div",{className:"fill-width vertical-container"},r.a.createElement(m.a,null,r.a.createElement(m.a.Group,{controlId:"dataForm.JsonDataArea"},r.a.createElement(m.a.Row,null,r.a.createElement(v.a,null,r.a.createElement(m.a.Label,null,"Enter data here")),r.a.createElement(v.a,null,r.a.createElement(m.a.Control,{as:"select",onChange:this.changeLang},r.a.createElement("option",null,"JSON"),r.a.createElement("option",null,"YAML")))))),r.a.createElement("div",{className:"vertical-container primary_container"},r.a.createElement(p.UnControlled,{className:"fill-width CodeMirror form full",value:this.state.value,editorDidMount:function(e){e.setSize(null,"100%")},options:{mode:this.state.language,lineNumbers:!0,autofocus:!0},onChange:function(t,n,a){e.changeValue(a)}}))))}}]),t}(r.a.Component)),j=n(33),O=n(49),k=(n(90),{height:window.innerHeight,width:.7*window.innerWidth,automaticRearrangeAfterDropNode:!1,collapsible:!1,directed:!1,focusAnimationDuration:.75,focusZoom:1,highlightDegree:1,highlightOpacity:1,linkHighlightBehavior:!1,maxZoom:8,minZoom:.1,nodeHighlightBehavior:!1,panAndZoom:!1,staticGraph:!1,d3:{alphaTarget:.05,gravity:-100,linkLength:100,linkStrength:1},node:{color:"#d3d3d3",fontColor:"black",fontSize:8,fontWeight:"normal",highlightColor:"SAME",highlightFontSize:8,highlightFontWeight:"normal",highlightStrokeColor:"SAME",highlightStrokeWidth:"SAME",labelProperty:"id",mouseCursor:"pointer",opacity:1,renderLabel:!0,size:200,strokeColor:"none",strokeWidth:1.5,svg:"",symbolType:"circle"},link:{color:"#d3d3d3",fontColor:"black",fontSize:8,fontWeight:"normal",highlightColor:"#d3d3d3",highlightFontSize:8,highlightFontWeight:"normal",labelProperty:"label",mouseCursor:"pointer",opacity:1,renderLabel:!0,semanticStrokeWidth:!1,strokeWidth:1.5}}),y=function(e){return!!e&&e.constructor===Object},C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"generateLinkWithOptions",value:function(e,t,n){var a={source:e,target:t};return a.label="label"in n?n.label:"","weight"in n&&(a.strokeWidth=n.weight),a}},{key:"generateConnectionsFromObject",value:function(e,t){var n=[];for(var a in t)if(t.hasOwnProperty(a)){var r={source:e,target:a};y(t[a])&&(r=this.generateLinkWithOptions(e,a,t[a])),n.push(r)}return n}},{key:"generateConnectionsFromArray",value:function(e,t){var n=[];return t.forEach(function(t){t&&n.push({source:e,target:t})}),n}},{key:"generateConnectedItems",value:function(e,t){var n,a=[];return(n=t)&&n.constructor===Array&&(a=this.generateConnectionsFromArray(e,t)),y(t)&&(a=this.generateConnectionsFromObject(e,t)),a}},{key:"convertToGraph",value:function(e){var t=this,n={nodes:[],links:[]},a=function(a){if(e.hasOwnProperty(a)&&y(e[a])&&(e[a].hasOwnProperty("connections")&&(n.links=[].concat(Object(j.a)(n.links),Object(j.a)(t.generateConnectedItems(a,e[a].connections))),n.links.forEach(function(e){n.nodes.map(function(e){return e.id}).includes(e.source)||n.nodes.push({id:e.source}),n.nodes.map(function(e){return e.id}).includes(e.target)||n.nodes.push({id:e.target})})),n.nodes.map(function(e){return e.id}).includes(a)||n.nodes.push({id:a}),"colour"in e[a])){var r=n.nodes.filter(function(e){return e.id===a});r.length&&(r[0].color=e[a].colour)}};for(var r in e)a(r);return n.links=n.links.filter(function(e,t,n){return n.slice(t).filter(function(t){return e.source===t.target&&t.source===e.target}).length<1}),n}},{key:"renderGraph",value:function(){var e=this.convertToGraph(this.props.graph_json);return e.nodes.length?r.a.createElement(O.Graph,{id:"mainGraph",ref:"mainGraph",data:e,config:k}):r.a.createElement("p",null,"No data available")}},{key:"render",value:function(){return r.a.createElement("div",{className:"fill-width fill-height standard horizontal-container right three-quarter"},this.renderGraph())}}]),t}(r.a.Component),E=n(50),w=n.n(E),S=(n(116),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.show&&r.a.createElement("div",{className:"errorContainer top"},this.props.message)}}]),t}(r.a.Component)),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){"JSON"===n.state.language?n.parseJson(e):"YAML"===n.state.language&&n.parseYaml(e)},n.changeLanguage=function(e){n.setState({language:e.target.value}),n.onChange(e.target.value)},n.state={json_valid:!0,json:{},message:"The JSON is invalid",language:"JSON"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"parseYaml",value:function(e){try{var t=w.a.safeLoad(e,{json:!0});this.setState({json:t,json_valid:!0})}catch(n){this.setState({json_valid:!1,message:n.message})}}},{key:"parseJson",value:function(e){try{this.setState({json:JSON.parse(e),json_valid:!0})}catch(t){this.setState({json_valid:!1,message:t.message})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{show:!this.state.json_valid,message:this.state.message}),r.a.createElement("div",{className:"App standard horizontal-container full"},r.a.createElement(b,{onDataChange:this.onChange,onLanguageChange:this.changeLanguage}),r.a.createElement(C,{graph_json:this.state.json})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){},51:function(e,t,n){e.exports=n(119)},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},90:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.afb1e02a.chunk.js.map