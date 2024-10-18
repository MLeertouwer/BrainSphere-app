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
      }
    ];

    getQuestionsByCategory(category: string): Question[] {
      return this.questions.filter((q) => q.category === category);
    }

    getCategories(): string[] {
      return [...new Set(this.questions.map((q) => q.category))]; // Unique categories
    }
  }

