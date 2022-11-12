import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[sideMenu]',
})

export class sideMenuDirective {

    constructor(private element: ElementRef, private rendere: Renderer2){}

    @HostListener('document:click',['$event.target'])swipeIn(target: HTMLElement){
        if(target.classList.contains('backdrop') || target.tagName==='A'){
            this.rendere.setStyle(this.element.nativeElement, 'display', 'none')
        }
    }
}
