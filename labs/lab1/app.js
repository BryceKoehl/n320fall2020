var myDog = {
  name: "Fido",
  height: 10,
  color: "brown",
  bark: function () {
    console.log(this.name + " barks!");
  },
};

myDog.bark();
