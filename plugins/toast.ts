// plugins/toast.js

export default defineNuxtPlugin(nuxtApp => {
    // Assuming useToast is a function from a UI library or a custom implementation
    const toast = useToast(); // You might need to import useToast if it's from a library
  
    const showToast = (title:any, description:any, color:any = "red", icon = 'i-heroicons-shield-exclamation') => { 
      toast.add({
        color,
        title,
        description,
        icon,
      });
    };
    // Make showToast available in all components
    nuxtApp.provide('showToast', showToast);
  });
  