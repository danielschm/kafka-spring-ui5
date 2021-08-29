sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/XMLView",
    "sap/m/Shell",
    "sap/m/App"
], function (UIComponent, XMLView, Shell, App) {
    "use strict";

    return UIComponent.extend("kafka-webapp.Component", {
        metadata: {
            manifest: "json"
        },

        createContent: function () {
            this.getRouter().initialize();

            return new Shell({
                app: new App("app")
            });
        }

    });
});