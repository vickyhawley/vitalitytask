'use client';
import * as React from 'react'
import styles from "./page.module.css";
import { Accordion } from "./components/accordion/accordion";
import './webComponents/webAccordion/inner-accordion-component';
import './webComponents/webAccordion/outer-accordion-component';
import { useEffect } from "react";

declare global{
    namespace JSX {
  interface IntrinsicElements {
      'outer-accordion-component': React.HTMLAttributes<HTMLElement>;
  }
}
}

export default function Home() {

  const data = [
   {
    header: 'Display Header 3', 
    description: 'Content block introduction text... vestibulum molestie sodales mi a auctor. Suspendisse fermentum condimentum semper.',
    body: [{label: 'Label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet quis quam sed suscipit. Proin viverra mollis dolor id euismod. Duis nisi augue, ultrices ut accumsan id, tristique ac diam. Ut efficitur, orci a mattis viverra, nisi sapien porttitor augue, non porta tortor turpis quis dolor. Aenean laoreet ante metus, a euismod orci varius sed. Vestibulum vel.'}, 
      {label: 'Label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet quis quam sed suscipit. Proin viverra mollis dolor id euismod. Duis nisi augue, ultrices ut accumsan id, tristique ac diam. Ut efficitur, orci a mattis viverra, nisi sapien porttitor augue, non porta tortor turpis quis dolor. Aenean laoreet ante metus, a euismod orci varius sed. Vestibulum vel.'}, 
      {label: 'Label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet quis quam sed suscipit. Proin viverra mollis dolor id euismod. Duis nisi augue, ultrices ut accumsan id, tristique ac diam. Ut efficitur, orci a mattis viverra, nisi sapien porttitor augue, non porta tortor turpis quis dolor. Aenean laoreet ante metus, a euismod orci varius sed. Vestibulum vel.'}, 
      {label: 'Label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet quis quam sed suscipit. Proin viverra mollis dolor id euismod. Duis nisi augue, ultrices ut accumsan id, tristique ac diam. Ut efficitur, orci a mattis viverra, nisi sapien porttitor augue, non porta tortor turpis quis dolor. Aenean laoreet ante metus, a euismod orci varius sed. Vestibulum vel.'}]}
  ]

  useEffect(() => {
      import('./webComponents/webAccordion/outer-accordion-component.js');
      import('./webComponents/webAccordion/inner-accordion-component.js');
  }, [])
 


  return (
    <div className={styles.page}>
      <main className={styles.main} aria-label="Accordion demo section">
      <h1 style={{color: '#000000'}}>Testing React component</h1>
      
        {data.map((item, index) => <Accordion key={index} data={item} />)}
      
      <h2 style={{color: '#000000'}}>Testing web component</h2>
      <div>
      {data.map((item, index) =>  <div key={index} aria-label={`Accordion section ${index + 1}`} ><outer-accordion-component data-item={JSON.stringify(item)}/></div>)}
      </div>
      </main>
      
      
    
    </div>
  );
}
