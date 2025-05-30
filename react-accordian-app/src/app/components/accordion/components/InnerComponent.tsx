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

    return(
        <Stack className={styles['accordion__wrapper']}>
            <Stack className={styles['accordion--close']}>
                <div onClick={() => handleOpen()}>
                    <Stack direction={'row'} gap={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Stack className={styles['accordion__close--label']} gap={2} >
                            <HappyFace fill={'#e71757'}/>
                            <h2 style={{color: open ? '#e71757' : '#000000', fontWeight: 500, fontSize: 18, lineHeight: 1.6, letterSpacing: 0}}>{label}</h2>
                        </Stack>
                        {open ? <ChevronUp size={40}/> : <ChevronDown stroke={'#EA194D'} fill={'#F3F6F9'} size={40}/>}
                    </Stack>
                </div>
            </Stack>
            {open && <Stack className={styles['accordion--open']}>
                <p className={styles['accordion__font']}>{description}</p></Stack>}
        </Stack>
    )
}