// 获取元素
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// 选项卡切换功能
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// 表单提交处理（临时演示）
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#loginForm input[type="email"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;
    console.log('登录尝试:', email, password);
    alert('演示模式：登录功能待接入后端\n邮箱：' + email);
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#registerForm input[type="text"]').value;
    const email = document.querySelector('#registerForm input[type="email"]').value;
    const password = document.querySelector('#registerForm input[type="password"]').value;
    console.log('注册尝试:', username, email, password);
    alert('演示模式：注册功能待接入后端\n用户名：' + username + '\n邮箱：' + email);
});
