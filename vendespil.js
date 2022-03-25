'use strict';
/**
 * createPage - Creates page content on load of minimal html
 */
const $ = function (foo) { return document.getElementById(foo);}

const removelistener = function()
{
  for (let i = 0; i < arr.length; i++)
  {
    "v"+i.removeEventListener('click', cl);
  }
}
const activatelistener = function()
{
  for (let i = 0; i < arr.length; i++)
  {
    "v"+i.addEventListener('click', cl);
  }
}
const temp = [];
const temp2 = [];
const temp3 = [];
let points = 0;
const createPage = function() {
    const arr = [];
    for (let i = 0; i < 2; i++)
    {
      for (let j = 0; j < 50; j++)
      {
        arr.push(j);
      }
    }

    arr.sort(() => Math.random() - 0.5);
    localStorage.setItem("Bruger", 0);
    localStorage.getItem("Bruger");
    $("po").textContent = localStorage.getItem("Bruger");
    let b = $('bod');                               // points to body
    //let h1 = document.createElement('h1');
    //let h1t = document.createTextNode('Vendespil');
    //h1.appendChild(h1t);
    //h1.setAttribute('style', 'color: yellow');        // style one way
    //b.appendChild(h1);
    for (let i = 0; i < 100; i++) {
        let d = document.createElement('div');
        d.style.textAlign = 'center';
        d.style.verticalAlign = 'middle';
        d.style.fontSize = '40px';
        d.style.border = '1px solid blue';          // style another way
        d.style.border = "none";
        d.style.backgroundColor = 'silver';
        //d.style.paddingTop = "10px";
        d.setAttribute('id', "v"+i);              // ref to stylesheet
        b.appendChild(d);
        d.addEventListener('click', function cl(e)
        {
          if (e.target.innerText === "")
          {
            e.target.innerText = arr[i];
            temp.push(arr[i]);
            temp2.push("v"+i);
            if (temp.length === 2)
            {
              $("btn1").disabled = false;
              if (temp[0] === temp[1])
              {
                $(temp2[0]).removeEventListener('click', cl);
                $(temp2[1]).removeEventListener('click', cl);
                temp3.push($(temp2[0]));
                temp3.push($(temp2[1]));
                $("text").textContent = "Tillykke, du havde to ens kort!";
                points++;
                localStorage.setItem("Bruger", points);
                $("po").textContent = localStorage.getItem("Bruger");
                //localStorage.removeItem("Bruger");
              }
              else
              {
                $("text").textContent = "Desværre, du havde ikke to ens kort!"
              }
            }
          }
          else
          {
            e.target.innerText = "";
            $("text").textContent = "";
          }
          //e.target.appendChild(document.createTextNode(i));
          //e.target.appendChild(d.style.backgroundColor = "green");
          //e.target.style.backgroundColor = "green";
          //e.target.removeEventListener('click', cl);
          //e.target.innerText = i;
        });
    }
$('btn1').addEventListener('click', function()
{
      $("btn1").disabled = true;
      if (temp[0] === temp[1])
      {
        $(temp2[0]).style.backgroundColor = "black";
        $(temp2[1]).style.backgroundColor = "black";
      }
      $(temp2[0]).textContent = "";
      $(temp2[1]).textContent = "";
      temp.length = 0;
      temp2.length = 0;
      $("text").textContent = "";
 });
$("btn1").disabled = true;
}
window.addEventListener('load', createPage);