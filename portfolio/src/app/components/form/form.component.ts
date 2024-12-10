import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild, Renderer2, ElementRef } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @ViewChild("message_sent") message_sent!: ElementRef;

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    name: ["", [Validators.required]],
    email: ["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9\._]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/)]],
    content: ["", [Validators.required]]

  });

  constructor(private renderer: Renderer2, private router: Router, private http : HttpClient) {}

  backToHome(): void {
    this.router.navigate(["/"]);

  }

  isSpace(str: string): boolean {
    return str.trim() === "";

  }


  onSubmit(): void {
    if (this.profileForm.invalid) {
      alert("Por favor, preencha todos os campos");
      return;

    }

    this.http.post("http://localhost:5000/api/send-email", this.profileForm.value, { responseType: "text" }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)

    });

    setTimeout(() => {
      this.renderer.addClass(this.message_sent.nativeElement, "show");

      setTimeout(() => {
        this.renderer.removeClass(this.message_sent.nativeElement, "show");

        this.backToHome();

      }, 3000);

    }, 0);

  }

}
