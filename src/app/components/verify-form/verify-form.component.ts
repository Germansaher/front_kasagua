import { Component } from '@angular/core';
import { VerifyService } from '../../services/verify.service';

@Component({
  selector: 'app-verify-form',
  standalone: false,
  templateUrl: './verify-form.component.html',
  styleUrl: './verify-form.component.css'
})
export class VerifyFormComponent {
  email = '';
  message = '';

  constructor(private verify: VerifyService) {}

  onSubmit() {
    this.verify.verify(this.email).subscribe(
      html => this.message = html,
      err => this.message = 'Error al verificar'
    );
  }
}
