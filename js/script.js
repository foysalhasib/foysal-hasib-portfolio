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








  


