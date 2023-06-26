// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const likeBtn = document.querySelector('span.like-glyph');
const errorMessage = document.querySelector('div#modal');

// const handleClick = async () => {
//   try {
//     const serverResponse = await mimicServerCall();
//     console.log(serverResponse);
//   } catch {
//     errorMessage.removeAttribute('hidden');
//     setTimeout(errorMessage.setAttribute('hidden', true), 3000);
//   }
// };
// likeBtn.addEventListener('click', handleClick);

const heartChange = () => {
  if (likeBtn.innerHTML === EMPTY_HEART) {
    likeBtn.innerHTML = FULL_HEART;
    likeBtn.className = 'activated-heart';
  } else {
    likeBtn.innerHTML = EMPTY_HEART;
    likeBtn.className = '';
  }
};
likeBtn.addEventListener('click', () => {
  mimicServerCall()
    .then(() => heartChange())
    .catch(
      () => errorMessage.removeAttribute('hidden'),
      setTimeout(() => {
        errorMessage.setAttribute('hidden', true);
      }, 3000)
    );
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(
  url = 'http://mimicServer.example.com',
  config = {}
) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
