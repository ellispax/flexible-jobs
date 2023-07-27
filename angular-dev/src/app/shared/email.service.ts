import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

   sendEmail() {
    const serviceID = 'service_8vczcaz';
    const templateID = 'template_612jkj9';
    const userID = 'XJB0Ww2nhwOzcaL3Y';
    // const templateParams = {
    //   to_email: toEmail,
    // };
    return new Promise((resolve, reject) => {
      emailjs.send(serviceID, templateID, {
        to_name: "Ellis",
        to_email:'mapakama.ellis@yahoo.com',
from_name: "Sweet & Salty Backery",
message: "Your Order:(FKuy8g4zsTPWLyBQWimp)",
reply_to: "Sweet & Salty",
        // to_name: 'Recipient Name',
        // message: 'This is a test email sent from my Angular app!',
      }, userID)
        .then((response) => {
          console.log('Email sent:', response.status);
          resolve(response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          reject(error);
        });
    });
  }


}
