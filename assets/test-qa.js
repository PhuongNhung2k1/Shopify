class ShowMoreButton extends HTMLElement {
    constructor() {
      super();
      const button = this.querySelector('btn-open-close');
      button.addEventListener('click', (event) => {
        const parentDisplay = event.target.closest('quest-anser').closest('.quest-anser');
      });
    }
  }
  
  customElements.define('show-more-button', ShowMoreButton);
  
  