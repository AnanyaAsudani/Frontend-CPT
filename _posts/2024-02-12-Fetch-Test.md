---
toc: true
comments: false
layout: post
title: Fetch Test
description: Example Blog!!!  This shows planning and notes from hacks.
type: plans
courses: { compsci: {week: 10} }
---

<button onclick="onClick()">
Test Button
</button>

<script>
function onClick(){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("http://localhost:8086/api/users/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  </script>