define(["dust"], function(dust) {
  (function(dust){dust.register("userDetails",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["profiles"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-2\">&nbsp;</div><div class=\"col-md-8\">").x(ctx.get(["_id"], false),ctx,{"else":body_2,"block":body_3},{}).w("   <div class=\"row justify-content-center\"><button id=\"addCreditCard_").f(ctx.get(["_id"], false),ctx,"h").w("\" class=\"btn btn-primary\">Add Credit Card</button></div></div><div class=\"col-md-2\">&nbsp;</div></div><hr/></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"row justify-content-center alert alert-warning\" role=\"alert\">No records found for: ").f(ctx.get(["firstName"], false),ctx,"h").w(" ").f(ctx.get(["lastName"], false),ctx,"h").w("</div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div class=\"row justify-content-center\"><h6>Profile for: ").f(ctx.get(["firstName"], false),ctx,"h").w(" ").f(ctx.get(["lastName"], false),ctx,"h").w("</h6></div><div class=\"row\">&nbsp;</div><div class=\"row\"><table class=\"table table-responsive table-striped\"><thead><tr><th scope=\"col\">Credit Card Company</th><th scope=\"col\">Cardholder Name</th><th scope=\"col\">Card Number</th><th scope=\"col\">Expiration Date</th><th scope=\"col\">CVV</th></tr></thead><tbody>").s(ctx.get(["cards"], false),ctx,{"block":body_4},{}).w("</tbody></table></div>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<tr><td>").f(ctx.get(["cardCompany"], false),ctx,"h").w("</td><td>").f(ctx.get(["cardHolder"], false),ctx,"h").w("</td><td>").f(ctx.get(["cardNumber"], false),ctx,"h").w("</td><td>").f(ctx.get(["expDate"], false),ctx,"h").w("</td><td>").f(ctx.get(["cvv"], false),ctx,"h").w("</td></tr>");}body_4.__dustBody=!0;return body_0}(dust));
});