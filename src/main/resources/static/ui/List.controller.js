sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../service/connectivity"
], function (Controller, JSONModel, Connectivity) {
    "use strict";

    return Controller.extend("kafka-webapp.ui.List", {
        /**
         * Called when this controller is instantiated.
         * @public
         */
        onInit() {
            this.getView().setModel(new JSONModel([{
                name: "Test",
                type: "Test Type"
            }]), "data");

            setInterval(this.loadData.bind(this), 1000);
        },

        async loadData() {
            const sData = await Connectivity.getData();
            if (sData) {
                this.getView().getModel("data").getData().push({
                    name: sData
                });
                this.getView().getModel("data").refresh();
            }
        }
    });
});