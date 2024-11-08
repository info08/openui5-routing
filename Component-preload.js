//@ui5-bundle ui5/crud/Component-preload.js
sap.ui.predefine("ui5/crud/Component", ["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],(e,i,t)=>{"use strict";return e.extend("ui5.crud.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init(){e.prototype.init.apply(this,arguments);const i=new t({bundleName:"ui5.crud.i18n.i18n"});this.setModel(i,"i18n");this.getRouter().initialize()}})});
sap.ui.predefine("ui5/crud/controller/App.controller", ["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],(e,t,o)=>{"use strict";return e.extend("ui5.crud.controller.App",{onInit(){var e=this.getOwnerComponent().getRouter();var t=e.getRoute("userdetails");t.attachPatternMatched(this._onPatternMatched,this)},_onPatternMatched:function(e){var t=e.getParameter("arguments");var o=t.id;console.log("Received ID: ",o)},userDetails(){const e=this.getOwnerComponent().getRouter();e.navTo("userdetails",{id:123})},dashboard(){const e=this.getOwnerComponent().getRouter();e.navTo("dashboard")}})});
sap.ui.require.preload({
	"ui5/crud/i18n/i18n.properties":'# App Descriptor\r\nappTitle=OpenUI5 Crud\r\nappDescription=A simple crud app that explains the most important concepts of OpenUI5\r\n\r\n# Hello Panel\r\nshowHelloButtonText=Say Hello\r\nhelloMsg=Hello {0}\r\n\r\n# Detail Page\r\ndetailPageTitle=Crud - Details\r\n\r\nhomePageTitle=Hello Dashboard\r\n',
	"ui5/crud/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"ui5.crud","i18n":{"bundleUrl":"i18n/i18n.properties","supportedLocales":[""]},"title":"{{appTitle}}","description":"{{appDescription}}","type":"application","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.108.0","libs":{"sap.ui.core":{},"sap.m":{}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ui5.crud.i18n.i18n","supportedLocales":[""],"fallbackLocale":""}}},"rootView":{"viewName":"ui5.crud.view.App","type":"XML","id":"app"},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","type":"View","viewType":"XML","path":"ui5.crud.view","controlId":"app","controlAggregation":"pages"},"routes":[{"pattern":"","name":"dashboard","target":"dashboard"},{"pattern":"userdetails/{id}","name":"userdetails","target":"userdetails"}],"targets":{"dashboard":{"id":"dashboard","name":"Dashboard"},"userdetails":{"id":"userdetails","name":"UserDetails"}}},"resourceRoots":{"view":"./"}}}',
	"ui5/crud/view/UserDetails.view.xml":'<mvc:View\r\n    controllerName="ui5.crud.controller.App"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    displayBlock="true"><VBox><Text text="Hello UserDetails page"/><Button text="Dashboard" press=".dashboard"/></VBox></mvc:View>',
	"ui5/crud/view/app.view.xml":'<mvc:View\r\n   controllerName="ui5.crud.controller.App"\r\n   xmlns="sap.m"\r\n   xmlns:mvc="sap.ui.core.mvc"><App\r\n            class="myAppDemoWT"\r\n            id="app"/></mvc:View>',
	"ui5/crud/view/dashboard.view.xml":'<mvc:View\r\n    controllerName="ui5.crud.controller.App"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    displayBlock="true"><VBox><Text text="Hello Dashboard page"/><Button text="UserDetails" press=".userDetails" /></VBox></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
