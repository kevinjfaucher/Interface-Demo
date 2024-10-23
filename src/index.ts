

interface Animal {
    animalName: string;
    speak: () => void;
}

class Dog implements Animal {
    animalName: string;

    constructor(animalName: string) {
        this.animalName = animalName;
    }

    speak () {
        console.log("Woof!");
    }
}