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
  categories: string[] = [];
  selectedCategory: string | null = null;
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizResult: boolean = false;
  correct: boolean = false;
  incorrect: boolean = false;

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

  // Select a category and load its questions
  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.questions = this.quizDataService.getQuestionsByCategory(category);
    console.log("Questions for selected category:", this.questions);
    this.currentQuestionIndex = 0;
    this.score = 0; // Reset score
    this.quizResult = false; // Reset quiz result
    this.correct = false; // Reset feedback flags
    this.incorrect = false;

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

    // Check if the answer is correct
    if (selectedAnswer === currentQuestion.answer) {
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
      }
    }, 1000);  // 1 second delay to let the user see the color change
  }
}