import { AfterViewChecked, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExtendbottom]'
})
export class ExtendbottomDirective implements OnInit, AfterViewChecked, OnDestroy {
    @Input() offset = 0;
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    ngAfterViewChecked(): void {
        const t = document.body.clientHeight - this.el.nativeElement.getBoundingClientRect().top;
        this.renderer.setStyle(this.el.nativeElement, 'height', (t - this.offset) + 'px');
        // this.renderer.setStyle(this.el.nativeElement, 'overflow-y', 'auto');
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    ngOnDestroy(): void {
        this.renderer.setStyle(this.el.nativeElement, 'height', '200px');
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
}
