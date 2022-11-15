import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromPdfJslib from 'pdfjs-dist'

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  
  // If absolute URL from the remote server is provided, configure the CORS
  // header on that server.
  url='../assets/resume.pdf'

  @ViewChild('theCanvas') canvas: ElementRef
  @ViewChild('canvasContainer') canvasContainer: ElementRef
  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    // The workerSrc property shall be specified.
    fromPdfJslib.GlobalWorkerOptions.workerSrc='//cdn.jsdelivr.net/npm/pdfjs-dist@3.0.279/build/pdf.worker.js'
    
    // Asynchronous download of PDF
    let loadingtask = fromPdfJslib.getDocument(this.url)
    loadingtask.promise.then((pdf)=>{

      // Fetch the first page
      let pageNumber = 1
      pdf.getPage(pageNumber).then((page)=>{
        let scale = 1
        let viewport = page.getViewport({scale: scale})
        // scale = this.canvasContainer.nativeElement.clientWidth / (viewport.width)
        // viewport = page.getViewport({scale: scale})

        // Prepare canvas using PDF page dimensions
        let canvas: HTMLCanvasElement = this.canvas.nativeElement
        let context = canvas.getContext('2d')
        canvas.height = viewport.height
        canvas.width = viewport.width

        // Render PDF page into canvas context
        let renderContext = {
          canvasContext: context,
          viewport: viewport,
        }

        let renderTask = page.render(renderContext)
        renderTask.promise.then(()=>{
        })
      }) 
    }, (reason)=>{
      // PDF loading error
      console.error(reason)
    })
  }
}
