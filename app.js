class Pet {
    constructor() {
      this.hunger = 50;
      this.energy = 50;
      this.happiness = 50;
      this.updateStats();
    }
  
    updateStats() {
      document.getElementById('hunger').textContent = this.hunger;
      document.getElementById('energy').textContent = this.energy;
      document.getElementById('happiness').textContent = this.happiness;
    }
  
    feed() {
      this.hunger = Math.max(0, this.hunger - 10);
      this.energy = Math.min(100, this.energy + 5);
      this.updateStats();
    }
  
    play() {
      if (this.energy >= 10) {
        this.happiness = Math.min(100, this.happiness + 10);
        this.energy -= 10;
      }
      this.updateStats();
    }
  
    sleep() {
      this.energy = Math.min(100, this.energy + 20);
      this.hunger = Math.min(100, this.hunger + 5);
      this.updateStats();
    }
  }
  
  const pet = new Pet();
  
  document.getElementById('feed').addEventListener('click', () => pet.feed());
  document.getElementById('play').addEventListener('click', () => pet.play());
  document.getElementById('sleep').addEventListener('click', () => pet.sleep());
  