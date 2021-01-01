let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    let random = Math.random();
    console.log(random);
    if (random < 0.5) {
      this.state = 1;
      console.log(this.state);
    } else if (random > 0.5) {
      this.state = 0;
      console.log(this.state);
    }
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    let result = " ";
    if (this.state === 1) {
      result = "Heads";
      document.write("<br>");
    } else if (this.state === 0) {
      result = "Tails";
      document.write("<br>");
    }
    return " " + result;
  },
  toHTML: function () {
    let image = document.createElement("img");
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

    if (this.state === 1) {
      image.src = "./Images/Heads.jpg";
      image.style.height = "150px";
      image.style.width = "150px;";
      console.log("Heads Worked!!!");
      document.body.appendChild(image);
      document.write("<br>");
    } else if (this.state === 0) {
      image.src = "./Images/Tails.jpg";
      image.style.height = "150px";
      image.style.width = "150px;";
      console.log("Tails Worked!!");
      document.body.appendChild(image);
      document.write("<br>");
    }

    return image;
  },
};

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips,
// display the result of each flip as a string on the page (make use of your toString() method)
function display20() {
  for (let i = 0; i < 20; i++) {
    //let paraGraph = document.createElement("p");
    coin.flip();
    // document.write("<br>");
    document.body.append(coin.toString());
  }
}

// // Write a function called display20Images, again using a loop to flip the coin 20 times…
// //but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
    //  document.write("<br>");
    // display20();
  }
}

//coin.flip();
//coin.toString();
//coin.toHTML();
display20();

display20Images();
