class InnerAccordionComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      
      this.shadowRoot.innerHTML = `
        <link rel='stylesheet' href='./custom-accordion-component.css' />
        <div class="accordion-label">
          <slot name="label">Accordion Title</slot>
        </div>
        <div class="accordion-content">
          <slot name="content">Accordion content goes here...</slot>
        </div>
      `;
  
      this.shadowRoot.querySelector('.accordion-label')
        .addEventListener('click', () => this.toggle());
    }
  
    async loadCSS(path) {
      const response = await fetch(path);
      const css = await response.text();
      return `<style>${css}</style>`;
    }
  
    toggle() {
      const content = this.shadowRoot.querySelector('.accordion-content');
      content.classList.toggle('open');
    }
  }
  
  customElements.define('inner-accordion-component', InnerAccordionComponent);
  
  