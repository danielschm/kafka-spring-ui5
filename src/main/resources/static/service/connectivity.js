sap.ui.define([], function () {
    "use strict";

    return {
        getData: async function () {
            return await jQuery.get("/api/v1/data");
        }
    }
});
