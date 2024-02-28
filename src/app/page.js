// "use client";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [data, setdata] = useState();
//   const [url, seturl] = useState()

//   useEffect(() => {
//     // handlesubmit();
//     myfetch();
//   }, []);

// // const handlesubmit = async () => {
//   //   setdisabled("disabled");
//   //   alert();
//   //   const res = await fetch(`https://taazatime.com/`, {
//   //     credentials: "include",
//   //     mode: "no-cors",
//   //     method: "GET",
//   //     headers: {
//   //       Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//   //       "Content-Type": "text/html; charset=UTF-8",
//   //     },
//   //   });
//   //   const response = await res;
//   //   console.log(response);

//   // };

//   const myfetch=async()=>{
//     const res = await fetch(`http://localhost:3000/api/gettoken`, {
//       credentials: "include",
//       mode: "no-cors",
//       method: "POST",
//       headers: {
//         Accept: "*/*",
//         "Content-Type": "text/html; charset=UTF-8",
//       },
//      body: JSON.stringify({ url: null })
//     });
//     const response = await res.json();
//     if (response) {
//       let str = response.response.toString();

//       var tempDiv = document.createElement("div");

//       //Set the innerHTML of the div with your HTML string
//       tempDiv.innerHTML = str;

//       // Get the anchor tag by its ID or any other selector
//      tempDiv.getElementsByClassName(
//         "header-wrap"
//       )[0].remove();
//       tempDiv.getElementsByClassName(
//         "footer-wrap"
//       )[0].remove();
//       var images = tempDiv.getElementsByClassName('featured-img');
//       console.log(images);

//       // Convert HTMLCollection to array
//       var imagesArray = Array.from(images);

//       // Loop through each image
//       imagesArray.forEach(function(img) {
//           // Get the value of the data-src attribute
//           var dataSrc = img.getAttribute('data-src');
//           console.log(dataSrc);

//           // Set the value of the src attribute to the value of data-src attribute
//           img.setAttribute('src', dataSrc);

//           // Remove the data-src attribute if needed
//           img.removeAttribute('data-src');
//       });

//       var anchorTags = tempDiv.querySelectorAll('.p-flink, .p-url');
// // Loop through each anchor tag
// var anchorArray = Array.from(anchorTags);

// anchorArray.forEach(function(anchor) {
//     // Add click event listener

//     let url=anchor.href;
//     var match = url.match(/\/([^\/]+)\/$/);

// // Extract the matched part
// var extractedPart = match ? match[1] : null;

// console.log(extractedPart); // Output: best-zero-balance-bank-account
// anchor.href="/post/"+extractedPart

// });

//       document.getElementById("mydownload").innerHTML=tempDiv.innerHTML.toString();
//     }
//   }
//   // document.getElementById("mydownload").innerHTML=data

//   return (
//     <>
//         <a href="/aboust">dfdfdf</a>
//       <div id="mydownload" className="mydownload overflow-hidden w-[95vw] md:w-[80vw] mx-auto flex min-h-screen h-fit flex-col  px-6  lg:px-8 items-center">
//       </div>
//     </>
//   );
// }

"use client";
import React, { useEffect } from "react";

const page = ({ params }) => {
  let slugs = params;
  let myparams = Array.isArray(slugs.slug) ? slugs.slug.join("/") : slugs.slug;
  console.log(myparams);
  useEffect(() => {
    myfetch();
  }, []);
  const myfetch = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/gettoken`, {
      credentials: "include",
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "text/html; charset=UTF-8",
      },
      body: JSON.stringify({ url: myparams, type: "author" }),
    });
    const response = await res.json();
    if (response) {
      let str = response.response.toString();
      
      let substr = '<link rel="canonical" href="//taazatime.com/" />';
      let newStr = str.replace(new RegExp(substr, "g"), "");
      substr ='<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","legalName":"TaazaTime.com","url":"https://taazatime.com/"}</script>';
      newStr = newStr.replace(new RegExp(substr, "g"), "");
      substr ='<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","legalName":"TaazaTime.com","url":"https://taazatime.com/"}</script>';
      newStr = newStr.replace(new RegExp(substr, "g"), "");

      substr ='<amp-auto-ads type="adsense" data-ad-client="ca-pub-5230855937296637">';
      newStr = newStr.replace(new RegExp(substr, "g"), "");
      substr ='<link rel="alternate" type="application/rss+xml" title="TaazaTime.com»Feed" href="//taazatime.com/feed/">';
      newStr = newStr.replace(new RegExp(substr, "g"), "");

      console.log("gffh:" + newStr.includes(substr));
      console.log(str);
      var tempDiv = document.createElement("div");

      //Set the innerHTML of the div with your HTML string
      tempDiv.innerHTML = newStr;

      // Get the anchor tag by its ID or any other selector
      tempDiv.getElementsByClassName("header-wrap")[0].remove();
      tempDiv.getElementsByClassName("footer-wrap")[0].remove();
      tempDiv.getElementsByClassName("rank-math-schema-pro")[0].remove();
      tempDiv.getElementsByClassName("pagination-wrap")[0].remove();
      var images = tempDiv.querySelectorAll("img");

      // Convert HTMLCollection to array
      var imagesArray = Array.from(images);

      // Loop through each image
      imagesArray.forEach(function (img) {
        // Get the value of the data-src attribute
        var dataSrc = img.getAttribute("data-src");
        // console.log(dataSrc);

        // Set the value of the src attribute to the value of data-src attribute
        img.setAttribute("src", dataSrc);

        // Remove the data-src attribute if needed
        img.removeAttribute("data-src");
      });

      var sharetags = tempDiv.querySelectorAll(".share-action");
      console.log(sharetags);

      // Convert HTMLCollection to array
      var sharetagsarray = Array.from(sharetags);

      // Loop through each image
      sharetagsarray.forEach(function (tag) {
        // Get the value of the data-src attribute
        var title = tag.getAttribute("data-title");

        // Set the value of the src attribute to the value of data-src attribute
        tag.innerHTML = title;
      });

      var anchorTags = tempDiv.querySelectorAll(
        ".p-flink, .p-url, .meta-avatar,.meta-author a , .pagination-wrap a"
      );
      // Loop through each anchor tag
      var anchorArray = Array.from(anchorTags);

      anchorArray.forEach(function (anchor) {
        // Add click event listener

        let url = anchor.href;
        let modifiedUrl = url.replace("https://taazatime.com", "");

        // Extract the matched part
        // var extractedPart = match ? match[1] : null;

        // console.log(modifiedUrl); // Output: best-zero-balance-bank-account
        anchor.href = modifiedUrl;
      });

      document.getElementById("mydownload").innerHTML =
        tempDiv.innerHTML.toString();
    }
  };
  return (
    <>
      <div
        id="mydownload"
        className="mydownload overflow-hidden w-[95vw] md:w-[80vw] mx-auto flex min-h-screen h-fit flex-col  px-6  lg:px-8 items-center"
      ></div>
    </>
  );
};

export default page;
