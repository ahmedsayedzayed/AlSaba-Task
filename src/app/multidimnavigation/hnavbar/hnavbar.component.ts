import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
// import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-hnavbar',
    templateUrl: './hnavbar.component.html',
    styleUrls: ['./hnavbar.component.css']
})
export class HnavbarComponent implements OnInit {
    // public loggedUser: string = '';
    // Decorators------------------------------------------------
    @Output() toggleSideNavEvent = new EventEmitter<boolean>();
    constructor(
        public svcAuth: AuthService,
    ) {
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    public toggle(): void {
        this.toggleSideNavEvent.emit(true);
    }
}
