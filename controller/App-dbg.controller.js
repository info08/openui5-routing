sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], (Controller,JSONModel ,ResourceModel) => {
    "use strict";
 
    return Controller.extend("ui5.crud.controller.App", {
        onInit() {
           // Get the ID parameter from the route
           var oRouter = this.getOwnerComponent().getRouter();
           var oRoute = oRouter.getRoute("userdetails");

           oRoute.attachPatternMatched(this._onPatternMatched, this);
         },


         _onPatternMatched: function (oEvent) {
            // Extract the ID from the event's arguments
            var oArguments = oEvent.getParameter("arguments");
            var sId = oArguments.id;  // This will give you the 'id' parameter passed in the URL

            console.log("Received ID: ", sId);
            // Now you can use the ID, e.g., load data based on the ID
        },


         userDetails() {
			const oRouter = this.getOwnerComponent().getRouter();
			//oRouter.navTo("userdetails");

            oRouter.navTo("userdetails", {
                id: 123  // The ID to be passed as a parameter
            });
		},

        dashboard(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("dashboard");
        }

    });
 });