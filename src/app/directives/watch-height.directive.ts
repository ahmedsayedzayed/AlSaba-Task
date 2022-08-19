import { Directive, AfterViewChecked, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appWatchHeight]'
})
export class WatchHeightDirective implements OnInit, AfterViewChecked, OnDestroy {

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
    }

    // ngAfterViewChecked() {
    //     const t = document.body.clientHeight - this.el.nativeElement.getBoundingClientRect().top;
    //     this.renderer.setStyle(this.el.nativeElement, 'height', t + 'px');
    // }
    ngAfterViewChecked(): void {
        const t = document.body.clientHeight - this.el.nativeElement.getBoundingClientRect().top;
        this.renderer.setStyle(this.el.nativeElement, 'height', t + 'px');
    }

    ngOnDestroy(): void {
        this.renderer.setStyle(this.el.nativeElement, 'height', '200px');
    }


}
