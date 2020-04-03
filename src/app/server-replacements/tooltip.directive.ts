import { Directive, OnInit, AfterViewInit, OnChanges, OnDestroy, Input, ElementRef, Renderer, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[mzTooltip], [mz-tooltip]',
})
export class MzTooltipDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @Input() delay: number;
    @Input() html: boolean;
    @Input() position: string;
    @Input() tooltip: string;

    targetElement: JQuery;
    constructor(private elementRef: ElementRef, private renderer: Renderer) {}
    ngOnInit(): void {}
    ngAfterViewInit(): void {}
    ngOnChanges(changes: SimpleChanges): void {}
    ngOnDestroy(): void {}
    initElements(): void {}
    initTooltip(): void {}
}
