//  API Key for Giphy nSzHHzSjEbNt3M7pDHVcoanYXmUXj6RA


//on document ready create a buttons from an array that has been created
var topics = ["dog",
    "Cat",
    "Donkey",
    "Elephant",
    "Emu",
    "Wolf",
    "Shark",
    "Eagle",
    "Fish"];

    var giphyTopic = "";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nSzHHzSjEbNt3M7pDHVcoanYXmUXj6RA&q=" +giphyTopic+ "&limit=10";
    var newInputGif = ""

    


$(document).ready(function(){

    var inputBox = $(`<input id="inputId" type="text" value="Anything You Want!!">`);
    var inputButton = $(`<button>`);
    inputButton.addClass(`clickBttn`).text(`Submit`);
    $(`#input`).append(inputButton,inputBox);



    for( i = 0; i < topics.length; i++ ){
        var gifButton = $(`<button>`);
        gifButton.addClass(`giphyButtons`).text(topics[i]);
        $(`#buttons`).append(gifButton);
        console.log(`this worked`);
    };
})


$(document).on('click', ".clickBttn", function() {
    
    var newGifBttn = $(`<button>`);
     newInputGif = $('input:text').val();
    newGifBttn.addClass(`giphyButtons`).text(newInputGif);
    $(`#buttons`).append(newGifBttn);
    console.log(`Did this work?`);
    $(`input`).val("");

});



// $(`.clickBttn`).on(`click`, function(){
//     var newGifBttn = $(`<button>`);
//     var newInputGif = $(`#inputID`).val();
//     newGifBttn.addClass(`giphyButtons`).text(newInputGif);
//     $(`#buttons`).append(newGifBttn);
//     console.log(`Did this work?`);


// })


$(document).on('click', ".giphyButtons", function(){

    $(`#anGifs`).empty();
 
    giphyTopic = $(this).text();
    queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nSzHHzSjEbNt3M7pDHVcoanYXmUXj6RA&q=" +giphyTopic+ "&limit=10";
    console.log(queryURL);



$.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    console.log(response);
    console.log(response.image_original_url);
    })
    .done(function(response){

        var results = response.data;


        for(i=0 ; i < results.length; i++){



        var imageUrl = results[i].images.fixed_height.url;        
        var anImage =  $("<img>");

        anImage.attr(`src`, imageUrl);
        anImage.attr(`alt`, `animal-Image`)

        $(`#anGifs`).prepend(anImage);

    }
    })

})
//this array will be of my favorite tv shows
//create an input box that accepts text
//if one of the buttons is clicked run a ajax call to gihpy returning 10 giphys of the show, only rated g and pg13
//Display those 10 gifs with the rating associated to them in the gif column
// if one of the buttons at the top is clicked clear the gif column and insert 10 new gifs associated to that button
// if anything is put into the input box and pressed enter it will auto create a new button for the top

// for(i=0 ; i < response.data.length;i++){

// }