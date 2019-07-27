---
title: "Basic Understanding of File Api"
date: "2019-07-25"
thumbnail: "../thumbnails/js.png"
tags:
    - "javascript"
---

 One of my favourite and exciting topic was how can i implement file uploading in my website. I used to watch youtube videos where they do it with `PHP`. But they all just don't workout for me. Thank god there's `File API` which  allows javascript to access information about file like `Name`, `Last modified`, `Type`, `Size`, `webkitRelativePath`. Let's dive deeper on how to use it.
 
 ```HTML
 <!--  to get file as input -->
<input type="file">

 ```
 Initial input value would be zero and as the user selects file it changes.
 ```js
//  fire an event handler when the input value changes
    document.addEventListener('change',function(e){
        console.log(e)
    })
 ```



