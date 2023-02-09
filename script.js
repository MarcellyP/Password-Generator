const passInput = document.querySelector('.inputPassword');
const lenInput = document.querySelector('.inputLength');
const infoLength = document.querySelector('.labelLengthId');
const btnGenerate = document.querySelector('.btnGenerate');

const chkUpper = document.querySelector('.inputUppercase');
const chkLower = document.querySelector('.inputLowercase');
const chkNumber = document.querySelector('.inputNumbers');
const chkSymbol = document.querySelector('.inputSymbols');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '&',
  '*',
  '+',
  '-',
  '=',
  '|',
  ':',
  '?',
  '/',
];

const caracteres = Array.from(Array(26)).map((_, i) => i + 97);
const LowerCaseCaracteres = caracteres.map((item) => String.fromCharCode(item));
const UpperCaseCaracteres = caracteres.map((item) =>
  String.fromCharCode(item).toUpperCase(),
);

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener('change', () => {
  infoLength.innerHTML = lenInput.value;
});

btnGenerate.addEventListener('click', () => {
  generatePassword(
    chkUpper.checked,
    chkLower.checked,
    chkNumber.checked,
    chkSymbol.checked,
    lenInput.value,
  );
});

const generatePassword = (upper, lower, number, symbol, length) => {
  const newArray = [
    ...(upper ? UpperCaseCaracteres : []),
    ...(lower ? LowerCaseCaracteres : []),
    ...(number ? numbers : []),
    ...(symbol ? symbols : []),
  ];

  if (newArray.length === 0) return '';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};

document
  .getElementsByClassName('btnCopy')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('inputPassword')[0].select();
    document.execCommand('copy');
    document.getElementsByClassName('inputPassword')[0].blur();
  });

const btnCopy = document.querySelector('.btnCopy');
const divMenssage = document.querySelector('.alert');

const msg = 'Copied password !';

function ativar(msg) {
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = msg;
  divMenssage.appendChild(message);

  setTimeout(() => {
    message.style.display = 'none';
  }, 9000);
}

btnCopy.addEventListener('click', () => {
  ativar(msg);
});
