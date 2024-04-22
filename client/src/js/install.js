const butInstall = document.getElementById('buttonInstall');

// Logic for handling the beforeinstallprompt event, which allows you to show the install prompt
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();

  // Save the event so it can be triggered later.
  let deferredPrompt = event;

  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';

  // When the user clicks the button, show the prompt
  butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    }
  });

});

window.addEventListener('appinstalled', (event) => {
  console.log('Application installed');

  butInstall.style.display = 'none';

  deferredPrompt = null;

});

