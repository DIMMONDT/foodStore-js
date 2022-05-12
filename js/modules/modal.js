

function modal() {
      function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
      }

      function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
      }

      const modalBtn = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal');

      modalBtn.forEach(item => {
            item.addEventListener('click', () => openModal())
      });

      const modalTimerId = setTimeout(openModal, 50000);

      modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                  closeModal();
            }
      });
      document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && !modal.classList.contains('hide')) {
                  closeModal();
            }
      })

      function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.
                  documentElement.scrollHeight) {
                  openModal(modalSelector, modalTimerId);
                  window.removeEventListener('scroll', showModalByScroll);
            }
      };

      window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;