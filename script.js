function openModal(type) {
    const modal = document.getElementById("modal");
    const formContainer = document.getElementById("form-container");

    if (type === "login") {
        formContainer.innerHTML = `
      <form class="form-box">
        <h2><i class="fa-solid fa-right-to-bracket"></i> Login</h2>
        <p>Welcome back! Please login to continue.</p>
        
        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>
        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        
        <div class="options">
          <label class="remember">
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        
        <button type="submit"><i class="fa-solid fa-sign-in-alt"></i> Login</button>

        <div class="social-login">
          <button type="button" class="google"><i class="fab fa-google"></i> Continue with Google</button>
          <button type="button" class="facebook"><i class="fab fa-facebook-f"></i> Continue with Facebook</button>
        </div>
      </form>
    `;
    } else if (type === "signup") {
        formContainer.innerHTML = `
      <form class="form-box">
        <h2><i class="fa-solid fa-user-plus"></i> Sign Up</h2>
        <p>Create your account to get started</p>

        <div class="input-group">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder="Full Name" required />
        </div>
        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>
        <div class="input-group">
          <i class="fa-solid fa-phone"></i>
          <input type="number" placeholder="Phone" required />
        </div>
        <div class="input-group">
          <i class="fa-solid fa-location-dot"></i>
          <input type="text" placeholder="Address" required />
        </div>
        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit"><i class="fa-solid fa-user-check"></i> Sign Up</button>

        <div class="social-login">
          <button type="button" class="google"><i class="fab fa-google"></i> Sign Up with Google</button>
          <button type="button" class="facebook"><i class="fab fa-facebook-f"></i> Sign Up with Facebook</button>
        </div>
      </form>
    `;
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function showMenu(event) {
    const popup = document.getElementById("popupMenu");
    popup.style.display = "flex";
}

function hideMenu() {
    const popup = document.getElementById("popupMenu");
    popup.style.display = "none";
}

window.addEventListener("click", (event) => {
    const PopUpMenu = document.getElementById("popupMenu");
    if (!PopUpMenu.contains(event.target) && !event.target.closest('.regiicon') && !event.target.closest('.cancel')) {
        PopUpMenu.style.display = "none";
    }
});

function toggleLanguageDropdown() {
    const dropdown = document.getElementById("language-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function setLanguage(code, name) {
    const button = document.getElementById("selected-language");
    button.innerHTML = `<i class="fa-solid fa-globe"></i> ${name} <i class="fa-solid fa-caret-down"></i>`;
    document.getElementById("language-dropdown").style.display = "none";
}

window.addEventListener('click', function (e) {
    const button = document.querySelector('.language-btn');
    const dropdown = document.getElementById("language-dropdown");
    if (!button.contains(e.target)) {
        dropdown.style.display = "none";
    }
});


function updateScrollButtons() {
    const container = document.getElementById("dealsScroll");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    // Show/hide left button
    if (container.scrollLeft > 0) {
        leftBtn.style.display = "block";
    } else {
        leftBtn.style.display = "none";
    }

    // Show/hide right button
    if (container.scrollWidth - container.clientWidth - container.scrollLeft > 5) {
        rightBtn.style.display = "block";
    } else {
        rightBtn.style.display = "none";
    }
}

function scrollToLeft() {
    const container = document.getElementById("dealsScroll");
    container.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(updateScrollButtons, 400);
}

function scrollRight() {
    const container = document.getElementById("dealsScroll");
    container.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(updateScrollButtons, 400);
}
window.addEventListener("load", updateScrollButtons);
window.addEventListener("resize", updateScrollButtons);
document.getElementById("dealsScroll").addEventListener("scroll", updateScrollButtons);

// function showAll() {
//   const allDeals = document.querySelectorAll('.deal-card');
//   allDeals.forEach(card => card.style.display = 'block');
// }