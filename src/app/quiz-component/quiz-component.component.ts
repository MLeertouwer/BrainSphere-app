import { Component, OnInit } from '@angular/core';
import { IQuestion } from './iquestion.model';
import { QuizDataService } from './quiz-data.service';
import { CommonModule } from '@angular/common';
import { TopbtnComponent } from "../topbtn/topbtn.component";
import { FormsModule } from '@angular/forms';
import { answerResults } from './ianswer-results.model';

@Component({
  selector: 'app-quiz-component',
  standalone: true,
  imports: [CommonModule, TopbtnComponent, FormsModule],
  templateUrl: './quiz-component.component.html',
  styleUrl: './quiz-component.component.css'
})

export class QuizComponent implements OnInit {
  userAnswers: answerResults[] = [];
  wrongAnswers: answerResults[] = [];

  categories: string[] = [];
  selectedCategory: string = null;
  questions: IQuestion[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizResult: boolean = false;
  correct: boolean = false;
  incorrect: boolean = false;
  showStartScreen: boolean = true;
  timeLeft = 0;
  intervalId: any;
  noWrongAnswers: boolean = false;
  showOptionMenu: boolean = false;
  randomOrder: boolean = false;
  timeChoice: boolean = false;
  timerDuration: number = 10;

  constructor(private quizDataService: QuizDataService) {}


  ngOnInit(): void {
    this.categories = this.quizDataService.getCategories();
  }


  get currentQuestion(): IQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  // Navigate back to the category menu
  onSelectBackToMenu(): void {
    this.selectedCategory = null;
    this.showOptionMenu = false;
    this.quizResult = false;
  }

  startMenu(): void{
    this.showStartScreen = true;
  }

  onGoToCategoryMenu(): void{
    this.showStartScreen = false;
    this.showOptionMenu = false;
   }

  shuffleQuestions(questions: IQuestion[]): IQuestion[] {
    const shuffled = [...questions]; // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  }

  prepareQuestions(): void {
    console.log("Random Order Toggle:", this.randomOrder);

    if (this.randomOrder) {
      this.questions = this.shuffleQuestions(this.questions);
    } else {
      console.log("Questions will remain in order", this.questions);
    }
  }

  startQuiz(): void {
    this.showStartScreen = false;
    this.showOptionMenu = false;

    this.prepareQuestions();

    this.startTimer();
  }

  // Select a category and load its questions
  onSelectCategory(category: string): void {
    this.prepareQuestions();

    this.selectedCategory = category;
    this.questions = this.quizDataService.getQuestionsByCategory(category);
    this.randomOrder = false;
    this.timeChoice = false;

    this.showStartScreen = false;
    this.currentQuestionIndex = 0;
    this.score = 0; // Reset score
    this.quizResult = false; // Reset quiz result
    this.correct = false; // Reset feedback flags
    this.incorrect = false;
    this.userAnswers = [];
    this.showOptionMenu = true;

    if (this.questions.length === 0) {
      // No questions available for this category
      this.quizResult = true;
      return;
    }
    this.startTimer();
  }

  startTimer() {

    if (!this.timeChoice) {
      clearInterval(this.intervalId); // Clear any existing interval
      this.timeLeft = 0;

      return;
    }

    clearInterval(this.intervalId); // Clear any existing interval
    this.timeLeft = this.timerDuration;
    this.incorrect = false;

    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(this.intervalId); // Stop the timer at zero
        this.incorrect = true; // Mark question as incorrect due to timeout

        this.userAnswers.push({
          question: this.currentQuestion.question,
          selectedAnswer: "No answer",
          correctAnswer: this.currentQuestion.answer,
          isCorrect: false,
          category: ''
        });

         setTimeout(() => {
          this.incorrect = false; // Reset incorrect state for the new question
          this.currentQuestionIndex++; // Move to the next question
          if (this.currentQuestionIndex >= this.questions.length) {
            this.quizResult = true;
          } else{
            this.startTimer(); // Restart timer for the next question
          }
        }, 900);
      }
    }, 1000);
  }

repeatWrongAnswers(): void{
  if (this.wrongAnswers.length === 0) {
    console.log("No wrong answers to retry.");
    return;
  }

 // Map the wrong answers back to the original questions with all their choices
 this.questions = this.wrongAnswers.map(wrongAnswer => {
  const originalQuestion = this.quizDataService.getQuestionByText(wrongAnswer.question);
  if (!originalQuestion) {
    return null;
  }
  return originalQuestion; // Keep the original structure, including choices
}).filter(question => question !== null) as IQuestion[];

  this.resetQuizState();
  this.showOptionMenu = true;

  if (this.randomOrder) {
    this.questions = this.shuffleQuestions(this.questions);
  }

  if (this.timeChoice) {
    this.startTimer();
  }
}

resetQuizState(): void {
  this.currentQuestionIndex = 0;
  this.score = 0;
  this.quizResult = false;
  this.correct = false;
  this.incorrect = false;
  this.userAnswers = [];
  this.wrongAnswers = [];
}

  onRandomOrderChange(): void {
  console.log("Random order toggled. Current value:", this.randomOrder);
  console.log(this.questions);
 }

 onTimedQuestionsChange(): void {
  console.log("Timed questions toggled. Current value:", this.timeChoice);
 }

  // Handle user answering a question
  onAnswer(selectedAnswer: string): void {
    const currentQuestion = this.currentQuestion;

    clearInterval(this.intervalId); // Stop the timer as soon as the user answers

    // Make sure there is a valid current question
    if (!currentQuestion) return;

    //Determine if answer given is correct
    const isCorrect = selectedAnswer === currentQuestion.answer;

     // Store the user's answer, the correct answer, and whether it was correct
     this.userAnswers.push({
      question: this.currentQuestion.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect: isCorrect,
      category: this.selectedCategory, // Include category here
    });

    if (!isCorrect) {
      this.wrongAnswers.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        category: this.selectedCategory,
        selectedAnswer: ''
      });
    }

    // Check if the answer is correct
    if (isCorrect) {
      this.score++;
      this.correct = true;
      this.incorrect = false;
    } else {
      this.incorrect = true;
      this.correct = false;
  }

    setTimeout(() => {
      this.correct = false;
      this.incorrect = false;
      this.startTimer();
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex >= this.questions.length) {
        this.quizResult = true;
        this.wrongAnswers = this.userAnswers.filter(answer => !answer.selectedAnswer || !answer.isCorrect);
      }
    }, 1000);  // 1 second delay to let the user see the color change
  }

  getScorePercentage(){
    const scorePercentage = (this.score / this.questions.length) * 100;

    if(scorePercentage === 100){
      return 'score-ring-green';
    } else if( scorePercentage >= 60){
      return 'score-ring-green';
    } else if(scorePercentage >= 40){
      return 'score-ring-orange';
    } else {
      return 'score-ring-red';
    }
  }

  getScoreMessage(){
    const scorePercentage = (this.score / this.questions.length) * 100;

    if(scorePercentage === 100){
      return "Wow! You really are a pro on this subject!";
    } else if( scorePercentage >= 60){
      return "Good Job! Keep up the good work!"
    } else if( scorePercentage >= 40){
      return "Keep up the motivation! you're almost there!"
    } else{
      return "Don't worry, just practice some more!"
    }
  }
}