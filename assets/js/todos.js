/*/Check of specific todo by clicking

$("li").click(function () {
    //if li is gray NB $(this).css("color") is intepreter as gray in rgb form hence rgb(128,128,128)
    if($(this).css("color") === "rgb(128, 128, 128)"){
        console.log("it is gray now");
        $(this).css({
            color: "black",
            textDecoration : "none"  //Using text-decoration returns an error because js uses camCase instead
            });  
         //turn to black 
    }
    //else
    else{  //turn to gray
          $(this).css({
    color: "gray",
    textDecoration : "line-through"  //Using text-decoration returns an error because js uses camCase instead
    });  
} 
});*/

//simpler version : WHEN WE JUST DEFINED A CLASS IN OUR CSS
//add listener to the entire ul parent

$("ul").on("click", "li", function () {  
    // when an li is click inside a ul run the code
    $(this).toggleClass("completed");
});

//Delete Todo when click on X
$("ul").on("click", "span", function (event) {
    //when the span is clicked inside the ul run the code
   $(this).parent().fadeOut(500, function(){ //.parent() retrieve the parent in the span i.e $(this)
       $(this).remove();
   }); 
   event.stopPropagation(); //this stop the event for bubbling up ,i.e firing on the parent element
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13){
    //grabbing new text from inpt
    var todoText = $(this).val();
    $(this).val(""); //clears out the input
    //create a new li and add to ul
    $("ul").append("<li><span><li class='fa fa-trash'></span> " + todoText + "</li>") //append what user type in the input into the todo ul / li
    }
});

$("h1").on("click", ".fa-plus", function () {
    $("input[type='text']").fadeToggle("slow");
})














