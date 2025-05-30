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

  .accordion {
    border-radius: 12px;
    padding: 32px !important;
    background-color: #ffffff;
    box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.08);
    gap: 24px;
  }

  .accordion__section--top {
  padding-bottom: 24px;}

   .accordion__section--title {
        color: #333333;
        font-weight: 600;
        font-size: 24px;
        line-height: 2px;
        letter-spacing: -1px;
  }
  
  .accordion__section--description {
       color: #333333;
       font-weight: 400;
       font-size: 16px;
       letter-spacing: 0; 
  }

  @media (max-width: 768px) {
    .accordion__section {
        border-radius: 12px;
        padding: 32px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}

@media (max-width: 375px) {
    .accordion__section {
        border-radius: 12px;
        padding: 16px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}

@media (max-width: 320px) {
    .accordion__section {
        border-radius: 12px;
        padding: 16px;
        background-color: #ffffff;
        box-shadow: 0, 10, 25, rgba(73, 101, 132, 0.8);
        gap: 24px;
    }
}
  </style>
        <div class="accordion__section">
          <div class="accordion__section--top">
            <p class='accordion__section--title'>${item.header}</h1>
            <p class='accordion__section--description'>${item.description}</p>
          </div>
          ${item.body.map((entry) => `
            <inner-accordion-component
              label="${entry.label}"
              description="${entry.description}"
              ></inner-accordion-component>`)}
        </div>
      `;

    }

  }
  
  customElements.define('outer-accordion-component', OuterAccordionComponent);
  
  