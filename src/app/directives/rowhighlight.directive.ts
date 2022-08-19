import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appRowhighlight]'
})
export class RowhighlightDirective {
    private orgColor: string = 'initial';
    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.orgColor = this.el.nativeElement.style.backgroundColor;
        this.highlight('lightgray');
        this.el.nativeElement.style.cursor = 'pointer';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.orgColor);
        this.el.nativeElement.style.cursor = 'auto';
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
