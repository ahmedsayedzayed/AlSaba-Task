import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { RolesManagementService } from '../roles-management.service';

@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: ['./roles-management.component.scss']
})
export class RolesManagementComponent implements OnInit {
  public systemRolesObs: Observable<any> = this.rolesManagementSVC.getSystemRoles();

  constructor(private rolesManagementSVC: RolesManagementService) {
  }

  ngOnInit(): void {
  }

  public roleSelectionChange(e: MatSelectChange) {
    console.log(e.value);
    this.rolesManagementSVC.getMenuByRoleId(e.value).subscribe(res => {
      console.log(res);
    });
  }

}
