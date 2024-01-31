'use client';

import Intro from '@/components/Intro';
import Site from '@/components/Site';
import { checkLicense, getCookie } from '@/database/license';
import { useEffect, useState } from 'react';

export default function Home() {

  const [introDone, setIntroDone] = useState(false);
  const [codeLoaded, setCodeLoaded] = useState(false);
  const [finished, setFinished] = useState(false);
  
  const [isPremium, setPremium] = useState(false);

  const [createdBy, setCreatedBy] = useState(false);
  const [licensed, setLicensed] = useState(false);

  useEffect(() => {
    const license = getCookie("license");
    if(license != null && license != "") setPremium(checkLicense(license));
  })

  return (
    <main className='w-screen h-screen flex flex-col bg-black text-white'>
      <Intro setIntroDone={setIntroDone} setCodeLoaded={setCodeLoaded} setFinished={setFinished} isPremium={isPremium} licensed={licensed} createdBy={createdBy} setLicensed={setLicensed} setCreatedBy={setCreatedBy} />
      <Site setCodeLoaded={setCodeLoaded} setFinished={setFinished} show={introDone} codeLoaded={codeLoaded} finished={finished} isPremium={isPremium} setPremium={setPremium} />
    </main>
  )
}
