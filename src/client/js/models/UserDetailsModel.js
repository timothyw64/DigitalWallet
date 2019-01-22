define([
    'jquery',
    'backbone',
    'underscore',
    'utils'
], function ($, BackBone, _, ) {
    var UserDetailsModel = BackBone.Model.extend({
        initialize: function () {
        },
        fetch: function () {

            var queryString = "";
            var searchParms = getSessionStorage("userProfile");

            if (searchParms.firstName.length > 0) {
                queryString += "?firstName=" + searchParms.firstName;
            }
            if (searchParms.lastName.length > 0) {
                queryString += (queryString !== "" ? "&" : "?");
                queryString += "lastName=" + searchParms.lastName;
            }
            var self = this;
            var errorMessage;
            $.ajax({
                async: false,
                url: "http://localhost:3000/api" + queryString,
                type: "get",
                crossDomain: true,
                success: function (response) {
                    console.log(response);
                    var status = response['status'];
                    if (status === 'success') {
                        console.log(JSON.stringify(response));

                        if (response.data.length > 0) {
                            self.set("profiles", response.data);
                        } else {
                            self.set("profiles", searchParms);
                        }
                    } else {
                        console.log("error");
                    }
                },
                error: function (error) {
                    errorMessage = error;
                }
            });
        }
    });
    return UserDetailsModel;
});