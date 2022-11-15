import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('console')con: ElementRef
  @ViewChild('text')textCont: ElementRef
  @ViewChild('consoleContainer')consContainer: ElementRef
  
  targetText = ""
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // function([string1, string2],target id,[color1,color2])  
  consoleText(words: string[], id: ElementRef, colors: string[]) {
    if (colors === undefined){
      colors = ['#fff'];
    }
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = id.nativeElement
    this.renderer.setStyle(target, 'color', colors[0])
    
    setInterval(() => {
      if (letterCount === 0 && waiting === false) 
      {
        waiting = true;
        this.targetText = words[0].substring(0, letterCount)
        setTimeout(() => {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          this.renderer.setStyle(target, 'color' , colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } 

      else if (letterCount === words[0].length + 1 && waiting === false)
      {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } 
      
      else if (waiting === false) 
      {
        this.targetText = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)

    setInterval(() => {
      if (visible === true) {
        this.renderer.setAttribute(this.con.nativeElement, 'class', 'console-underscore hidden')
        visible = false;
  
      } else {
        this.renderer.setAttribute(this.con.nativeElement, 'class', 'console-underscore')
        visible = true;
      }
    }, 400)
  }
  ngAfterViewInit(): void {
    console.log(this.textCont)
    this.consoleText(
      ['Front End Web Developer', 'Engineer', 'Quick Learner'],
      this.textCont ,
      ['#ce2a56']
    )
  }
}
