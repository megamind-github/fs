jQuery( document ).ready( function( $ ) {

    $( '#message-form' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.post(
            $( this ).prop( 'action' ),
            {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "content": $( '#content' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            function( data ) {
                //do something with data/response returned by server
            },
            'json'
        );

        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.up-vote' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.post(
            $( this ).prop( 'action' ),
            {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "message_id": $( this).find( 'input[name=message_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            function( data ) {
                //do something with data/response returned by server
            },
            'json'
        );

        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.remove-up-vote' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.ajax({
            url: $( this ).prop( 'action' ),
            type: "DELETE",
            data: {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "up_vote_id": $( this).find( 'input[name=up_vote_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            success: function(result) {
                // Do something with the result
            }
        });

        // $.post(
        //     $( this ).prop( 'action' ),
        //     {
        //         "_token": $( this ).find( 'input[name=_token]' ).val(),
        //         "up_vote_id": $( this).find( 'input[name=up_vote_id]' ).val()
        //         // "setting_value": $( '#setting_value' ).val()
        //     },
        //     function( data ) {
        //         //do something with data/response returned by server
        //     },
        //     'json'
        // );

        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.down-vote' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.post(
            $( this ).prop( 'action' ),
            {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "message_id": $( this).find( 'input[name=message_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            function( data ) {
                //do something with data/response returned by server
            },
            'json'
        );

        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.remove-down-vote' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.ajax({
            url: $( this ).prop( 'action' ),
            type: "DELETE",
            data: {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "down_vote_id": $( this).find( 'input[name=down_vote_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            success: function(result) {
                // Do something with the result
            }
        });


        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.add-favourite' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.post(
            $( this ).prop( 'action' ),
            {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "message_id": $( this).find( 'input[name=message_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            function( data ) {
                //do something with data/response returned by server
            },
            'json'
        );

        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );

    $( '.remove-favourite' ).on( 'submit', function() {

        //.....
        //show some spinner etc to indicate operation in progress
        //.....

        $.ajax({
            url: $( this ).prop( 'action' ),
            type: "DELETE",
            data: {
                "_token": $( this ).find( 'input[name=_token]' ).val(),
                "favourite_id": $( this).find( 'input[name=favourite_id]' ).val()
                // "setting_value": $( '#setting_value' ).val()
            },
            success: function(result) {
                // Do something with the result
            }
        });


        //.....
        //do anything else you might want to do
        //.....

        //prevent the form from actually submitting in browser
        return false;
    } );



} );

var All = {



    longpoll: function waitForMsg() {
        /* This requests the url "msgsrv.php"
           When it complete (or errors)*/
        $.ajax({
            type: "GET",
            url: "/messages/checkin_poll",

            async: true, /* If set to non-async, browser shows page as "Loading.."*/
            cache: false,
            timeout:50000, /* Timeout in ms */

            success: function(data){ /* called when request to barge.php completes */
                addmsg("new", data); /* Add response to a .msg div (with the "new" class)*/
                setTimeout(
                    waitForMsg, /* Request next message */
                    1000 /* ..after 1 seconds */
                );
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                addmsg("error", textStatus + " (" + errorThrown + ")");
                setTimeout(
                    waitForMsg, /* Try again after.. */
                    15000); /* milliseconds (15seconds) */
            }
        });

    },


    newmessagepopup: function(){
        $("#message-form-popup").show();
    },
    initialize: function(){
        $(document).on("click", "#message-form-show", All.newmessagepopup);
        All.longpoll();

    }

}


init = function(){
    All.initialize();
}

$(document).ready(init);
