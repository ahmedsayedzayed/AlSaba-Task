import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROLES_ENs } from '../services/apiURLs';

@Injectable({
  providedIn: 'root'
})
export class RolesManagementService {

  constructor(
    private svcSnackbar: MatSnackBar,
    private http: HttpClient,
  ) { }
  // ------------------------------------------------------------------------------------------------------------------------------------
  public getSystemRoles(): Observable<any> { 
    return this.http.get(`${ROLES_ENs.getSystemRoles}`).pipe(map((res: any) => res.result));
  }
  // ------------------------------------------------------------------------------------------------------------------------------------
  public getMenuByRoleId(roleId: number): Observable<any> { 
    let params = new HttpParams();
    params = params.append('RoleId',`${roleId}`)
    return this.http.get(`${ROLES_ENs.getMenuByRoleId}`, {params: params}).pipe(map((res: any) => res.result));
  }
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
    
}
