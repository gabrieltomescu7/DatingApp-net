import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  //@Output() cancelRegister = new EventEmitter(); //emitem eveniment din child component
  cancelRegister = output<boolean>();
  model : any = {}

  register () {
    this.accountService.register(this.model).subscribe({
      next : response => {
        console.log(response);
        this.cancel();
      },
      error : error => console.log(error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}