class InnerAccordionComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {  
      const label = this.getAttribute('label');
      const description = this.getAttribute('description');
      this.render(label, description);
    }

  render(label, description){
    const uniqueId = `accordion-${Math.random().toString(36).substr(2, 9)}`;
    this.shadowRoot.innerHTML = `
  <style>
  :host {
    display: block;
  }

  .accordion__description {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    width: 80%;
}

.accordion__section {
    border-top: 2px solid rgba(205, 205, 205, 0.4);
    color: black;
    padding-top: 24px;
    padding-left: 24px;
    padding-bottom: 0px !important;
}
  
.accordion__row {
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
}

.accordion__label {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 12px;
 }
  
.accordion__content {
    display: none;
    transition: max-height 0.3s ease;
    padding-left: 24px;
    color: black;
  
    &.open {
      display: flex;
     
    }
}

.accordion__chevron--up {
    display: none;

    &.open {
    display: flex;
    }
}
.accordion__chevron--down {
    display: flex;

    &.open {
    display: none !important;
    }
}

.accordion__label--text {
    color:#000000;
    font-weight: 500;
    fontSize: 18px; 
    lineHeight: 1.6px; 
    letterSpacing: 0;
} 

@media (max-width: 768px) {
    

.accordion__content {
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    color: black;
}

.accordion__section {
    border-top: 2px solid rgba(205, 205, 205, 0.4);
    color: black;
    padding: 24px;
}

.accordion__label {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
}

.accordion__description {
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    width: 100%;
}
}

@media (max-width: 375px) {
.accordion__content {
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    color: black;
}

.accordion__section {
    border-top: 2px solid rgba(205, 205, 205, 0.4);
    color: black;
    padding-top: 24px;
    padding-left: 16px;
    padding-bottom: 24px;
    padding-right: 16px;
}

.accordion__label {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start;
    gap: 0px;
}
}

@media (max-width: 320px) {
    

.accordion__content {
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    color: black;
}

.accordion__section {
    border-top: 2px solid rgba(205, 205, 205, 0.4);
    color: black;
    padding-top: 24px;
    padding-left: 16px;
    padding-bottom: 24px;
    padding-right: 16px;
}

.accordion__description {
      width: 100%;
}

.accordion__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
}
}
  </style>
  <div class="accordion">
      <div class='accordion__section'>
        <div class='accordion__row' 
          role="button"
           tabindex="0"
           aria-expanded="false"
           aria-controls="${uniqueId}-content"
           id="${uniqueId}-toggle">
          <div class="accordion__label">
          <span aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="#EA194D" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM14.4883 12.8535C14.1753 12.5851 13.7048 12.6201 13.4346 12.9307C13.4343 12.931 13.4328 12.9322 13.4307 12.9346C13.4256 12.9401 13.4154 12.9515 13.4004 12.9668C13.3704 12.9975 13.3206 13.0461 13.252 13.1064C13.114 13.2277 12.9003 13.3957 12.6123 13.5654C12.0383 13.9036 11.168 14.25 10 14.25C8.82403 14.25 7.94911 13.918 7.37402 13.5957C7.08522 13.4338 6.87094 13.2742 6.7334 13.1592C6.6648 13.1018 6.61557 13.0552 6.58594 13.0264L6.55566 12.9961V12.9971H6.55664C6.55665 12.9971 6.55644 12.9973 6.55566 12.998C6.2782 12.6909 5.8055 12.6661 5.49805 12.9434C5.19048 13.2208 5.16597 13.6944 5.44336 14.002L5.94531 13.5488C5.44885 13.9966 5.44319 14.0026 5.44336 14.0029L5.44824 14.0078C5.45016 14.0099 5.45252 14.0129 5.45508 14.0156C5.46027 14.0212 5.46683 14.028 5.47461 14.0361C5.49073 14.0529 5.51287 14.0751 5.54004 14.1016C5.59468 14.1547 5.67205 14.2264 5.77148 14.3096C5.97034 14.4758 6.26032 14.6912 6.64062 14.9043C7.40377 15.332 8.52892 15.75 10 15.75C11.479 15.75 12.6088 15.3077 13.373 14.8574C13.7539 14.633 14.0438 14.4068 14.2422 14.2324C14.3415 14.1451 14.4183 14.0703 14.4727 14.0146C14.4998 13.9868 14.5221 13.9638 14.5381 13.9463C14.5459 13.9378 14.5525 13.9306 14.5576 13.9248C14.5602 13.9219 14.5626 13.9192 14.5645 13.917C14.5654 13.9159 14.5666 13.9149 14.5674 13.9141L14.5684 13.9121L14.0439 13.4609L14.5693 13.9111C14.8389 13.5968 14.8026 13.1232 14.4883 12.8535ZM6.75 7C6.05964 7 5.5 7.55964 5.5 8.25C5.5 8.94036 6.05964 9.5 6.75 9.5C7.44036 9.5 8 8.94036 8 8.25C8 7.55964 7.44036 7 6.75 7ZM13.25 7C12.5596 7 12 7.55964 12 8.25C12 8.94036 12.5596 9.5 13.25 9.5C13.9404 9.5 14.5 8.94036 14.5 8.25C14.5 7.55964 13.9404 7 13.25 7Z" fill={fill}/>
</svg></span>
          <p class='accordion__label--text' id="${uniqueId}-label">${label}</p>
          </div>
          <span class='accordion__chevron--down' aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#F3F6F9"/>
          <path d="M6.5 8L10 11.8416L13.5 8" stroke="#EA194D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
          <span class='accordion__chevron--up' aria-hidden="true"><svg width="40" height="40" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11.0001" r="10" transform="rotate(-179.562 11 11.0001)" fill="#F3F6F9"/>
<path d="M14.5 13.0001L11 9.15853L7.5 13.0001" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </div>
      </div>
        <div class="accordion__content" id="${uniqueId}-content"
           role="region"
           aria-labelledby="${uniqueId}-toggle"
           hidden>
          <p class="accordion__description">${description}</p>
        </div>
        </div>
      `;
      
    const row = this.shadowRoot.querySelector('.accordion__row');
    row.addEventListener('click', () => this.toggle());
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggle();
    }
  });
      
    }
  
    toggle() {
      const content = this.shadowRoot.querySelector('.accordion__content');
  const row = this.shadowRoot.querySelector('.accordion__row');
  const isOpen = content.classList.toggle('open');

  const chevronUp = this.shadowRoot.querySelector('.accordion__chevron--up');
  const chevronDown = this.shadowRoot.querySelector('.accordion__chevron--down');
  chevronUp.classList.toggle('open');
  chevronDown.classList.toggle('open');

  row.setAttribute('aria-expanded', isOpen);
  content.hidden = !isOpen;
    }
  }
  
  customElements.define('inner-accordion-component', InnerAccordionComponent);
  
  