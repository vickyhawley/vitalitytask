class OuterAccordionComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const item = JSON.parse(this.getAttribute('data-item'));
      console.log('item', item)
      this.render(item);
    }

      
      render(item){this.shadowRoot.innerHTML = `
 <style>
 :host {
    display: block;

  }

  .accordion-wrapper {
    border-radius: 12px;
    padding: 32px !important;
    background-color: #ffffff;
    box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.08);
    gap: 24px;
  }

  .accordion-top {
  padding-bottom: 24px;}

   .accordion-top-title {
        color: #333333;
        font-weight: 600;
        font-size: 24px;
        line-height: 2px;
        letter-spacing: -1px;
  }
  
  .accordion-top-description {
       color: #333333;
       font-weight: 400;
       font-size: 16px;
       letter-spacing: 0; 
  }

  @media (max-width: 768px) {
    .accordion-wrapper {
        border-radius: 12px;
        padding: 32px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}

@media (max-width: 375px) {
    .accordion-wrapper {
        border-radius: 12px;
        padding: 16px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}

@media (max-width: 320px) {
    .accordion-wrapper {
        border-radius: 12px;
        padding: 16px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}
  </style>
        <div class="accordion-wrapper">
          <div class="accordion-top">
            <p class='accordion-top-title'>${item.header}</h1>
            <p class='accordion-top-description'>${item.description}</p>
          </div>
          ${item.body.map((entry) => `
            <inner-accordion-component
              label="${entry.label}"
              description="${entry.description}"
              ></inner-accordion-component>`)}
        </div>
      `;

    }
  
    async loadCSS(path) {
      const response = await fetch(path);
      const css = await response.text();
      return `<style>${css}</style>`;
    }

  }
  
  customElements.define('outer-accordion-component', OuterAccordionComponent);
  
  