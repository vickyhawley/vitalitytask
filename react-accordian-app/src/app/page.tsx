
import styles from "./page.module.css";
import { Accordion } from "./components/accordion/accordion";


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


  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 style={{color: '#000000'}}>Testing React component</h1>
      
        {data.map((item) => <Accordion data={item} />)}
      
      <h1 style={{color: '#000000'}}>Testing web component</h1>
      <div>

      </div>
      </main>
      
      
    
    </div>
  );
}
