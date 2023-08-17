/* eslint-disable no-undef */

$(function () {
  ///Editor
  const QuillIsExists = () => {
    const editorOne = document.querySelector('#editor');
    const editorTwo = document.querySelector('#editor2');
    var toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'], // toggled buttons
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ];
    if (editorOne) {
      var editor = new Quill('#editor', {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: 'snow',
      });
    } else if (editorTwo) {
      let editorTwo = new Quill('#editor2', {
        modules: {
          toolbar: '#toolbar2',
        },
        theme: 'snow',
      });
    } else {
      return false;
    }
  };
  QuillIsExists();
});

$(function () {
  // Multi Step Modal in Signin Page
  function ModalExist() {
    if ($('.modal-open').length) {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        // Multi Step Modal in Signin Page
        const modal = document.getElementById('multi-step-modal');
        const stepContents = modalContent.querySelectorAll('.step-content');
        const nextButtons = modalContent.querySelectorAll('[id$="-next"]');
        const cancelButtons = modalContent.querySelectorAll('[id$="-cancel"]');
        const modalOpen = document.querySelector('.modal-open');
        const modalOverlay = document.querySelector('.modal-overlay');
        // Show modal when trigger button is clicked
        modalOpen.addEventListener('click', () => {
          modal.classList.remove('hidden');
        });
        const hideModal = () => {
          modal.classList.add('hidden');
        };
        // Hide modal when overlay is clicked or close button is clicked
        modalOverlay.addEventListener('click', hideModal);
        let currentStep = 1;
        const showStep = (step) => {
          stepContents.forEach((stepContent) =>
            stepContent.classList.add('hidden')
          );
          modalContent
            .querySelector(`.step-${step}`)
            .classList.remove('hidden');
        };
        const setCurrentStep = (step) => {
          currentStep = step;
          showStep(currentStep);
        };
        const nextStep = () => {
          setCurrentStep(currentStep + 1);
        };
        cancelButtons.forEach((cancelButton) => {
          cancelButton.addEventListener('click', () => {
            modal.classList.add('hidden');
          });
        });
        nextButtons.forEach((nextButton) => {
          nextButton.addEventListener('click', nextStep);
        });
        setCurrentStep(1);
      }
    }
  }
  ModalExist();
});

$(function () {
  function initModeSetting() {
    var body = document.body;
    var lightDarkBtn = document.querySelectorAll('.light-dark-mode');
    if (lightDarkBtn.length > 0) {
      lightDarkBtn.forEach(function (item) {
        if (item.length > 0) {
          item.addEventListener('click', function (event) {
            if (
              body.hasAttribute('data-mode') &&
              body.getAttribute('data-mode') == 'dark'
            ) {
              body.setAttribute('data-mode', 'light');
              sessionStorage.setItem('data-layout-mode', 'light');
            } else {
              body.setAttribute('data-mode', 'dark');
              sessionStorage.setItem('data-layout-mode', 'dark');
            }
          });
        }
      });
    }
    if (
      sessionStorage.getItem('data-layout-mode') &&
      sessionStorage.getItem('data-layout-mode') == 'light'
    ) {
      body.setAttribute('data-mode', 'light');
    } else if (sessionStorage.getItem('data-layout-mode') == 'dark') {
      body.setAttribute('data-mode', 'dark');
    }
  }

  initModeSetting();

  // Check the initial theme preference and apply the appropriate class
  if (
    localStorage.theme === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  // Toggle the theme when the button is clicked
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      // Check the current theme and toggle it
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
      } else {
        localStorage.theme = 'dark';
      }
      // Apply the new theme
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }
});
