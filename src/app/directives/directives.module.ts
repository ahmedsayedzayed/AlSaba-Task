import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowhighlightDirective } from './rowhighlight.directive';
// import { RowactiveDirective } from './rowactive.directive';
// import { DelayedHoverDirective } from './delayed-hover.directive';
import { WatchHeightDirective } from './watch-height.directive';
// import { CcwatchheightDirective } from './ccwatchheight.directive';
import { ExtendbottomDirective } from './extendbottom.directive';
import { WatchHeighSideNavtDirective } from './sideNav-watch-height.directive';



@NgModule({
  declarations: [
      RowhighlightDirective, 
    //   RowactiveDirective, 
    //   DelayedHoverDirective, 
      WatchHeightDirective, 
    //   CcwatchheightDirective, 
    ExtendbottomDirective,
    WatchHeighSideNavtDirective
    ],
  imports: [
    CommonModule
  ],
  exports: [
    RowhighlightDirective,
    // RowactiveDirective,
    // DelayedHoverDirective,
    WatchHeightDirective,
    // CcwatchheightDirective,
    ExtendbottomDirective,
    WatchHeighSideNavtDirective
  ]
})
export class DirectivesModule { }
