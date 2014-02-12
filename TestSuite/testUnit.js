/**
 * Created by eguzman on 2/12/14.
 */
//function assert(value, desc) {
//    console.log(value ? "Passed:" : "Failed:", desc);
//}
(function () {
    var value;
    this.assert = function (val, desc) {
        console.log(value ? "Passed:" : "Failed:", desc);
        if (!val) {
            console.log("GROUP-", desc + " FAILED");
            value=false;
        }


    };

    this.test = function (name, fn) {
        value=true;
        fn();
        assert(value, name);

    };
})();