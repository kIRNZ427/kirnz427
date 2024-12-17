sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sleflearning.kranthi01.controller.View2", {
        onInit() {
        },
        onBack() {
            // this.getOwnerComponent().getRouter().navTo("RouteView1")
            history.go(-1);
        }
    });
});