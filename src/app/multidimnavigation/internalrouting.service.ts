import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface IInternalRoute {
    text: string;
    link: string;
    tags: string;
    icon?: string;
}

@Injectable()
export class InternalroutingService {
    public sideNavLinksArrBeh:IInternalRoute[] = [
        { text: 'Roles Management', link: 'roles-management', icon: 'group', tags: '' },
    ]
    public sideNavLinksArr: IInternalRoute[] = [];
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    constructor(
    ) {
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
}
