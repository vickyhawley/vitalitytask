// class OuterAccordionComponent extends HTMLElement {
//     constructor() {
//       super();
//       this.attachShadow({ mode: 'open' });
//     }
  
//     async connectedCallback() {
      
//       this.shadowRoot.innerHTML = `
//         <link rel='stylesheet' href='./custom-accordion-component.css' />
//         <div class="accordion-header">
//           <slot name="header">Accordion Title</slot>
//           <slot name="description">Some simple sentences describing the accordion</slot>
        
//           </div>
        
//       `;

//     }
  
//     async loadCSS(path) {
//       const response = await fetch(path);
//       const css = await response.text();
//       return `<style>${css}</style>`;
//     }

//   }
  
//   customElements.define('outer-accordion-component', OuterAccordionComponent);
  
  