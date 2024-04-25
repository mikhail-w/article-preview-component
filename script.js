const shareBtn = document.querySelector('.share-button');
const avatarSect = document.querySelector('.avatar-section');
const shareBar = document.querySelector('.share-bar');

shareBtn.addEventListener('click', () => {
  shareBar.classList.toggle('inactive');
  avatarSect.classList.toggle('inactive');
});
