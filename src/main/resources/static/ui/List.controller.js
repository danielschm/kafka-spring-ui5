sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ws/WebSocket",
    "../service/connectivity"
], function (Controller, JSONModel, WebSocket, Connectivity) {
    "use strict";

    let iEntryCount = 0;

    return Controller.extend("kafka-webapp.ui.List", {
        /**
         * Called when this controller is instantiated.
         * @public
         */
        onInit() {
            this.getView().setModel(new JSONModel({ entries: [] }), "data");

            Connectivity.initializeWebSocket(oResponse => {
                const oData = JSON.parse(oResponse.body);
                this.addData(oData);
            });
        },

        addData(oData) {
            const aEntries = this.getView().getModel("data").getProperty("/entries");
            aEntries.unshift(oData);
            this.getView().getModel("data").setProperty("/totalResult", oData.newTotalResult);
            this.getView().getModel("data").setProperty("/entryCount", ++iEntryCount);

            if (aEntries.length > 5) {
                aEntries.pop();
            }

            this.getView().getModel("data").refresh();
        }
    });
});