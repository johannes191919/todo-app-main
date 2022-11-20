let isDark = true;

let width = screen.width;

if (width < 500) {
    $('li').removeAttr("onmouseover");
    $('li').removeAttr("onmouseleave");

};

window.onload = function () {
    $("#show_all_button").addClass("active_button");
};

function removecheck(div) {


    if (isDark === true) { $(div).parent().children("p").toggleClass("line_through"); }
    else { $(div).parent().children("p").toggleClass("line_through_light"); };

    $(div).children(".check").toggle("slow");
    $(div).parent().toggleClass("active");
    $(div).parent().toggleClass("fulfilled");

    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") };

    if ($(".active").length === 1) {
        $("#mobile_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#mobile_li  p").text("Add a item")
    }
    else { $("#mobile_li  p").text("" + $(".active").length + " items left") };


    if ($("#show_all_button").css("color") === "rgb(58, 123, 253)") { null }

    else if ($("#active_filter_button").css("color") === "rgb(58, 123, 253)") {
        filteractive()
    }
    else if ($("#completed_button").css("color") === "rgb(58, 123, 253)") {
        filtercompleted()
    };







};

function removeparent(target) {



    $(target).parent().remove();
    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") }

    if ($(".active").length === 1) {
        $("#mobile_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#mobile_li  p").text("Add a item")
    }
    else { $("#mobile_li  p").text("" + $(".active").length + " items left") };

};

function filtercompleted() {
    $(".active").addClass("invisible");
    $(".fulfilled").removeClass("invisible");
    $("#completed_button").addClass("active_button");
    $("#show_all_button").removeClass("active_button");
    $("#active_filter_button").removeClass("active_button");


};

function filteractive() {

    $(".fulfilled").addClass("invisible");
    $(".active").removeClass("invisible");
    $("#completed_button").removeClass("active_button");
    $("#show_all_button").removeClass("active_button");
    $("#active_filter_button").addClass("active_button");

};

function showall() {

    $(".fulfilled").removeClass("invisible");
    $(".active").removeClass("invisible");
    $("#completed_button").removeClass("active_button");
    $("#show_all_button").addClass("active_button");
    $("#active_filter_button").removeClass("active_button");

};

function cleanfulfilled() {
    $(".fulfilled").remove();
    if ($(".active").length === 1) {
        $("#last_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#last_li  p").text("Add a item")
    }
    else { $("#last_li  p").text("" + $(".active").length + " items left") }

    if ($(".active").length === 1) {
        $("#mobile_li  p").text("" + $(".active").length + " item left")
    }
    else if ($(".active").length === 0) {
        $("#mobile_li  p").text("Add a item")
    }
    else { $("#mobile_li  p").text("" + $(".active").length + " items left") };

};

function showcross(li) {

    $(li).children(".cross").show("slow");



};

function hidecross(li) {

    $(li).children(".cross").hide("slow");


};



$("#dark_theme").click(function () {

    $(".background_image img ").attr("src", "images/bg-desktop-light.jpg");
    $(".container").css("background-color", "hsl(236, 33%, 92%)");
    $(".container").css("color", "hsl(235, 19%, 35%)");
    $("li div").css("background-color", "hsl(0, 0%, 98%)");
    $(".content li").css("background-color", "hsl(0, 0%, 98%)");
    $("#input").css("color", "hsl(235, 19%, 35%)");
    $("h1").css("color", "hsl(0, 0%, 98%)");
    $("li div").css("border-color", "hsl(233, 11%, 84%)");
    $("button").css("background-color", "hsl(0, 0%, 98%)");
    $("#dark_theme").css("display", "none");
    $("#light_theme").css("display", "block");
    $(".line_through").parent().children("p").addClass("line_through_light");
    $(".line_through_light").parent().children("p").removeClass("line_through");
    isDark = false;





}



);


$("button").hover(

    function () {

        if (isDark) { $(this).addClass("button_hover"); }
        else { $(this).addClass("button_hover_light"); }


    }, function () {

        if (isDark) { $(this).removeClass("button_hover"); }
        else { $(this).removeClass("button_hover_light"); }
    }



);





