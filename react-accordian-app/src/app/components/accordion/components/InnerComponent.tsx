'use client';
import { Stack } from "@mui/material";
import styles from './innerComponent.module.scss'
import { ChevronDown } from "@/app/icons/ChevronDown/ChevronDown";
import { useState } from "react";
import { HappyFace } from "@/app/icons/HappyFace/HappyFace";
import { ChevronUp } from "@/app/icons/ChevronUp/ChevronUp";

interface iInnerComponent {
    label: string;
    description: string;
}

export function InnerComponent({label, description}:iInnerComponent){
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        if(open === false){
            setOpen(true)
        }else{setOpen(false)}

    }

    // Generate IDs for aria-controls and aria-labelledby to ensure uniqueness if multiple accordions used
    const buttonId = `accordion-button-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const panelId = `accordion-panel-${label.replace(/\s+/g, '-').toLowerCase()}`;


    return(
        <Stack className={styles['accordion__wrapper']}>
            <Stack className={styles['accordion--close']}>
                <button id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId} onClick={() => handleOpen()}
                    style={{
                            all: 'unset', // remove default button styles, but keep keyboard focus and accessibility
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                    <Stack direction={'row'} gap={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Stack className={styles['accordion__close--label']} gap={2} >
                            <HappyFace fill={'#e71757'}/>
                            <h2 style={{color: open ? '#e71757' : '#000000', fontWeight: 500, fontSize: 18, lineHeight: 1.6, letterSpacing: 0}}>{label}</h2>
                        </Stack>
                        {open ? <ChevronUp size={40}/> : <ChevronDown stroke={'#EA194D'} fill={'#F3F6F9'} size={40}/>}
                    </Stack>
                </button>
            </Stack>
            {open && <Stack id={panelId}
                    role="region"
                    aria-labelledby={buttonId} className={styles['accordion--open']}>
                <p className={styles['accordion__font']}>{description}</p></Stack>}
        </Stack>
    )
}