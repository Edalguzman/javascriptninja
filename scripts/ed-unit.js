/**
 * Created by eguzman on 2/14/14.
 */
(function () {
    var results;
    this.assert = function (value, desc) {

        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        if (null == results)
            results = document.getElementById("results");
        if (null == results)
            console.log("'results' ul not found!. You must define ul with the id 'results' in the file!!!")

        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
    this.test = function (name, fn) {
        results = document.getElementById("results");
        results = assert(true, name).appendChild(
            document.createElement("ul"));
        fn();
    };
})();

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);

}