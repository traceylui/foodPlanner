$(document).ready(function() {
    var user = "";

    // $(function(){
    //     $("#greeting").append(" " + user);
    // })
    // $("#home").hide();
    // $("#name").hide();
    // $("#searchResult").hide();



    $("#signup").submit(function(){

        var $form = $( this ),
        name = $form.find( "input[id='username']" ).val()
        $.ajax({
            method: "POST",
            url: "/api/users",
            data: {name: name, utid: 1},
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                user = data.name;
                document.location.replace("home.html");
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        })
        // .then(function( result ) {
        //     user = result.data.name;
        //
        //     document.location.replace("home.html");
        //     $("#greeting").append(" " + user);
        // })
    });

    // $("#signup").submit(function(){
    //     var $form = $( this ),
    //     name = $form.find( "input[id='username']" ).val()
    //     $.ajax({
    //       method: "POST",
    //       url: "/api/users",
    //       data: { "name": name, "utid": 1 }
    //     })
    //     .done(function( result ) {
    //         user = result.data.name;
    //         $("#welcome").hide();
    //         $("#home").show();
    //         $("#greeting").append(" " + user);
    //     })
    // });


    $("#login").submit(function(){
        var $form = $( this ),
            name = $form.find( "input[id='loginname']" ).val()
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: { name: name}
        })
            .done(function( result ) {
                user = result.data.name;
                window.location.href('/home.html');
                $("#greeting").append(" " + user);
            })
    });

    function searchName(){
        document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>'
    }

    function searchIngredients(){
        $.ajax({
            method: "GET",
            url: "/api/ingredients"
        })
            .done(function(result){

            })
    }

    // $('.list-group').on('click', '.list-group-item', function(e) {
    //     var $this = $(this);
    //     var href = $this.attr('href');
    //     $("#home").hide();
    //     $(href).show();
    // });

    $("#nameRecipe").submit(function(){
        window.location.href("searchIngredients.html");
        // var $form = $( this ),
        //     name = $form.find( "input[id='recipeName']" ).val()
        // $.ajax({
        //     method: "POST",
        //     url: "/api/recipes/name",
        //     data: { name: name}
        // })
        // .done(function( result ) {
        //     $("#name").hide();
        //     document.location.replace("searchIngredients.html");
        //     // $(".recipeResult").append('<p>hi</p>')
        //     $.each(result.data, function(i, value){
        //         $(".recipeResult").append('<a href="#" class="list-group-item list-group-item-action">' +  value.name + '</a>')
        //     });
        //
        // })
    })

    // function getMealPlanBy(mealofday){
    //     $.ajax({
    //         method: "GET",
    //         url: "/api/meals"
    //     })
    //         .done(function(result){
    //
    //         })
    //
    // }

    // CREATE OR REPLACE FUNCTION insert_mealplans(IN val int) RETURNS VOID  AS
    // $body$
    // BEGIN
    // FOR i IN 1..10 LOOP
    // insert into test (val)
    // values($23);
    // END LOOP;
    // END;
    // $body$ Language 'plpgsql' VOLATILE;

});