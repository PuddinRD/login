 // Elementos del DOM
        const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const messageDiv = document.getElementById('message');

        // Credenciales de prueba
        const validUsername = 'admin';
        const validPassword = 'admin';

        // Agregar event listener al formulario
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const usernameValue = usernameInput.value.trim();
            const passwordValue = passwordInput.value;
            
            messageDiv.textContent = '';
            messageDiv.className = '';
            
            if (usernameValue === '' || passwordValue === '') {
                messageDiv.textContent = 'Por favor complete todos los campos';
                messageDiv.className = 'error-message';
                return;
            }
            
            if (usernameValue === validUsername && passwordValue === validPassword) {
                window.location.href = 'main.html';
            } else {
                messageDiv.textContent = 'Credenciales incorrectas. Intente nuevamente';
                messageDiv.className = 'error-message';
            }
        });