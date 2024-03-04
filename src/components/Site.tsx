import { useEffect, useRef, useState } from "react";
import { TypeWriter } from "./TypeWrite";
import { onPurchase } from "@/animations/purchase";
import { onIntroDone } from "@/animations/site";
import { checkLicense } from "@/database/license";
import { PickProps, getLastPick, getPick, picks } from "@/database/pick";

export const Site = ({ show, codeLoaded, finished, isPremium, setCodeLoaded, setFinished, setPremium }: any) => {

  const getDateString = (plus: number) => {
    const date = new Date();
    const seconds = (date.getSeconds() + plus) > 60 ? ((date.getSeconds() + plus) - 60) : (date.getSeconds() + plus);
    const minutes = (date.getSeconds() + plus) > 60 ? (date.getMinutes() + 1) : date.getMinutes();
    return extraNull(date.getFullYear()) + "-" + extraNull(date.getMonth() + 1) + "-" + extraNull(date.getDate()) + " " + extraNull(date.getHours()) + ":" + extraNull(minutes) + ":" + extraNull(seconds);
  }

  const extraNull = (number: number) => {
    return number > 9 ? number : ("0" + number)
  }

  const getLicense = () => {
    return license.substring(0, 4) + (license.length > 3 ? ("-" + license.substring(4, 8) + ((license.length > 7 ? ("-" + license.substring(8, 12)) + ((license.length > 11 ? ("-" + license.substring(12, 16)) : "")) : ""))) : "");
  }

  const getPlaceholder = () => {
    const format = "xxxx-xxxx-xxxx-xxxx"
    return format.substring(getLicense().length, 19);

  }

  const licenseRef = useRef(null);

  const [clickedPurchase, setClickedPurchase] = useState(false);
  const [dateStrings, setDateStrings]: any = useState([]);
  const [license, setLicense] = useState("");
  const [checkedColor, setCheckedColor] = useState("#fff");

  useEffect(() => {
    setDateStrings([getDateString(1), getDateString(2), getDateString(3), getDateString(4)]);
  }, [])

  return (
    <>
      <audio id='fadein' src='/sounds/fadein.mp3'></audio>
      <audio id='ping' src='/sounds/ping.mp3'></audio>
      <section id="site" className={`relative whitespace-nowrap w-1/3 min-w-fit border-4 border-white border-opacity-20 rounded-xl m-auto ${show ? "animate-fadein" : "opacity-0"}`} style={{ height: 190 }}>
        <div id="covers" className="hidden">
          <div className="bg-black bg-opacity-70 w-[calc(100%+8px)] h-[104px] absolute z-10 -top-1 -left-1" />
          <div className="bg-black bg-opacity-70 w-2 mt-[104px] h-[16px] absolute z-10 -top-1 -left-1" />
          <div className="bg-black bg-opacity-70 w-2 mt-[104px] h-[16px] absolute z-10 -top-1 -right-1" />
          <div className="bg-black bg-opacity-70 w-[calc(100%+8px)] mt-[120px] h-[82px] absolute z-10 -top-1 -left-1" />
          <div className="bg-black bg-opacity-70 w-[calc(100%+8px)] mt-[218px] h-[60px] absolute z-10 -top-1 -left-1" />
          <div className="bg-black bg-opacity-70 w-2 mt-[202px] h-[16px] absolute z-10 -top-1 -left-1" />
          <div className="bg-black bg-opacity-70 w-2 mt-[202px] h-[16px] absolute z-10 -top-1 -right-1" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={`absolute top-3 left-4 fill-white duration-300 ${isPremium || !finished ? "opacity-30" : "opacity-100 cursor-pointer animate-pulse hover:scale-[1.1]"}`} viewBox="0 0 16 16" onClick={() => {
          if (!isPremium && finished) {
            onPurchase(clickedPurchase, setClickedPurchase, licenseRef);
          }
        }}>
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
        <div id="loading-text" className="ml-4 text-xs overflow-hidden mt-9 select-none" style={{ height: "18px" }}>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[0]}</span> <span className="text-[#c5bd45] mr-[90px]">getTypes()</span>Loading testing licenses.</p>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[0]}</span> <span className="text-[#c5bd45] mr-[52px]">return getTypes()</span>General, Temp & Fake.</p>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[1]}</span> <span className="text-[#c5bd45] mr-[54px]">loadingChecker()</span>Loading the license checker.</p>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[1]}</span> <span className="text-[#c5bd45] mr-[16px]">return loadingChecker()</span>Checker has been loaded.</p>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[2]}</span> <span className="text-[#c5bd45] mr-[73px]">loadingInput()</span>Loading the license input.</p>
          <p><span className="text-[#3fac9e]">[BetWager]</span> <span className="text-[#b3b3b3]">{dateStrings[3]}</span> <span className="text-[#c5bd45] mr-[36px]">return loadingInput()</span>Licnese input has been loaded.</p>
          <br />
          <div className="flex">
            <p className="text-[#c5bd45]">&gt; </p>
            <TypeWriter id="third" text="license fetch-current-license" delay={20} shown={codeLoaded} className='max-w-[320px] text-[12px] font-semibold h-12 text-center ml-2 mt-[1px]' />
          </div>
          <div id="error-text" className="text-[#ac3f4f] hidden -mt-[15px]">
            <p>You do not have a correct license.</p>
            <p>This license is checked in your cookies.</p>
            <p>This projects is only used for test purposes.</p>
          </div>
          <div id="answer-text" className="hidden -mt-[15px]">
            <p>Your license has been loaded.</p>
            <p>You can't do anything with it</p>
            <p>Congrats!</p>
          </div>
          <div className={`flex mt-5 ${clickedPurchase ? "" : "hidden"}`}>
            <p className="text-[#c5bd45]">&gt; </p>
            <TypeWriter id="fourth" text="license" delay={20} shown={clickedPurchase} className='max-w-[320px] text-[12px] font-semibold h-12 text-center ml-2 mt-[1px]' />
            <div id="license-input" className="hidden">
              <p className={`text-[12px] font-semibold h-fit mt-[1px] bg-transparent ml-1 outline-none absolute`} style={{ color: checkedColor }}>{getLicense()}<span className="text-white text-opacity-50">{getPlaceholder()}</span></p>
              <input ref={licenseRef} className="text-[12px] font-semibold h-fit mt-[1px] bg-transparent ml-1 outline-none absolute opacity-0" value={license} onChange={(e) => {
                const string = e.target.value.replaceAll("-", "");
                if (string.length <= 16) {
                  setCheckedColor("#fff");
                  setLicense(string);
                }
                if (string.length == 16) {
                  if (!checkLicense(string)) {
                    setCheckedColor("#ac3f4f");
                  } else {
                    setCheckedColor("#45c570");
                    document.getElementById("error-text")?.classList.add("hidden");
                    setClickedPurchase(false);
                    document.getElementById("site")?.animate({ height: "190px" }, { fill: "both", duration: 750, easing: "ease-in-out" });
                    document.cookie = "license=" + string + ";"
                    setPremium(true);
                    onIntroDone(setCodeLoaded, setFinished, true);
                  }
                }
              }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Site;