const cardObjectDefinitions = [
  {
    id: 1,
    imagePath: "images/cards-KingHearts.png",
  },
  {
    id: 2,
    imagePath: "images/cards-JackClubs.png",
  },
  {
    id: 3,
    imagePath: "images/cards-QueenDiamonds.png",
  },
  {
    id: 4,

    imagePath: "images/cards-AceSpades.png",
  },
];

function createCard(cardItem) {
  //create div elements that make up the card
  const cardElem = document.createElement("div");
  const cardInnerElem = document.createElement("div");
  const cardFrontElem = document.createElement("div");
  const cardBackElem = document.createElement("div");

  //create front and back image elements for the card

  const cardFrontImg = document.createElement("img");
  const cardBackImg = document.createElement("img");

  // add class and id to card elements
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //add class to inner card elements
  addClassToElement(cardInnerElem, "card-inner");

  //add class to front and back card elements
  addClassToElement(cardFrontElem, "card-front");

  // add class to back card elements
  addClassToElement(cardBackElem, "card-back");

  //add src attribute and appropriate value to img element - back of card
  addSrcToImageElem(cardBackElem, cardBackImgPath);

  //add src attribute and appropriate value to img element - front of card

  addSrcToImageElem(cardFrontElem, cardItem.imagePath);
}

function createCardElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}
