function removecheck(div) {

    $(div).children(".check").toggle("slow");
    $(div).parent().children("p").toggleClass("line_through");
    $(div).parent().toggleClass("active");
    $(div).parent().toggleClass("fulfilled");

    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") }







}

function removeparent(target) {



    $(target).parent().remove();
    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") }

}

function filtercompleted() {
    $(".active").addClass("invisible");

}

function filteractive() {

    $(".fulfilled").addClass("invisible");
}

function showall() {

    $(".fulfilled").removeClass("invisible");
    $(".active").removeClass("invisible");

}

function cleanfulfilled() {
    $(".fulfilled").remove();
    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") }

}

$("#input").keypress(function (event) {
    var value = $("#input").val();


    if (event.key === "Enter") {

        if ($("#input").val().trim().length === 0) { }

        else {
            var li_create = "<li  id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross list_item ' src='images/icon-cross.svg' ></li> "

            $(".input_li").after(li_create)

            $("#input").val("");
            if ($(".active").length === 1) {
                $("#last_li  p").text("" + $(".active").length + " item left")
            }
            else if ($(".active").length === 0) {
                $("#last_li  p").text("Add a item")
            }
            else { $("#last_li  p").text("" + $(".active").length + " items left") }
        }
    }

}
)


window.addEventListener("DOMContentLoaded", () => {
    slist(document.getElementById("sortlist"));
})


function slist(target_) {


    let items = target_.getElementsByClassName("_li"), current = null;




    for (let i of items) {
        i.draggable = true;


        i.ondragstart = (ev) => {
            current = i;
            for (let it of items) {
                if (it != current) { it.classList.add("hint"); }
            }
        };


        i.ondragenter = (ev) => {
            if (i != current) { i.classList.add("active_"); }
        };


        i.ondragleave = () => {
            i.classList.remove("active_");
        };


        i.ondragend = () => {
            for (let it of items) {
                it.classList.remove("hint");
                it.classList.remove("active_");
            }
        };


        i.ondragover = (evt) => { evt.preventDefault(); };


        i.ondrop = (evt) => {
            evt.preventDefault();
            if (i != current) {
                let currentpos = 0, droppedpos = 0;
                for (let it = 0; it < items.length; it++) {
                    if (current == items[it]) { currentpos = it; }
                    if (i == items[it]) { droppedpos = it; }
                }
                if (currentpos < droppedpos) {
                    i.parentNode.insertBefore(current, i.nextSibling);
                } else {
                    i.parentNode.insertBefore(current, i);
                }
            }
        };
    }

}
