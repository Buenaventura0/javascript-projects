// Returns a random DNA base.
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)]; 
}

// Returns a random single strand of DNA containing 15 bases.
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  };
  return newStrand;
}

// Set up a factory to streamline pAequor fiction organism production.
const pAequorFactory = (id, mockUpStrand) => {
  const pAequor = {
    specimenNum: id,
    dna: mockUpStrand,
    // Replicate a rapid mutation behavior.
    mutate() {
      let randomBase = returnRandBase();
      console.log(`Random base selected: ${randomBase}`);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === randomBase) {
          while (this.dna[i] === randomBase) {
            this.dna[i] = returnRandBase();
          }
        }
      }
      return this.dna;
    },

    // Compare samples of pAequor organisms based on their DNA chain.
    compareDNA(pAequor) {
      let sharedDNA = 0;
      let percentage = 0;
      console.log(this.dna);
      console.log(pAequor.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          sharedDNA++;
        }
      }
      sharedDNA /= 15;
      percentage = sharedDNA * 100;
      console.log(`The shared DNA of the specimen ${this.specimenNum}º is ${percentage}% in total with the specimen ${pAequor.specimenNum}º.`);
    },

    // Test the chances of survival in their natural enviroment based on 'C' and 'G' bases.
    willLikelySurvive() {
      let totalOdds = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          totalOdds++;
        }
      }
      totalOdds /= 15;
      totalOdds *= 100;
      if (totalOdds >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
  return pAequor;
}

// Set up a working batch of at least 30 organisms to study.
const setSurvivalBatch = () => {
  let surviveBatch = [];
  let testBatch = [];
  let total = 0;
  for (let i = 0; i < 100; i++) {
    testBatch.push(pAequorFactory(i, mockUpStrand()));
    if (testBatch[i].willLikelySurvive() === true) {
      surviveBatch.push(testBatch[i]);
      total++;
    }
    if (total < 30) {
      continue;
    } else {
      break;
    }
  }
  console.log(surviveBatch);
}

// Test if everything works creating two samples.
let specimen1 = pAequorFactory(1, mockUpStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());

// Call the function to create the working barch.
setSurvivalBatch();