$("#light_theme").click(function () {

    $(".background_image img").attr("src", "images/bg-desktop-dark.jpg");
    $(".container").css("background-color", "hsl(235, 21%, 11%)");
    $(".container").css("color", "hsl(236, 33%, 92%)");
    $("li div").css("background-color", "hsl(235, 24%, 19%)");
    $(".content li").css("background-color", "hsl(235, 24%, 19%)");
    $("#input").css("color", "white");
    $("h1").css("color", "hsl(0, 0%, 98%)");
    $("li div").css("border-color", "hsl(233, 14%, 35%)");
    $("button").css("background-color", "rgb(37, 39, 60)");
    $("#dark_theme").css("display", "block");
    $("#light_theme").css("display", "none");
    $(".line_through_light").parent().children("p").addClass("line_through");
    $(".line_through").parent().children("p").removeClass("line_through_light");
    isDark = true;



});

$("#first_circle").click(function () {

    var value = $("#input").val();


    if ($("#input").val().trim().length === 0) { null }

    else {

        let li_create


        if ((isDark && width < 500)) { li_create = " <li onmouseover='none'  onmouseleave='none'  id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross ' src='images/icon-cross.svg' ></li> " }
        else if (isDark && width > 500) {
            li_create = "<li onmouseover='showcross(this)'  onmouseleave='hidecross(this)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross  ' src='images/icon-cross.svg' ></li> "
        }

        else if (isDark === false && width < 500) { li_create = "<li style='background-color:rgb(250, 250, 250)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div style='background-color:rgb(250, 250, 250);border-color:rgb(210, 211, 219)' onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross  ' src='images/icon-cross.svg' ></li> " }
        else if (isDark === false && width > 500) {
            li_create = "<li style='background-color:rgb(250, 250, 250)' onmouseover='showcross(this)'  onmouseleave='hidecross(this)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div style='background-color:rgb(250, 250, 250);border-color:rgb(210, 211, 219)' onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross ' src='images/icon-cross.svg' ></li> "
        };





        $(".input_li").after(li_create);



        slist(document.getElementById("sortlist"));

        $("#input").val("");
        if ($(".active").length === 1) {
            $("#last_li  p").text("" + $(".active").length + " item left")
        }
        else if ($(".active").length === 0) {
            $("#last_li  p").text("Add a item")
        }
        else { $("#last_li  p").text("" + $(".active").length + " items left") }

        if ($(".active").length === 1) {
            $("#mobile_li  p").text("" + $(".active").length + " item left")
        }
        else if ($(".active").length === 0) {
            $("#mobile_li  p").text("Add a item")
        }
        else { $("#mobile_li  p").text("" + $(".active").length + " items left") };
    }
}
);




$("#input").keypress(function (event) {
    var value = $("#input").val();


    if (event.key === "Enter") {

        if ($("#input").val().trim().length === 0) { }

        else {

            let li_create

            if ((isDark && width < 500)) { li_create = " <li onmouseover='none'  onmouseleave='none'  id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross  ' src='images/icon-cross.svg' ></li> " }
            else if (isDark && width > 500) {
                li_create = "<li onmouseover='showcross(this)'  onmouseleave='hidecross(this)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross  ' src='images/icon-cross.svg' ></li> "
            }

            else if (isDark === false && width < 500) { li_create = "<li style='background-color:rgb(250, 250, 250)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div style='background-color:rgb(250, 250, 250);border-color:rgb(210, 211, 219)' onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross  ' src='images/icon-cross.svg' ></li> " }
            else if (isDark === false && width > 500) {
                li_create = "<li style='background-color:rgb(250, 250, 250)' onmouseover='showcross(this)'  onmouseleave='hidecross(this)' id='" + (($("ul li").length) + 1) + "'class='active _li ' ><div style='background-color:rgb(250, 250, 250);border-color:rgb(210, 211, 219)' onclick='removecheck(this)' class='list_item'><img   id='empty'  class='list_item check  ' src='images/icon-check.svg'></div><p class='list_item' >" + value + "</p><img onclick=' removeparent(this)' class='cross ' src='images/icon-cross.svg' ></li> "
            };


            $(".input_li").after(li_create);

            slist(document.getElementById("sortlist"));

            $("#input").val("");
            if ($(".active").length === 1) {
                $("#last_li  p").text("" + $(".active").length + " item left")
            }
            else if ($(".active").length === 0) {
                $("#last_li  p").text("Add a item")
            }
            else { $("#last_li  p").text("" + $(".active").length + " items left") }

            if ($(".active").length === 1) {
                $("#mobile_li  p").text("" + $(".active").length + " item left")
            }
            else if ($(".active").length === 0) {
                $("#mobile_li  p").text("Add a item")
            }
            else { $("#mobile_li  p").text("" + $(".active").length + " items left") };
        }
    }

}
);

slist(document.getElementById("sortlist"));

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

};



