sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sleflearning.kranthi01.controller.View1", {
        onInit() {
        },
        onPress(){
            // alert("testing");
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});