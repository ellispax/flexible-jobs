import { Component, OnInit } from '@angular/core';
import { send } from 'emailjs-com';
import { EmailService } from 'src/app/shared/email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit{
  ngOnInit() {
    // this.sendEmail();
  }
  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail().then(() => {
      // Email sent successfully
      alert('Email sent successfully!');
    }).catch((error) => {
      // Error sending email
      alert('Error sending email. Please try again later.');
      console.error('Error sending email:', error);
    });
  }
}
