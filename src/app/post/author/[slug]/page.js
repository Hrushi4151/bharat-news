'use client'
import React,{useEffect} from 'react'

const page = ({ params }) => {
  useEffect(() => {
    myfetch();
  }, []);
  const myfetch=async()=>{
    const res = await fetch(`http://localhost:3000/api/gettoken`, {
      credentials: "include",
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "text/html; charset=UTF-8",
      },
      body: JSON.stringify({ url: params,type:"author" }),
    });
    const response = await res.json();
    if (response) {
      let str = response.response.toString();

      var tempDiv = document.createElement("div");

      //Set the innerHTML of the div with your HTML string
      tempDiv.innerHTML = str;

      // Get the anchor tag by its ID or any other selector
     tempDiv.getElementsByClassName(
        "header-wrap"
      )[0].remove();
      tempDiv.getElementsByClassName(
        "footer-wrap"
      )[0].remove();
      var images = tempDiv.querySelectorAll('img');
      console.log(images);
      
      // Convert HTMLCollection to array
      var imagesArray = Array.from(images);
      
      // Loop through each image
      imagesArray.forEach(function(img) {
          // Get the value of the data-src attribute
          var dataSrc = img.getAttribute('data-src');
          console.log(dataSrc);
      
          // Set the value of the src attribute to the value of data-src attribute
          img.setAttribute('src', dataSrc);
      
          // Remove the data-src attribute if needed
          img.removeAttribute('data-src');
      });

      var sharetags = tempDiv.querySelectorAll('.share-action');
      console.log(sharetags);
      
      // Convert HTMLCollection to array
      var sharetagsarray = Array.from(sharetags);
      
      // Loop through each image
      sharetagsarray.forEach(function(tag) {
          // Get the value of the data-src attribute
          var title = tag.getAttribute('data-title');
          
      
          // Set the value of the src attribute to the value of data-src attribute
          tag.innerHTML=title
      
      });
      
      var anchorTags = tempDiv.querySelectorAll('.p-flink, .p-url, .meta-avatar');
// Loop through each anchor tag
var anchorArray = Array.from(anchorTags);

anchorArray.forEach(function(anchor) {
    // Add click event listener
    
    let url=anchor.href;
    let modifiedUrl = url.replace("https://taazatime.com/", "");

// Extract the matched part
// var extractedPart = match ? match[1] : null;

console.log(modifiedUrl); // Output: best-zero-balance-bank-account
anchor.href="/post/"+modifiedUrl

});
      
  
      document.getElementById("mydownload").innerHTML=tempDiv.innerHTML.toString();
    } 
  }
  return (
    <>
      <div id="mydownload" className="mydownload overflow-hidden w-[95vw] md:w-[80vw] mx-auto flex min-h-screen h-fit flex-col  px-6  lg:px-8 items-center">
      </div>
    </>
  )
}

export default page