'use strict';

function getDogImage() {
  let breed =  $('#breed').val().toLowerCase();
  if(breed.split(" ").length > 1){breed = `${breed.split(" ")[1]}/${breed.split(" ")[0]}`}
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "success"){
        handleResponse(responseJson.message);
        } else {
      $('#image-container').html("<span>Breed not found. Please try another.</span>");
      }
    });
    
}

function handleResponse(response){
  $('#image-container').html(`<img src=${response} alt="picture of puppy">`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
