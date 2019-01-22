define([
    'jquery',
    'backbone',
    'underscore',
    'utils'
], function ($, BackBone, _, ) {
    var AddCreditCardModel = BackBone.Model.extend({
        initialize: function () {
        },
        save: function (formData) {
            var userProfile = getSessionStorage("userProfile");
            
            if(!defined(userProfile.cards)) {
                userProfile.cards = [];
            }
            
            // Update first and last name.
            userProfile.firstName = formData.firstName;
            userProfile.lastName = formData.lastName;
            
            // Delete first and last name.
            delete formData.firstName;
            delete formData.lastName;
            
            userProfile.cards.push(formData);
            
            if(defined(userProfile._id)) {
                this.put(userProfile);
            }
            else {
                this.post(userProfile);
            }
            deleteSessionStorage();
        },
        post: function (object) {
            $.ajax({
                async: false,
                url: "http://localhost:3000/api/profile",
                type: "post",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(object),
                crossDomain: true,
                success: function (response) {
                    console.log(response);
                    var status = response['status'];
                    if (status === 'success') {
                        console.log(JSON.stringify(response));
                    } else {
                        console.log("error");
                    }
                },
                error: function (error) {
                    errorMessage = error;
                }
            });
        },
        put: function (object) {
            
            var identifier = object._id;
            delete object._id;
            
            $.ajax({
                async: false,
                url: "http://localhost:3000/api/profile/" + identifier,
                type: "put",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(object),
                crossDomain: true,
                success: function (response) {
                    console.log(response);
                    var status = response['status'];
                    if (status === 'success') {
                        console.log(JSON.stringify(response));
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
    return AddCreditCardModel;
});