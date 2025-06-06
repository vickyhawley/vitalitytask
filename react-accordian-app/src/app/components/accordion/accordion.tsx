'use client';
import styles from './accordion.module.scss';
import { InnerComponent } from './components/innerComponent';
import { Stack } from '@mui/material';


interface iAccordion {
 data: {header: string,
    description: string,
    body: Array<{label: string, description: string}>}
}


export function Accordion({data}:iAccordion){

return(
    
    <div role="region" 
    aria-labelledby="accordion-header" className={styles['accordion']}>
        <Stack className={styles['accordion__top']} direction={'column'} gap={1.2}>
            <h2 id="accordion-header" style={{color: '#333333', fontWeight: 600, fontSize: 24, lineHeight: 2, letterSpacing: -1}}>{data.header}</h2>
            <p style={{color: '#333333', fontWeight: 400, fontSize: 16, letterSpacing: 0}}>{data.description}</p>
        </Stack>
       {data.body?.map((item, index) =>  <InnerComponent key={`${item.label}-${index}`} label={item.label} description={item.description}/>)}
    </div>
)
}