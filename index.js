// Get the modal - 360s
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// Get the modal - videos
var vidmodal = document.getElementById('myModalVid');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var vid = document.getElementById('myVid');
var modalVid = document.getElementById("vid01");
var vidcaptionText = document.getElementById("vidcaption");
img.onclick = function(){
    vidmodal.style.display = "block";
    modalVid.src = this.src;
    vidcaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  vidmodal.style.display = "none";
}
