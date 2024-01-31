import { getPick } from "@/database/pick";

export const onIntroDone = (setCodeLoaded: any, setFinished: any, isPremium: boolean) => {
  const fadeIn: any = document.getElementById('fadein');
  if (fadeIn) {
    fadeIn.play();
    setTimeout(() => {
      document.getElementById("site")?.classList.remove("animate-fadeIn");
      setTimeout(() => setHeight(34), 100);
      setTimeout(() => setHeight(46), 700);
      setTimeout(() => setHeight(60), 1100);
      setTimeout(() => setHeight(76), 1900);
      setTimeout(() => setHeight(null), 3500);
      setTimeout(() => {
        setCodeLoaded(true);
        const typing: any = document.getElementById('typing');
        if (typing) {
          typing.currentTime = 1;
          typing.play();
          setTimeout(() => {
            typing.pause();
            document.getElementById("site")?.animate({ height: "250px" }, { fill: "both", duration: 750, easing: "ease-in-out" });
            setTimeout(() => {
              const ping: any = document.getElementById('ping');
              if (ping) {
                ping.currentTime = 0;
                ping.play();
                document.getElementById(isPremium ? "answer-text" : "error-text")?.classList.remove("hidden");
                setFinished(true)
                if(isPremium && getPick() != null) {
                  document.getElementById("covers")?.classList.remove("hidden");
                  document.getElementById("covers")?.classList.add("animate-fadeIn");
                }
              }
            }, 750);
          }, 600);
        }
      }, 4500);
    }, 1000);
  }
}

const setHeight = (height: number | null) => {
  const loadingText = document.getElementById("loading-text");
  const ping: any = document.getElementById('ping');
  if (ping && loadingText) {
    ping.currentTime = 0;
    ping.play();
    loadingText.style.height = height ? (height + "px") : "100%";
  }
}