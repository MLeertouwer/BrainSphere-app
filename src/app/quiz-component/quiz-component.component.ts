import { Component, OnInit } from '@angular/core';
import { Question } from './questionmodel';
import { QuizDataService } from './quiz-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-component.component.html',
  styleUrl: './quiz-component.component.css'
})
export class QuizComponent implements OnInit {
  userAnswers: {
    question: string,
    selectedAnswer: string,
    correctAnswer: string,
    isCorrect: boolean
  }[] = [];

  wrongAnswers:
  { question: string,
    selectedAnswer: string,
    correctAnswer: string }[] = [];

  categories: string[] = [];
  selectedCategory: string | null = null;
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizResult: boolean = false;
  correct: boolean = false;
  incorrect: boolean = false;
  showStartScreen: boolean = true;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit(): void {
    this.categories = this.quizDataService.getCategories();
  }

  // Safe getter for the current question
  get currentQuestion(): Question | null {
    return this.questions.length > 0 && this.currentQuestionIndex < this.questions.length
      ? this.questions[this.currentQuestionIndex]
      : null;
  }

  // Navigate back to the category menu
  onSelectBackToMenu(): void {
    this.selectedCategory = null;
  }

  startQuiz(): void {
    this.showStartScreen = false;
  }

  startMenu(): void{
    this.showStartScreen = true;
  }

  // Select a category and load its questions
  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.questions = this.quizDataService.getQuestionsByCategory(category);
    console.log("Questions for selected category:", this.questions);
    this.showStartScreen = false;
    this.currentQuestionIndex = 0;
    this.score = 0; // Reset score
    this.quizResult = false; // Reset quiz result
    this.correct = false; // Reset feedback flags
    this.incorrect = false;
    this.userAnswers = [];

    if (this.questions.length === 0) {
      // No questions available for this category
      this.quizResult = true;
      return;
    }
  }

  // Handle user answering a question
  onAnswer(selectedAnswer: string): void {
    const currentQuestion = this.currentQuestion;

    // Make sure there is a valid current question
    if (!currentQuestion) return;

    //Determine if answer given is correct
    const isCorrect = selectedAnswer === currentQuestion.answer;

     // Store the user's answer, the correct answer, and whether it was correct
     this.userAnswers.push({
      question: currentQuestion.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect: isCorrect
    });

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
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex >= this.questions.length) {
        this.quizResult = true;
        this.wrongAnswers = this.userAnswers.filter(answer => !answer.isCorrect);
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
      return 'score-ring-red'
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