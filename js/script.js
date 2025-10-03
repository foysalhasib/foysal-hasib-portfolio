// ========================== Sticky start ==============================
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// ========================== Sticky end ==============================



// ========================== Work Start ==============================

  // সব filter button select করা
  const filterButtons = document.querySelectorAll(".filter-options .categories");
  const items = document.querySelectorAll(".picture-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // active class remove করা
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-group");

      items.forEach(item => {
        const groups = JSON.parse(item.getAttribute("data-groups"));

        if (category === "all" || groups.includes(category)) {
          item.style.display = "block";   // show
        } else {
          item.style.display = "none";    // hide
        }
      });
    });
  });


  // Toggle active class
  const btns = document.querySelectorAll('.categories');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

// ========================== Work End ==============================




// ========================== blog button start ==============================
// ----------------- blogBtnOne ----------------
const buttonOne = document.getElementById("blogBtnOne");
function pulseOne() {
  buttonOne.style.animation = "pulse 1s infinite";
}
pulseOne();


// ----------------- blogBtnTwo ----------------
const buttonTwo = document.getElementById("blogBtnTwo");
function bounce() {
  buttonTwo.style.transform = "translateY(-13px)";
    setTimeout(() => {
      buttonTwo.style.transform = "translateY(0)";
    }, 150);
}
setInterval(bounce, 800);

// ----------------- blogBtnThree ----------------
const buttonThree = document.getElementById("blogBtnThree");
function pulseThree() {
  buttonThree.style.animation = "pulse 1s infinite";
}
pulseThree();
// ========================== blog button end ==============================









// ========================== Testimonial Start  ============================
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  centeredSlides: true, // ✅ correct option
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },

  // Autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});





// ========================== Testimonial  end ==============================




// ========================== Contact Part  Start ==============================

 const scriptURL = "https://script.google.com/macros/s/AKfycbzYAb0wctOJna8BwtSbSCkwRUvBf5fSHPC3gVddyGvhSGZIrG9I30fNSrJ5NjO-Awzv/exec"; 
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("responseMsg");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const data = {
        name: form.name.value,
        email: form.email.value,
        number: form.number.value,
        message: form.message.value
      };

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => res.text())
      .then(msg => {
        responseMsg.innerText = "✅ Message sent successfully!";
        form.reset();
      })
      .catch(err => {
        responseMsg.innerText = "❌ Error sending message!";
        console.error(err);
      });
    });


// ========================== Contact Part  end ==============================


// ========================== Footer Start ==============================

// ========================== Footer  end ==============================





document.addEventListener("DOMContentLoaded", function () {
  // সব certificate box select করা
  const certBoxes = document.querySelectorAll(".certificate-box");

  certBoxes.forEach(box => {
    const certImg = box.querySelector("img");

    // create download button
    const btn = document.createElement("button");
    btn.innerHTML = '<i class="fa-solid fa-download"></i> Download'; // Font Awesome icon
    btn.style.position = "absolute";
    btn.style.bottom = "5px";
    btn.style.left = "50%";
    btn.style.transform = "translateX(-50%)";
    btn.style.padding = "8px 16px";
    btn.style.background = "#4CAF50";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
    btn.style.fontWeight = "bold";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    btn.style.transition = "0.3s";

    // hover effect
    btn.onmouseover = function() { btn.style.background = "#388E3C"; }
    btn.onmouseout = function() { btn.style.background = "#4CAF50"; }

    // append button to box
    box.appendChild(btn);

    // click event for download
    btn.addEventListener("click", function () {
      const a = document.createElement("a");
      a.href = certImg.src;
      a.download = certImg.alt + ".jpg"; // image alt name দিয়ে download filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
});

