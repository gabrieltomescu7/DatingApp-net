import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { NotExpr } from '@angular/compiler';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
//import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule], //NgIf 
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => { 
         console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout();

  }
}
