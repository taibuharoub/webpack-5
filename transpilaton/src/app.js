// import 'core-js';
// import 'core-js/features/promise';

//when using "entry" for useBuiltIns or also incase where u see third party packages
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  // const promise = new Promise();
  // console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
    .writeText(text)
    .then(result => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  } else {
    alert('Feature not avialble, please copy manually');
  }
  // do something...
});
