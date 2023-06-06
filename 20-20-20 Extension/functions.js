/** Variablen und Funktionen Jan */
/*-------------------------------------*/
//Text replacement

let modifiedTextMap = new Map();

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    modifiedTextMap.set(node, node.textContent);
    node.textContent = "Take a break! Focus on a object 20 feet away for 20 seconds!";
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (const childNode of node.childNodes) {
      replaceText(childNode);
    }
  }
}

function restoreText(node) {
  if (node.nodeType === Node.TEXT_NODE && modifiedTextMap.has(node)) {
    node.textContent = modifiedTextMap.get(node);
    modifiedTextMap.delete(node);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (const childNode of node.childNodes) {
      restoreText(childNode);
    }
  }
}

//Image Replacement

let filenames = [
    "pexels-andrea-piacquadio-3768164.jpg",
    "pexels-andrea-piacquadio-3790848.jpg",
    "pexels-anna-shvets-5067878.jpg",
    "pexels-george-milton-7034472.jpg",
    "pexels-iqbal-farooz-15817179.jpg",
    "pexels-michael-burrows-7125530.jpg"
];

let imgs = document.getElementsByTagName('img');
let old_images = []

function replaceImage() {
    for (imgElt of imgs) {
      let r = Math.floor(Math.random() * filenames.length);
      let file = 'Img/' + filenames[r];
      let url = browser.extension.getURL(file);
      old_images.push(imgElt.src)
      imgElt.src = url;
      console.log(url);
    }
  }
  
  function restoreImage() {
    let index = 0;
    for (imgElt of imgs) {
      let file = old_images[index];
      let url = browser.extension.getURL(file);
      imgElt.src = url;
      console.log(url);
      index++;
    }
    old_images = [];
  }
  
/** Variablen und Funktionen Anuschka */
/*-------------------------------------*/
function twenty() {
  // Create Message
  let imgMessage = document.createElement("img");
  imgMessage.src = browser.extension.getURL("Img/error.png");
  imgMessage.id = "imgMessageTwenty";
  imgMessage.classList.add("imgMessageTwenty");
  imgMessage.style.width = "200px";
  imgMessage.style.position = "fixed";
  imgMessage.style.top = "20px";
  imgMessage.style.left = "20px";
  imgMessage.style.zIndex = "9999";
  document.body.appendChild(imgMessage);

  // Change Font
  let elements = document.querySelectorAll("*");
  for (let i = 0; i < elements.length; i++) {
    //randomNumber = Math.round(Math.random());
    elements[i].style.transition = "0.5s";
    elements[i].style.fontSize = "20pt";
  }

  setTimeout(() => {
    // Change IMG
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.width = "20%";
    }
  }, 1000); // 20000 milliseconds = 20 seconds

  // Create Clones
  let h1Tags = Array.from(document.querySelectorAll("h1"));
  let h2Tags = Array.from(document.querySelectorAll("h2"));
  let h3Tags = Array.from(document.querySelectorAll("h3"));
  let h4Tags = Array.from(document.querySelectorAll("h4"));
  let h5Tags = Array.from(document.querySelectorAll("h5"));
  let h6Tags = Array.from(document.querySelectorAll("h6"));
  let pTags = Array.from(document.querySelectorAll("p"));
  let aTags = Array.from(document.querySelectorAll("a"));
  let buttonTags = Array.from(document.querySelectorAll("button"));
  let imgTags = Array.from(document.querySelectorAll("img"));

  let textTags = [...h1Tags, ...h2Tags, ...h3Tags, ...h4Tags, ...h5Tags, ...h6Tags, ...pTags, ...aTags, ...buttonTags, ...imgTags];
  let counter = 0;

  setTimeout(() => {
    let interval = setInterval(() => {
      counter++;

      textTags.forEach((e) => {
        let clonedElement = e.cloneNode(true);
        let originalRect = e.getBoundingClientRect();
        clonedElement.classList.add("cloneFromTimerExtension");
        clonedElement.style.position = "absolute";
        clonedElement.style.top = (originalRect.top + (20 * counter)) + "px";
        clonedElement.style.left = (originalRect.left + (20 * counter)) + "px";
        document.body.appendChild(clonedElement);
      });

      imgMessage = document.getElementsByClassName("imgMessageTwenty");
      imgMessage.forEach((e) => {
        e.style.position = "fixed";
      });
      
      if (counter === 20) {
        clearInterval(interval);
      }
    }, 250);
  }, 2000); // 20000 milliseconds = 20 seconds
}

function restoreTwenty() {
  // Del Clones
  let clones = document.querySelectorAll(".cloneFromTimerExtension");
  clones.forEach((e) => {
    e.remove();
  });

  // Del Message
  document.getElementById("imgMessageTwenty").remove();
  document.body.style.paddingTop = "0px";

  // Restore Font
  let elements = document.querySelectorAll("*");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "";
    elements[i].style.width = "";
  }
}

/** Variablen und Funktionen Nastia */
/*-------------------------------------*/

