import { Injectable } from '@angular/core';
import { Question } from './questionmodel';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  private questions: Question[] = [
      {
        question: "What is the name of the most popular 3x3 cube solving method?",
        choices: ["CFOP", "Roux", "ZZ"],
        answer: "CFOP",
        category: "speedcubing"
      },
      {
        question: "What is the world record single solve for 3x3?",
        choices: ["3.47 seconds", "4.22 seconds", "5.55 seconds"],
        answer: "3.47 seconds",
        category: "speedcubing"
      },
      {
        question: "Which cube size is known as the 'Megaminx'?",
        choices: ["2x2", "5x5", "Dodecahedron"],
        answer: "Dodecahedron",
        category: "speedcubing"
      },
      {
        question: "What is 'lookahead' in speedcubing?",
        choices: [
          "Planning moves ahead while solving",
          "A method of scrambling the cube",
          "A type of cube lubricant"
        ],
        answer: "Planning moves ahead while solving",
        category: "speedcubing"
      },
      {
        question: "Who is considered one of the pioneers of modern speedcubing?",
        choices: ["Feliks Zemdegs", "Max Park", "Mats Valk"],
        answer: "Feliks Zemdegs",
        category: "speedcubing"
      },
      {
        question: "Which method uses block-building as a key solving strategy?",
        choices: ["Roux", "CFOP", "Petrus"],
        answer: "Roux",
        category: "speedcubing"
      },
      {
        question: "What does 'OLL' stand for in CFOP?",
        choices: ["Orientation of the Last Layer", "Optimization of Layering Lines", "Organizing Layers Logically"],
        answer: "Orientation of the Last Layer",
        category: "speedcubing"
      },
      {
        question: "What is the name of the organization that regulates official cubing competitions?",
        choices: ["World Cube Association", "Global Cubing Federation", "International Cube League"],
        answer: "World Cube Association",
        category: "speedcubing"
      },
      {
        question: "Which cube is larger: 7x7 or 9x9?",
        choices: ["7x7", "9x9", "They are the same size"],
        answer: "9x9",
        category: "speedcubing"
      },
      {
        question: "What is considered a 'DNF' in speedcubing?",
        choices: ["Did Not Finish", "Double Notation Fault", "Disqualified Next Finish"],
        answer: "Did Not Finish",
        category: "speedcubing"
      },
      {
        question: "What is the average of 5 solves called in official competitions?",
        choices: ["Mean of 5", "Average of 5", "Cumulative 5"],
        answer: "Average of 5",
        category: "speedcubing"
      },
      {
        question: "Who are the two main detectives in Flikken Maastricht?",
        choices: ["Eva van Dongen and Floris Wolfs", "Marion Dreesen and Romeo Sanders", "Fiona de Jong and Peter Moens"],
        answer: "Eva van Dongen and Floris Wolfs",
        category: "Flikken Maastricht"
      },
      {
        question: "In which city is Flikken Maastricht set?",
        choices: ["Amsterdam", "Maastricht", "Rotterdam"],
        answer: "Maastricht",
        category: "Flikken Maastricht"
      },
      {
        question: "What is the profession of Eva van Dongen in the series?",
        choices: ["Detective", "Forensic Scientist", "Lawyer"],
        answer: "Detective",
        category: "Flikken Maastricht"
      },
      {
        question: "Which character in the show is known for having a troubled past?",
        choices: ["Floris Wolfs", "Romeo Sanders", "Marion Dreesen"],
        answer: "Floris Wolfs",
        category: "Flikken Maastricht"
      },
      {
        question: "Who plays the role of Floris Wolfs in Flikken Maastricht?",
        choices: ["Oda Spelbos", "Angela Schijf", "Victor Reinier"],
        answer: "Victor Reinier",
        category: "Flikken Maastricht"
      },
      {
        question: "Which character often provides comic relief in the show?",
        choices: ["Romeo Sanders", "Eva van Dongen", "Floris Wolfs"],
        answer: "Romeo Sanders",
        category: "Flikken Maastricht"
      },
      {
        question: "In which season did Floris Wolfs and Eva van Dongen first become partners?",
        choices: ["Season 3", "Season 1", "Season 5"],
        answer: "Season 1",
        category: "Flikken Maastricht"
      },
      {
        question: "What type of crimes are most commonly investigated in Flikken Maastricht?",
        choices: ["Murder and organized crime", "Financial fraud", "Traffic violations"],
        answer: "Murder and organized crime",
        category: "Flikken Maastricht"
      },
      {
        question: "Which character is a forensic expert in the series?",
        choices: ["Marion Dreesen", "Romeo Sanders", "Timo"],
        answer: "Timo",
        category: "Flikken Maastricht"
      },
      {
        question: "What is the symbol for Hydrogen?",
        choices: ["H", "He", "Hy"],
        answer: "H",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'He'?",
        choices: ["Helium", "Hydrogen", "Hassium"],
        answer: "Helium",
        category: "Science"
      },
      {
        question: "What is the symbol for Lithium?",
        choices: ["L", "Li", "Lt"],
        answer: "Li",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'Be'?",
        choices: ["Boron", "Beryllium", "Bismuth"],
        answer: "Beryllium",
        category: "Science"
      },
      {
        question: "What is the element for the symbol 'C'?",
        choices: ["Calcium", "Carbon", "Copper"],
        answer: "Carbon",
        category: "Science"
      },
      {
        question: "What is the symbol for Nitrogen?",
        choices: ["Ni", "Na", "N"],
        answer: "N",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'O'?",
        choices: ["Osmium", "Oganesson", "Oxygen"],
        answer: "Oxygen",
        category: "Science"
      },
      {
        question: "What is the element for the symbol 'F'?",
        choices: ["Iron", "Francium", "Fluorine"],
        answer: "Fluorine",
        category: "Science"
      },
      {
        question: "What is the symbol for Neon?",
        choices: ["N", "Ne", "No"],
        answer: "Ne",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'Na'?",
        choices: ["Nitrogen", "Sodium", "Neptunium"],
        answer: "Sodium",
        category: "Science"
      },
      {
        question: "What is the symbol for Magnesium?",
        choices: ["Mg", "Mn", "Ma"],
        answer: "Mg",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'Al'?",
        choices: ["Aluminum", "Argon", "Antimony"],
        answer: "Aluminum",
        category: "Science"
      },
      {
        question: "What is the element for the symbol 'Si'?",
        choices: ["Sulfur", "Silicon", "Selenium"],
        answer: "Silicon",
        category: "Science"
      },
      {
        question: "What is the symbol for Phosphorus?",
        choices: ["P", "Ph", "Po"],
        answer: "P",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'S'?",
        choices: ["Scandium", "Sulfur", "Strontium"],
        answer: "Sulfur",
        category: "Science"
      },
      {
        question: "What is the element for the symbol 'Cl'?",
        choices: ["Carbon", "Calcium", "Chlorine"],
        answer: "Chlorine",
        category: "Science"
      },
      {
        question: "What is the symbol for Argon?",
        choices: ["Ag", "Ar", "At"],
        answer: "Ar",
        category: "Science"
      },
      {
        question: "Which element has the symbol 'K'?",
        choices: ["Krypton", "Potassium", "Argon"],
        answer: "Potassium",
        category: "Science"
      },
      {
        question: "What is the element for the symbol 'Ca'?",
        choices: ["Calcium", "Cadmium", "Carbon"],
        answer: "Calcium",
        category: "Science"
      },
      {
        question: "What is the symbol for Iron?",
        choices: ["Ir", "In", "Fe"],
        answer: "Fe",
        category: "Science"
      },
      {
        question: "What is 25 + 37?",
        choices: ["52", "62", "64"],
        answer: "62",
        category: "Math"
      },
      {
        question: "What is 56 - 19?",
        choices: ["37", "39", "41"],
        answer: "37",
        category: "Math"
      },
      {
        question: "What is 9 x 7?",
        choices: ["63", "56", "72"],
        answer: "63",
        category: "Math"
      },
      {
        question: "What is 48 ÷ 6?",
        choices: ["6", "7", "8"],
        answer: "8",
        category: "Math"
      },
      {
        question: "What is the square of 5?",
        choices: ["10", "20", "25"],
        answer: "25",
        category: "Math"
      },
      {
        question: "Which is the greatest: 3.5, 3.75, or 3.25?",
        choices: ["3.5", "3.75", "3.25"],
        answer: "3.75",
        category: "Math"
      },
      {
        question: "What is 6 squared (6^2)?",
        choices: ["26", "36", "46"],
        answer: "36",
        category: "Math"
      },
      {
        question: "Solve for x: 3x = 27",
        choices: ["7", "8", "9"],
        answer: "9",
        category: "Math"
      },
      {
        question: "What is the perimeter of a rectangle with length 5 and width 8?",
        choices: ["26", "28", "30"],
        answer: "26",
        category: "Math"
      },
      {
        question: "What is 15% of 80?",
        choices: ["10", "12", "15"],
        answer: "12",
        category: "Math"
      },
      {
        question: "If you roll a fair six-sided die, what is the probability of rolling a 4?",
        choices: ["1/4", "1/5", "1/6"],
        answer: "1/6",
        category: "Math"
      },
      {
        question: "What is 0.75 as a fraction?",
        choices: ["3/4", "1/2", "1/4"],
        answer: "3/4",
        category: "Math"
      },
      {
        question: "What is the area of a square with side length 9?",
        choices: ["36", "72", "81"],
        answer: "81",
        category: "Math"
      },
      {
        question: "What is the result of 3³?",
        choices: ["6", "9", "27"],
        answer: "27",
        category: "Math"
      },
      {
        question: "Which of the following is a prime number: 9, 12, or 11?",
        choices: ["9", "12", "11"],
        answer: "11",
        category: "Math"
      },
      {
        question: "What is the least common multiple of 4 and 5?",
        choices: ["10", "15", "20"],
        answer: "20",
        category: "Math"
      },
      {
        question: "What is 1.5 x 4?",
        choices: ["5", "6", "7"],
        answer: "6",
        category: "Math"
      },
      {
        question: "What is 3/4 of 16?",
        choices: ["10", "12", "14"],
        answer: "12",
        category: "Math"
      },
      {
        question: "What is the volume of a cube with side length 3?",
        choices: ["9", "18", "27"],
        answer: "27",
        category: "Math"
      },
      {
        question: "If a rectangle has an area of 24 and a width of 4, what is the length?",
        choices: ["6", "8", "10"],
        answer: "6",
        category: "Math"
      }
    ];

    getQuestionsByCategory(category: string): Question[] {
      return this.questions.filter((q) => q.category === category);
    }

    getCategories(): string[] {
      return [...new Set(this.questions.map((q) => q.category))]; // Unique categories
    }
  }

