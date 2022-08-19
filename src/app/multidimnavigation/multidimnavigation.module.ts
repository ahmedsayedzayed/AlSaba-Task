import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnavbarComponent } from './hnavbar/hnavbar.component';
import { VnavbarComponent } from './vnavbar/vnavbar.component';
import { RouterModule } from '@angular/router';
import { InternalroutingService } from './internalrouting.service';
import { ContainerComponent } from './container/container.component';
import { DirectivesModule } from '../directives/directives.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
    declarations: [
        HnavbarComponent,
        VnavbarComponent,
        ContainerComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        DirectivesModule,
    ],
    exports: [
        HnavbarComponent, VnavbarComponent
    ],
    providers: [InternalroutingService]
})
export class MultiDimNavigationModule { }
