(this.webpackJsonptooltip=this.webpackJsonptooltip||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(6),r=o.n(i),l=(o(12),o(13),o(1)),c=o(2),s=o(4),d=o(3),h=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).state={direction:n.props.direction},n}return Object(c.a)(o,[{key:"render",value:function(){return"top"===this.state.direction?a.a.createElement("div",null,a.a.createElement("div",{style:u.rotateTop},a.a.createElement("span",null,"50 MB File Size Top"))):"bottom"===this.state.direction?a.a.createElement("div",null,a.a.createElement("div",{style:u.rotateBottom},a.a.createElement("span",null,"50 MB File Size Bottom"))):"left"===this.state.direction?a.a.createElement("div",null,a.a.createElement("div",{style:u.rotateLeft},a.a.createElement("span",null,"50 MB File Size Left"))):"right"===this.state.direction?a.a.createElement("div",null,a.a.createElement("div",{style:u.rotateRight},a.a.createElement("span",null,"50 MB File Size Right"))):void 0}}]),o}(n.Component),u={rotateBottom:{margin:"auto",width:"20%",height:"auto",backgroundColor:"black",fontSize:"xx-large",borderRadius:"10px",padding:"10px",marginTop:"20px",color:"white",textAlign:"center",position:"absolute"},rotateTop:{margin:"auto",width:"20%",height:"auto",backgroundColor:"black",fontSize:"xx-large",borderRadius:"10px",padding:"10px",marginTop:"-120px",color:"white",textAlign:"center",position:"absolute"},rotateLeft:{width:"20%",height:"auto",backgroundColor:"black",fontSize:"xx-large",borderRadius:"10px",padding:"10px",marginTop:"-50px",color:"white",textAlign:"center",position:"absolute",marginLeft:"-25%"},rotateRight:{width:"20%",height:"auto",backgroundColor:"black",fontSize:"xx-large",borderRadius:"10px",padding:"10px",marginTop:"-70px",color:"white",textAlign:"center",position:"absolute",marginLeft:"25%"}},p=h,m=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).showToolTip=function(e){n.setState({direction:n.props.direction,showToolTip:!0,showDownloadBtn:!0})},n.hideToolTip=function(){n.setState({showToolTip:!1,showDownloadBtn:!1})},n.state={direction:null,showToolTip:!1,showDownloadBtn:!1},n}return Object(c.a)(o,[{key:"render",value:function(){return a.a.createElement("div",null,!0===this.state.showDownloadBtn?a.a.createElement("div",{style:g.downloadBtnIcon},a.a.createElement("h1",{onMouseEnter:this.showToolTip,onMouseLeave:this.hideToolTip},a.a.createElement("i",{class:"fas fa-download"}," "),!0===this.state.showToolTip?a.a.createElement(p,{direction:this.state.direction,showDownloadBtn:this.state.showDownloadBtn}):null)):a.a.createElement("div",{style:g.downloadBtn},a.a.createElement("h1",{onMouseEnter:this.showToolTip,onMouseLeave:this.hideToolTip},"Download",!0===this.state.showToolTip?a.a.createElement(p,{direction:this.state.direction,showDownloadBtn:this.state.showDownloadBtn}):null)))}}]),o}(n.Component),g={downloadBtn:{margin:"auto",width:"20%",backgroundColor:"#0c7bfe",color:"white",height:"40px",textAlign:"center",borderRadius:"80px"},downloadBtnIcon:{margin:"auto",width:"20%",backgroundColor:"#4aaee3",color:"white",height:"40px",textAlign:"center",borderRadius:"80px"}},w=m,b=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(l.a)(this,o),(e=t.call(this)).getDirection=function(t){e.setState({direction:t.target.value})},e.state={direction:"top"},e}return Object(c.a)(o,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:E.mainContainer},a.a.createElement("div",{style:E.dropDownContainer},a.a.createElement("select",{style:E.container,onChange:this.getDirection},a.a.createElement("option",{defaultValue:!0,value:"top"},"Top"),a.a.createElement("option",{value:"bottom"},"Bottom"),a.a.createElement("option",{value:"left"},"Left"),a.a.createElement("option",{value:"right"},"Right")))),a.a.createElement(w,{direction:this.state.direction}))}}]),o}(a.a.Component),E={mainContainer:{height:"20vh",margin:"15vh"},dropDownContainer:{margin:"auto",width:"10%",height:"10vh"},container:{height:"80%",width:"100%",fontSize:"x-large",backgroundColor:"red",color:"white",borderRadius:"20%"}},v=b;var f=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"mainHeading"},a.a.createElement("h1",null,"Tool-Tip"),a.a.createElement("span",{className:"toolTipCreaterForHeading"},"Design By Abhay Jirati")),a.a.createElement(v,null))};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.092e0c42.chunk.js.map