const searchbar = document.querySelector('ion-searchbar');
const items = Array.from(document.querySelector('ion-list').children);


searchbar.addEventListener('ionInput', handleInput);

function handleInput(event) {
  const query = event.target.value.toLowerCase();
  requestAnimationFrame(() => {
    items.forEach((item) => {
      const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
      item.style.display = shouldShow ? 'block' : 'none';
    });
  });
}

window.alertController = alertController;
window.ToastController = ToastController;

const button = document.querySelector('ion-button');
button.addEventListener('click', handleButtonClick);

async function handleButtonClick() {
  const toast = await toastController.create({
    color: 'dark',
    duration: 2000,
    message: 'Paired successfully',
    showCloseButton: true,
  });

  await toast.present();
}

const cart = document.getElementById('cart-icon');
cart.addEventListener('click', handleButtonClick);

async function handleButtonClick() {
  const alert = await alertController.create({
    header: 'Cart',
    message: 'Items',
    buttons: ['Continue shopping', 'Checkout'],
  });

  await alert.present();
}
