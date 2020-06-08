$(document).ready(()=>{
$("#addbtn").on("click",(event)=> {
    
    var newBurger ={
        burger_name:$("#burger").val()
    }

    $.ajax({
        url:"/burger/create",
        method:"POST",
        data: newBurger
    }).then(function(){
        location.reload();
    })
});

$(document).on("click", ".devourdbtn" , function(){
    //Grabbing data-id from the generated buttons button
    var burger = $(this).data("id");
    
    //Using ajax to apiRoute burger/eat/:id with a post method
    $.ajax({
        url:"/burger/eat/"+burger,
        method:"POST",
        id:burger
    }).then(function(){
        //In .then() we use location reload to refresh the document
        location.reload();
    })
});
});
