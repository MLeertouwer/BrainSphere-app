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
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Show the button only if the scroll position exceeds a fraction of the page height
  this.showTopButton = scrollPosition > (documentHeight - windowHeight) * 0.98;
  }

  scrollToTop() {
    window.scrollTo({ top: 80, behavior: 'smooth' });
  }
     ngOnInit() {}
  }

