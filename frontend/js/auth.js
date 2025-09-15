// API base URL
const API_URL = 'http://localhost:5000/api';

// DOM Elements
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const showLoginLink = document.getElementById('show-login');
const showRegisterLink = document.getElementById('show-register');
const logoutBtn = document.getElementById('logout');

// Event Listeners
loginForm.addEventListener('submit', loginUser);
registerForm.addEventListener('submit', registerUser);
showLoginLink.addEventListener('click', showLoginForm);
showRegisterLink.addEventListener('click', showRegisterForm);
logoutBtn.addEventListener('click', logout);

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (token) {
        showProtectedContent();
        fetchProtectedData();
    }
});

// Register User
async function registerUser(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Store token in localStorage
            localStorage.setItem('token', data.token);
            
            // Show protected content
            showProtectedContent();
            fetchProtectedData();
            
            showAlert('Registration successful!', 'success');
        } else {
            showAlert(data.msg, 'error');
        }
    } catch (error) {
        showAlert('Server error', 'error');
        console.error(error);
    }
}

// Login User
async function loginUser(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Store token in localStorage
            localStorage.setItem('token', data.token);
            
            // Show protected content
            showProtectedContent();
            fetchProtectedData();
            
            showAlert('Login successful!', 'success');
        } else {
            showAlert(data.msg, 'error');
        }
    } catch (error) {
        showAlert('Server error', 'error');
        console.error(error);
    }
}

// Fetch Protected Data
async function fetchProtectedData() {
    const token = localStorage.getItem('token');
    
    try {
        const response = await fetch(`${API_URL}/protected`, {
            method: 'GET',
            headers: {
                'x-auth-token': token
            }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            console.log('Protected data:', data);
            // You can display user information here if needed
        } else {
            showAlert(data.msg, 'error');
            logout();
        }
    } catch (error) {
        showAlert('Server error', 'error');
        console.error(error);
    }
}

// Logout User
function logout() {
    localStorage.removeItem('token');
    showLoginForm();
    showAlert('Logged out successfully', 'success');
}

// Show Login Form
function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('protected-content').classList.add('hidden');
}

// Show Register Form
function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('protected-content').classList.add('hidden');
}

// Show Protected Content
function showProtectedContent() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('protected-content').classList.remove('hidden');
}

// Show Alert
function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    alertContainer.appendChild(alert);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}