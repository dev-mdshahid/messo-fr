import { Messo } from './Messo';
export class Authentication extends Messo {
  // Create account function
  createAccount(info) {
    fetch(this.uribk + '/create_account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('authenticated', data);
      });
  }

  //Login function
  login(info) {
    fetch(this.uribk + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('authenticated', data);
      });
    console.log(JSON.parse(localStorage.getItem('authenticated')));
  }
}
