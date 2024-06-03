export default defineAppConfig({
    ui: {
        primary: 'paris-daisy',
        gray: 'cool',
        notifications: {
            // Show toasts at the top right of the screen
            position: 'top-0 bottom-auto',
            timeout: 2000,
            background: 'bg-teal-600 ',
          },
          modal:{
            width: 'w-full sm:max-w-2xl',
        }
    }
});
