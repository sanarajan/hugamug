var slideIndex = 1;

    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = x.length }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
    }
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) { slideIndex = 1 }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 3000); // Change image every 2 seconds
    }

    //  below owl carousel

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })

    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `Login To Your Account`
        modalBodyInput.value = ''
      })
    }


    function showMenu() {
   
    var x = document.getElementById("toggMenu");
    var fbuttn = document.getElementById("firstMenu");
var sbuttn = document.getElementById("secondMenu");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.body.style.position = 'fixed';
        document.body.style.overflow = 'scroll';
        fbuttn.style.display = "none";
        sbuttn.style.display = "block";
        x.style.zIndex = "999"; // Set a higher z-index to make sure the menu appears above other content
        sbuttn.classList.add("rotate-animation");
        fbuttn.classList.remove("rotate-animation");
    } else {
        x.style.display = "none";
        document.body.style.position = 'static';
        document.body.style.overflow = 'auto'; // Restore scrolling
        fbuttn.style.display = "block";
        sbuttn.style.display = "none";
        sbuttn.classList.remove("rotate-animation");
        fbuttn.classList.add("rotate-animation");
    }
}

function shopOnline(){alert("HF");
  window.location.href = "https://hugamug.in/shoponline";
}