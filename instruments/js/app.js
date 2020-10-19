

class Instrument {
  constructor(family, loudness, verb){
    this.family = family;
    this.loudness = loudness;
   
    this.verb = verb;
  }

  play() {
    console.log(this.family + " " + this.verb + " at " + this.loudness);
  }
}

class Woodwind extends Instrument{
  constructor(family, loudness, verb){
    super(family, loudness, verb);    
  }
}

class String extends Instrument{
  constructor(family, loudness, verb){
    super(family, loudness, verb);   
  }
}

class Percussion extends Instrument{
  constructor(family, loudness, verb){
    super(family, loudness, verb);
  }
}



let sections =[]
sections[0]= new Woodwind("Flutes", "forte", "trill");
sections[1]= new String("Harps", "mezzo-forte", "strum");
sections[2]= new Percussion("Drums", "mezzo-piano", "play triplets");

sections.forEach((instrument)=>{
  instrument.play();
})