import { Interface } from 'readline'
import { initServer } from './demo-express/server'

console.log('Welcome to the DEMO')

interface BankAccount {
  name: string,
  iban: string,
  amount: number,
  createdAt: Date,
}

const accounts: BankAccount[] = []
const accounts2: Array<BankAccount> = []

const bankAccount1: BankAccount = {
  name: "Claire",
  iban: "FR76 154 789 456 123",
  amount: 500,
  createdAt: new Date(),
}

const bankAccount2: BankAccount = {
  name: "Anais",
  iban: "FR76 321",
  amount: 300,
  createdAt: new Date(),
}
accounts.push(bankAccount1);
accounts.push(bankAccount2);

// start express demo :
// initServer()
function findBy<T>(list: Array<T>, key: keyof T, value: string): T | undefined {
  return list.find(el => el[key] === value)
}

const accountFound = findBy<BankAccount>(accounts, 'iban', 'FR76 321')
console.log(accountFound)


const celsiusToFahrenheit = (celsius: number) => {
  return (celsius * 9 / 5) + 32

}
// celsiusToFahrenheit(15)
/* console.log(celsiusToFahrenheit(15))
console.log(celsiusToFahrenheit(30))
console.log(celsiusToFahrenheit(35))
console.log(celsiusToFahrenheit(45)) */

/* Objectif: Créez une fonction TypeScript pour filtrer les nombres pairs dans un tableau.

  Instructions :
Créez une fonction filterEvenNumbers qui prend un argument numbers de type number[].
Utilisez la méthode filter() pour ne conserver que les nombres pairs du tableau.
Retournez le tableau filtré.
Testez la fonction avec différents tableaux de nombres et vérifiez que seuls les nombres pairs sont retournés. */

/* const filterEvenNumbers: number(numbers: number[]) => {
  if (numbers !== null) {
    numbers.map(element => console.log(element)) 
    const result = numbers.filter(el => el%2 ===0 );
    }
} */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filterEvenNumbers(numbers: number[]) {
  if (numbers !== null) {
    var resultEvenNumbers: number[] = numbers.filter(el => el % 2 === 0)

    return resultEvenNumbers

  }
}
console.log(filterEvenNumbers(numbers))


/* Objectif: Créez des classes TypeScript pour différents types d'animaux de compagnie qui implémentent une interface définie.

Instructions:
Créez une interface Pet avec les propriétés et méthodes suivantes:
name: string: nom de l'animal de compagnie
age: number: âge de l'animal de compagnie
speak(): string: méthode pour obtenir le son produit par l'animal de compagnie
Créez une classe Dog qui implémente l'interface Pet.
Ajoutez un constructeur à la classe Dog pour initialiser les propriétés name et age.
Implémentez la méthode speak() pour renvoyer la chaîne de caractères "Woof!".
Créez une classe Cat qui implémente l'interface Pet.
Ajoutez un constructeur à la classe Cat pour initialiser les propriétés name et age.
Implémentez la méthode speak() pour renvoyer la chaîne de caractères "Meow!".
Créez une classe Parrot qui implémente l'interface Pet.
Ajoutez un constructeur à la classe Parrot pour initialiser les propriétés name, age et une propriété supplémentaire words de type string[] pour stocker les mots que le perroquet peut prononcer.
Implémentez la méthode speak() pour renvoyer une chaîne de caractères contenant tous les mots que le perroquet peut prononcer, séparés par des virgules.
Créez des instances des classes Dog, Cat et Parrot et testez la méthode speak() pour vérifier que les sons produits sont corrects.
 */

interface Pet {
  name: string,
  age: number,
  speak(): string,
}

class Dog implements Pet {
  constructor(
    public name: string,
    public age: number) { }

  speak(): string {
    return "says woof woof!"
  };
}

class Cat implements Pet {
  constructor(
    public name: string,
    public age: number) { }

  speak(): string {
    return "says meow!"
  };
}

class Parrot implements Pet {
  constructor(
    public name: string,
    public age: number,
    private words: string[]) { }


  speak(): string {
    return this.words.join(', ');
  };
}

let woofy = new Dog("Ochka", 3);
let lizzie = new Cat("Lizzie", 3);
let coco = new Parrot("Coco", 3, ["Bonjour", "attention", "arrête!", "non!", "stop!", 'chut!']);
console.log(woofy.speak())
console.log(lizzie.speak())
console.log(coco.speak())

/* Exercice 4 : Gestion d'une file d'attente générique
Objectif: Créez une classe TypeScript générique pour gérer une file d'attente avec des opérations d'ajout et de suppression d'éléments.

Instructions:
Créez une classe générique Queue < T > avec une propriété privée elements de type T[] pour stocker les éléments de la file d'attente.
Ajoutez une méthode enqueue(element: T) pour ajouter un élément à la fin de la file d'attente.
Ajoutez une méthode dequeue(): T | null pour retirer et renvoyer le premier élément de la file d'attente, ou null si la file d'attente est vide.
Ajoutez une méthode isEmpty(): boolean pour vérifier si la file d'attente est vide.
Ajoutez une méthode size(): number pour obtenir la taille de la file d'attente.
Testez la classe Queue avec différents types d'éléments et vérifiez que les opérations de file d'attente fonctionnent correctement.
 */

class Queue<T> {
  constructor(
    private elements: T[]
  ) { }


  enqueue(elements: T) {
    this.elements.push();
  };

  dequeue(elements: T | null) {
    if (elements == !null) {
      return this.elements.shift()
    }
    return null
  }

  isEmpty(elements: T | null): boolean {
    if (elements) {
      return true
    } else {
      return false
    }
  }

  size(): number {
    return this.elements.length
  }
}
let myWaitingList = new Queue(["test", "rest", "again", "and", "again"]);
console.log(`size() ${myWaitingList.size()}`);
myWaitingList = new Queue(["test", "rest", "again", "and", "again"]);
// console.log(`isEmpty() ${myWaitingList.isEmpty(["test", "rest", "again", "and", "again"])}`);

/* Créez une interface Contact avec les propriétés suivantes:
id: string: identifiant unique du contact
name: string: nom du contact
email: string: adresse e - mail du contact
phone ?: string : numéro de téléphone du contact(optionnel)
Créez une classe AddressBook avec une propriété privée contacts de type Contact[] pour stocker les contacts.
Ajoutez des méthodes pour effectuer les opérations suivantes:
Rechercher des contacts par nom, e - mail ou numéro de téléphone
Ajouter un nouveau contact
Modifier les informations d'un contact existant
Supprimer un contact en fonction de son identifiant
Gérez les erreurs et les cas particuliers, par exemple les contacts en double ou les contacts inexistants.
Testez la classe AddressBook avec différents scénarios d'utilisation pour vérifier que les opérations de gestion 
des contacts fonctionnent correctement. */

interface Contact {
  id: string,
  name: string,
  email: string,
  phone?: string

}

class AddressBook {
  constructor(
    private contacts: Contact[]) { }

  findContact<T>(key: keyof Contact, value: string) {
    return this.contacts.find(element => element[key] === value)
  }


  addContact(contact: Contact) {
    this.contacts.push(contact)
  }
}
