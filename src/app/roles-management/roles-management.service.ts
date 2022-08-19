import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    return this.http.get(`${ROLES_ENs.getMenuByRoleId}`, { params: params }).pipe(map((res: any) => res.result)).pipe(
      tap(res => console.log(res)),
      map(res => { 
        return this.buildTree(res)
      })
    )
  }
  // ------------------------------------------------------------------------------------------------------------------------------------
  private buildTree(res: any) { 
    
    let tree: any[] = [];
    let objTypes: any[] = [];
    for (let i = 0; i < res.length; i++) { 
      const el = res[i];
      objTypes.indexOf(el.objectType) == -1 ? objTypes.push(el.objectType) : null;
      if (el.parentid == 0) {
        tree.push(el);
        let all = res;
        tree.find(obj => el == obj).children = all.filter((obj: any) => tree.find(obj => el == obj).objectId == obj.parentid && obj.objectType == 0);
        tree.find(obj => el == obj).hasChildren = true;
      }
    }
    // console.log(objTypes);
    // let arr: any[] = [];
    // for (let i = 0; i < objTypes.length; i++) {
    //   const element = objTypes[i];
    //   arr[i] = res.filter((obj:any)=> element == obj.objectType)
    // }
    // console.log(arr);
    
    for (let i = 0; i < res.length; i++) { 
      const el = res[i];
      if (el.parentid != 0 && el.objectType != 0) {
        for (let y = 0; y < tree.length; y++) { 
          if (tree[y].hasChildren) { 
            for (let x = 0; x < tree[y].children.length; x++) {
              const element = tree[y].children[x];
              if (el.parentid == tree[y].children[x].objectId) { 
                tree[y].children[x].children == undefined ? tree[y].children[x].children = [] : tree[y].children[x]?.children?.push(el);
              }
            }
          }
        }
      }
    }
    // console.log(tree);
    return tree;
  }
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------
    
}
