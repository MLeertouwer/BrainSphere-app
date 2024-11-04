import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, } from '@angular/core';

@Component({
  selector: 'app-topbtn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbtn.component.html',
  styleUrl: './topbtn.component.css'
})
export class TopbtnComponent implements OnInit{
   showTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect if the user is near the bottom of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Show button when user is within 100px of the bottom
    this.showTopButton = scrollPosition >= pageHeight - 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 80, behavior: 'smooth' });
  }
     ngOnInit() {}
  }

