import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpprogressService {
    private _loading: BehaviorSubject<boolean>;
    get loading(): BehaviorSubject<boolean> { return this._loading; }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    constructor( ) { 
        this._loading = new BehaviorSubject<boolean>(false);
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    onRequestStarted(): void { 
        this._loading.next(true); 
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    onRequestFinished(): void { 
        this._loading.next(false); 
    }
}
