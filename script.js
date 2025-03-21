// Fade-in animation on page load
gsap.to(".container", { opacity: 1, duration: 1.5, ease: "power2.inOut" });

const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const toggleForm = document.getElementById("toggle-form");
const form = document.getElementById("form");

let isLogin = true;

toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;
    
    if (isLogin) {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        toggleForm.innerHTML = `Don't have an account? <span>Register</span>`;
    } else {
        formTitle.innerText = "Register";
        submitBtn.innerText = "Register";
        toggleForm.innerHTML = `Already have an account? <span>Login</span>`;
    }

    // Smooth transition animation
    gsap.from(".form-box", { opacity: 0, y: -20, duration: 0.5 });
});
