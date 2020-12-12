//this builds up the view and details the user can see when they click on a constellation
class Stargaze {
  static detailsView;
  static constellations;
  static setUp() {
    Stargaze.constellations = [];
    Stargaze.detailsView = new DetailsView();

    // this pulls the json data and makes it usable by the app
    $.getJSON("../data/data.json", function (data) {
      for (var constellation of data.constellations) {
        var details = constellation.constellationDetails;
        var stars = [];
        for (var starName of details.composition) {
          var star = new Star(starName);
          stars.push(star);
        }
        Stargaze.constellations.push(
          new Constellation(
            details.name,
            details.img,
            details.discription,
            stars
          )
        );
      }
    });
  }

  // when the user clicks a constellation it sets the appropriate information up to be pulled into the details view.
  static setDetailsView(idx) {
    Stargaze.detailsView.setConstellation(Stargaze.constellations[idx]);
    // console.log(Stargaze.detailsView);
  }
}

//this class allows us to set the information from the json to the constellation
class Constellation {
  constructor(name, img, discription, composition) {
    this.name = name;
    this.img = img;
    this.discription = discription;
    this.composition = composition;
  }
  getName() {
    return this.name;
  }
  getIMG() {
    return this.img;
  }
  getDisc() {
    return this.discription;
  }
  getStars() {
    var starNames = "";
    for (var star of this.composition) {
      starNames += star.getName() + ", ";
    }
    return starNames;
  }
}

// the star class is used to make the array of stars in a constellations composition and turn it into a useable string.
class Star {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class DetailsView {
  constructor() {}

  //turns on the detailsView and calls the functions to fill in the corresponding data.
  setConstellation(constellation) {
    this.constellation = constellation;
    // $("#detailsView").css("display", "block");
    document.getElementById("detailsView").style.display = "flex";
    this.showConstellationName();
    this.showConstellationIMG();
    this.showConstellationComp();
    this.showConstellationDisc();
  }
  getConstellation() {
    return this.constellation;
  }

  //sets the innerhtml to the appropriate name
  showConstellationName() {
    // return this.constellation.getName();
    // $("#name").html(this.constellation.getName());
    document.getElementById("name").innerHTML = this.constellation.getName();
  }
  //sets the src to the appropriate code to get the img
  showConstellationIMG() {
    document.getElementById("img").src = this.constellation.getIMG() + ".jpg";
  }
  //sets the innerhtml to the appropriate discription
  showConstellationDisc() {
    document.getElementById("disc").innerHTML = this.constellation.getDisc();
  }
  //sets the innerhtml to the string of stars that make up the constellation.
  showConstellationComp() {
    document.getElementById("comp").innerHTML = this.constellation.getStars();
  }
  clearConstellation() {
    this.constellation = null;
    // $("#detailsView").css("display", "none");
    document.getElementById("detailsView").style.display = "none";
  }
}

// $(document).ready(function () {
// Stargaze.setUp();
// });

//call our setup function allowing the program to run
Stargaze.setUp();
