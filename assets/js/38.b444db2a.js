(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{619:function(t,e,a){"use strict";a.r(e);var n=a(1),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"upselfexcute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upselfexcute","aria-hidden":"true"}},[t._v("#")]),t._v(" UpSelfExcute")]),t._v(" "),a("p",[t._v("上架单执行\n修改上架单状态为执行，明细状态为待上架")]),t._v(" "),a("h2",{attrs:{id:"接口注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口注意事项")]),t._v(" "),a("p",[t._v('只能执行"新建"状态下的上架单\n支持批量执行，但目前建议单条传入\n执行时会根据上架类型的策略配置情况形成上架指导并对限容限重库位进行预占用\n将上架类型的策略控制信息回写至上架单"StrategyControl"字段中')]),t._v(" "),a("h2",{attrs:{id:"接口-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口-参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CommonEntity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"#commonentity",target:"_self"}},[t._v("CommonEntity")])]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("入参")])]),t._v(" "),a("tr",[a("td",[t._v("RtnData")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"#rtndata",target:"_self"}},[t._v("RtnData")])]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("出参")])])])]),t._v(" "),a("h2",{attrs:{id:"commonentity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonentity","aria-hidden":"true"}},[t._v("#")]),t._v(" CommonEntity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("上架单Id，未使用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("IDs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("上架单Id列表")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("List<string>")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"rtndata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtndata","aria-hidden":"true"}},[t._v("#")]),t._v(" RtnData")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RtnCode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1-成功;2-失败")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("RtnNote")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回说明")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);