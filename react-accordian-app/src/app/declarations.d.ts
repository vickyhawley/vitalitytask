import React from 'react';

declare module 'react'{
    namespace JSX {
  interface IntrinsicElements {
      'outer-accordion-component': React.HTMLAttributes<HTMLElement>;
      'inner-accordion-component': React.HTMLAttributes<HTMLElement>;
  }
}
}