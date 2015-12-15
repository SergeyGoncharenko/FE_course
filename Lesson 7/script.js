
window.onload = function () {

    //js, добавить атрибут name со значением его id
    function addAttrName() {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== "checkbox" || inputs[i].type !== "radio") {
                var inputId = inputs[i].getAttribute("id");
                inputs[i].setAttribute("name", inputId);
            }
        }
    }
    addAttrName();

}//good job!