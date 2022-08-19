import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    @ViewChild('drawer', {static: false}) private drawer!: MatDrawer;
    private destroyed = new Subject<void>();
    public isOverSideNav: Observable<boolean>;
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        private breakpointObserver: BreakpointObserver
    ) {
        this.isOverSideNav = breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
            Breakpoints.HandsetLandscape,
            Breakpoints.Small
        ]).pipe(
            takeUntil(this.destroyed),
            map(m => m.matches),
            startWith(true),
            map(m => m),
            tap(t => t ? this.drawer?.close() : this.drawer?.open())
        );
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
