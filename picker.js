function newBackgroundColor(bcolor) {
   document.body.style.backgroundColor = bcolor;
   document.bcolorForm.selectedcolor.value = bcolor;
}

function inputCodeB() {
   let bcolor = document.getElementById('codeB').value;
   document.body.style.backgroundColor = bcolor;
}

function newFontColor(fcolor) {
   document.getElementById('textInput').style.color = fcolor;
   document.fcolorForm.selectedcolor.value = fcolor;
}

function inputCodeF() {
   let fcolor = document.getElementById('codeF').value;
   document.getElementById('textInput').style.color = fcolor;
}