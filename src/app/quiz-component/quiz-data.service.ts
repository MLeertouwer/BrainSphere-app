import { Injectable } from '@angular/core';
import { IQuestion } from './iquestion.model';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  private questions: IQuestion[] = [
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
      //easy science
      {
        question: "What is the symbol for Hydrogen?",
        choices: ["H", "He", "Hy"],
        answer: "H",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'He'?",
        choices: ["Helium", "Hydrogen", "Hassium"],
        answer: "Helium",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Lithium?",
        choices: ["L", "Li", "Lt"],
        answer: "Li",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'Be'?",
        choices: ["Boron", "Beryllium", "Bismuth"],
        answer: "Beryllium",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the element for the symbol 'C'?",
        choices: ["Calcium", "Carbon", "Copper"],
        answer: "Carbon",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Nitrogen?",
        choices: ["Ni", "Na", "N"],
        answer: "N",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'O'?",
        choices: ["Osmium", "Oganesson", "Oxygen"],
        answer: "Oxygen",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the element for the symbol 'F'?",
        choices: ["Iron", "Francium", "Fluorine"],
        answer: "Fluorine",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Neon?",
        choices: ["N", "Ne", "No"],
        answer: "Ne",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'Na'?",
        choices: ["Nitrogen", "Sodium", "Neptunium"],
        answer: "Sodium",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Magnesium?",
        choices: ["Mg", "Mn", "Ma"],
        answer: "Mg",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'Al'?",
        choices: ["Aluminum", "Argon", "Antimony"],
        answer: "Aluminum",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the element for the symbol 'Si'?",
        choices: ["Sulfur", "Silicon", "Selenium"],
        answer: "Silicon",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Phosphorus?",
        choices: ["P", "Ph", "Po"],
        answer: "P",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'S'?",
        choices: ["Scandium", "Sulfur", "Strontium"],
        answer: "Sulfur",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the element for the symbol 'Cl'?",
        choices: ["Carbon", "Calcium", "Chlorine"],
        answer: "Chlorine",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Argon?",
        choices: ["Ag", "Ar", "At"],
        answer: "Ar",
        category: "Science",
        level: "Easy"
      },
      {
        question: "Which element has the symbol 'K'?",
        choices: ["Krypton", "Potassium", "Argon"],
        answer: "Potassium",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the element for the symbol 'Ca'?",
        choices: ["Calcium", "Cadmium", "Carbon"],
        answer: "Calcium",
        category: "Science",
        level: "Easy"
      },
      {
        question: "What is the symbol for Iron?",
        choices: ["Ir", "In", "Fe"],
        answer: "Fe",
        category: "Science",
        level: "Easy"
      },

      //medium science
      {
        question: "What is the atomic number of oxygen?",
        choices: ["6", "8", "10"],
        answer: "8",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the chemical symbol for gold?",
        choices: ["Ag", "Au", "Al"],
        answer: "Au",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the SI unit for energy?",
        choices: ["Watt", "Joule", "Newton"],
        answer: "Joule",
        category: "Science",
        level: "Medium"
      },
      {
        question: "Which planet has the most moons?",
        choices: ["Saturn", "Jupiter", "Mars"],
        answer: "Saturn",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What part of the cell controls its activities?",
        choices: ["Mitochondria", "Nucleus", "Ribosome"],
        answer: "Nucleus",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the boiling point of water at sea level in Celsius?",
        choices: ["100°C", "90°C", "110°C"],
        answer: "100°C",
        category: "Science",
        level: "Medium"
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the main gas found in the Sun?",
        choices: ["Oxygen", "Hydrogen", "Helium"],
        answer: "Hydrogen",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the most common element in the universe?",
        choices: ["Oxygen", "Carbon", "Hydrogen"],
        answer: "Hydrogen",
        category: "Science",
        level: "Medium"
      },
      {
        question: "What is the chemical formula for water?",
        choices: ["H2O", "O2", "CO2"],
        answer: "H2O",
        category: "Science",
        level: "Medium"
      },
      //hard science
      {
      question: "What is the only element that lacks neutrons?",
      choices: ["Helium", "Hydrogen", "Lithium"],
      answer: "Hydrogen",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the second law of thermodynamics about?",
      choices: [
        "Energy conservation",
        "Entropy always increasing in an isolated system",
        "Force equals mass times acceleration"
      ],
      answer: "Entropy always increasing in an isolated system",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the chemical symbol for tungsten?",
      choices: ["W", "Tg", "Tu"],
      answer: "W",
      category: "Science",
      level: "Hard"
    },
    {
      question: "Which scientist proposed the theory of general relativity?",
      choices: ["Isaac Newton", "Albert Einstein", "Niels Bohr"],
      answer: "Albert Einstein",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the term for the positively charged particle in an atom?",
      choices: ["Proton", "Electron", "Neutron"],
      answer: "Proton",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the primary component of natural gas?",
      choices: ["Propane", "Methane", "Butane"],
      answer: "Methane",
      category: "Science",
      level: "Hard"
    },
    {
      question: "Which planet has the shortest day in the solar system?",
      choices: ["Earth", "Jupiter", "Mars"],
      answer: "Jupiter",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the speed of light in a vacuum, approximately?",
      choices: ["300,000 km/s", "150,000 km/s", "500,000 km/s"],
      answer: "300,000 km/s",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the strongest type of chemical bond?",
      choices: ["Ionic bond", "Covalent bond", "Hydrogen bond"],
      answer: "Covalent bond",
      category: "Science",
      level: "Hard"
    },
    {
      question: "What is the pH value of a neutral solution?",
      choices: ["0", "7", "14"],
      answer: "7",
      category: "Science",
      level: "Hard"
    },
      //Easy Math
      {
        question: "What is 7 + 3?",
        choices: ["9", "10", "11"],
        answer: "10",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 15 - 5?",
        choices: ["8", "9", "10"],
        answer: "10",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 4 x 2?",
        choices: ["6", "7", "8"],
        answer: "8",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 20 ÷ 4?",
        choices: ["4", "5", "6"],
        answer: "5",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 9 + 5?",
        choices: ["12", "13", "14"],
        answer: "14",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 12 - 7?",
        choices: ["5", "6", "7"],
        answer: "5",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 3 x 3?",
        choices: ["6", "7", "9"],
        answer: "9",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 18 ÷ 2?",
        choices: ["7", "8", "9"],
        answer: "9",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 10 + 10?",
        choices: ["15", "20", "25"],
        answer: "20",
        category: "Math",
        level: "Easy"
      },
      {
        question: "What is 6 x 4?",
        choices: ["20", "22", "24"],
        answer: "24",
        category: "Math",
        level: "Easy"
      },
      //Medium Math
      {
        question: "What is 15 + 28?",
        choices: ["40", "42", "43"],
        answer: "43",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is 36 ÷ 4?",
        choices: ["7", "8", "9"],
        answer: "9",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is 9 x 7?",
        choices: ["56", "63", "72"],
        answer: "63",
        category: "Math",
        level: "Medium"
      },
      {
        question: "Solve for x: 3x - 7 = 8",
        choices: ["3", "5", "7"],
        answer: "5",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is the square root of 81?",
        choices: ["7", "8", "9"],
        answer: "9",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is 2³?",
        choices: ["6", "8", "10"],
        answer: "8",
        category: "Math",
        level: "Medium"
      },
      {
        question: "If a triangle has sides of 5, 12, and 13, is it a right triangle?",
        choices: ["Yes", "No", "Not enough information"],
        answer: "Yes",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is 25% of 200?",
        choices: ["40", "50", "60"],
        answer: "50",
        category: "Math",
        level: "Medium"
      },
      {
        question: "What is 45 + 33?",
        choices: ["75", "77", "78"],
        answer: "78",
        category: "Math",
        level: "Medium"
      },
      {
        question: "Solve for x: 2x + 5 = 19",
        choices: ["6", "7", "8"],
        answer: "7",
        category: "Math",
        level: "Medium"
      },
      //Hard Math
      {
        question: "What is the derivative of f(x) = 3x² + 2x?",
        choices: ["6x + 2", "6x + 4", "3x + 2"],
        answer: "6x + 2",
        category: "Math",
        level: "Hard"
      },
      {
        question: "Solve for x: 2x² - 3x - 5 = 0",
        choices: ["-1, 5", "1, -5", "2, -3"],
        answer: "1, -5",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the integral of 2x with respect to x?",
        choices: ["x²", "2x²", "x³"],
        answer: "x²",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the area of a circle with radius 7?",
        choices: ["49π", "14π", "21π"],
        answer: "49π",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the sum of the angles in a hexagon?",
        choices: ["720°", "1080°", "1440°"],
        answer: "720°",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the solution to the equation 3x + 4 = 10?",
        choices: ["1", "2", "3"],
        answer: "2",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the derivative of f(x) = sin(x)?",
        choices: ["cos(x)", "-cos(x)", "sin(x)"],
        answer: "cos(x)",
        category: "Math",
        level: "Hard"
      },
      {
        question: "Solve for x: x² + 6x + 9 = 0",
        choices: ["-3", "3", "0"],
        answer: "-3",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the value of the limit: lim (x → 0) (sin(x) / x)?",
        choices: ["0", "1", "∞"],
        answer: "1",
        category: "Math",
        level: "Hard"
      },
      {
        question: "What is the value of the integral from 0 to 1 of (x² + 1) dx?",
        choices: ["2/3", "1", "4/3"],
        answer: "4/3",
        category: "Math",
        level: "Hard"
      }
    ];

    getQuestionsByCategory(category: string): IQuestion[] {
      return this.questions.filter((q) => q.category === category);
    }

    getCategories(): string[] {
      return [...new Set(this.questions.map((q) => q.category))]; // Unique categories
    }

    getQuestionByText(questionText: string): IQuestion | undefined {
      return this.questions.find(question => question.question === questionText);
    }

    getQuestionsByCategoryAndLevel(category: string, level: string | null): IQuestion[] {
      return this.questions.filter((q) => q.category === category && (!level || q.level === level));
    }

    getLevelsForCategory(category: string): string[] {
      const categoryLevels = this.questions
        .filter((q) => q.category === category && q.level)
        .map((q) => q.level!);
      return [...new Set(categoryLevels)];
    }
  }

