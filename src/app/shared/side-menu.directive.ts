import { Directive, ElementRef, HostListener, Renderer2, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[sideMenu]',
})

export class sideMenuDirective {
    @Input('sideMenu')sideNavElement: HTMLElement
    constructor(private element: ElementRef, private rendere: Renderer2){}

    @HostListener('document:click',['$event.target'])swipeIn(target: HTMLElement){
        if(target.classList.contains('backdrop') || target.tagName==='A'){
            this.rendere.setStyle(this.sideNavElement, 'transform', 'translateX(-100%)')
            this.rendere.setStyle(this.element.nativeElement, 'opacity', '0')
            setTimeout(()=>{
                this.rendere.setStyle(this.element.nativeElement, 'display', 'none')
            }, 300)
        }
    }
}
