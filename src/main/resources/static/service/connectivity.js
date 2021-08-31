sap.ui.define([], function () {
    "use strict";

    return {
        getData: async function () {
            return await jQuery.get("/api/v1/data");
        },

        initializeWebSocket: function(fnHandler) {
            const socket = new SockJS('/gs-guide-websocket');
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/data', fnHandler);
            });
        },
    }
});
