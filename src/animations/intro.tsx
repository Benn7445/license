import { onIntroDone } from "./site";

export const onClickTweet = (createdBy: boolean, isPremium: boolean, setCreatedBy: any, setLicensed: any, setIntroDone: any, setCodeLoaded: any, setFinished: any) => {
    if (!createdBy) {
      setCreatedBy(true);
      const typing: any = document.getElementById('typing');
      if (typing) {
        typing.currentTime = 1;
        typing.play();
        setTimeout(() => {
          typing.pause();
          setTimeout(() => {
            setLicensed(true);
            typing.play();
            setTimeout(() => {
              typing.pause();
              setTimeout(() => {
                document.getElementById("intro")?.animate({ marginLeft: "-1500px" }, { fill: "both", duration: 225, easing: "ease-in-out" });
                const swoosh: any = document.getElementById('swoosh');
                if (swoosh) {
                  swoosh.play();
                  setTimeout(() => {
                    document.getElementById("intro")?.classList.add("hidden");
                    setIntroDone(true);
                    onIntroDone(setCodeLoaded, setFinished, isPremium);
                  }, 500);
                }
              }, 500);
            }, 580);
          }, 1000);
        }, 1800);
      }
    }
  }