// Copyright (c) 2022 Grace s All rights reserved
//
// Created by: Grace S
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict";

function calculate () {
  
  // input
  let width = parseFloat(document.getElementById('width').value)
  let length = parseFloat(document.getElementById('length').value)
  let height = parseFloat(document.getElementById('height').value)
  
  // process
  let surfaceArea = 2*(width * length + height * length + height  * width)
  
  // output
  document.getElementById('surface-area').innerHTML = 'The surface area of the rectangular prism is: ' + surfaceArea.toFixed(2) + ' cm²'
}

 // Volume process for user input
function calculateVolume () {
  
  // input
  let widthVolume = parseFloat(document.getElementById('width-volume').value)
  let lengthVolume = parseFloat(document.getElementById('length-volume').value)
  let heightVolume = parseFloat(document.getElementById('height-volume').value)
  
  // process
  let rectangularPrismVolume = (widthVolume * lengthVolume * heightVolume)
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the rectangular prism is ' + rectangularPrismVolume.toFixed(2) + ' cm<sup>3</sup>'
}