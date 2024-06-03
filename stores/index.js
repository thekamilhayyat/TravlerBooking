import { defineStore } from 'pinia'

export const useStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    showChangePasswordModal: false,
    showEditUserModal: false,
  }),
  actions: {
    async login(credentials) {
      const nuxtApp = useNuxtApp(); // Accessing Nuxt app instance
      try {
        // Use the globally configured Axios instance provided through Nuxt plugins
        const response = await nuxtApp.$axios.post('/api/v1/auth/signIn', credentials);
        console.log(response, 'response');
        this.user = response.data.data.user;
        this.token = response.data.data.token;

        localStorage.setItem('authToken', this.token.accessToken );
        localStorage.setItem('user', JSON.stringify(this.user));
        nuxtApp.$showToast('Congrtaulations',response.data.message, 'green', 'i-heroicons-shield-check'); // Usage example
        nuxtApp.$axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    logout() {
      const nuxtApp = useNuxtApp(); // Accessing Nuxt app instance again for consistency
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      nuxtApp.$showToast('Alert','You are now logged out', 'yellow',); // Usage example
      // Ensure to remove the token from the Axios default headers
      delete nuxtApp.$axios.defaults.headers.common['Authorization'];
    },
  },
});
