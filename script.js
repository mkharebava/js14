const nname = document.getElementById(`nname`);
const nameerror = document.getElementById(`nameerror`);
const lastName = document.getElementById(`lastName`);
const lastNameError = document.getElementById(`lastnameerror`);
const email = document.getElementById(`email`);
const emailError = document.getElementById(`emailerror`);
const password = document.getElementById(`password`);
const passwordError = document.getElementById(`passworderror`);
const sign = document.getElementById(`righttwo`);
const namepattern = /^[A-Za-z]{1,15}$/;
const lastnamepattern = /^[A-Za-z]{1,15}$/;
const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

