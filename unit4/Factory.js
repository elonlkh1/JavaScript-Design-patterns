var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content)
    }
}
Factory.prototype = {
    java: function () {

    },
    UI: function () {

    },
    JavaScript: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('contrainer').appendChild(div);
        })(content);
    }
}