export const onPurchase = (clickedPurchase: boolean, setClickedPurchase: any, licenseRef: any) => {
  if (!clickedPurchase) {
    document.getElementById("site")?.animate({ height: "290px" }, { fill: "both", duration: 750, easing: "ease-in-out" });
    setTimeout(() => {
      setClickedPurchase(true);
      const typing: any = document.getElementById('typing');
      if (typing) {
        typing.currentTime = 1;
        typing.play();
        setTimeout(() => {
          typing.pause();
          document.getElementById("license-input")?.classList.remove("hidden");
          licenseRef.current.focus();
        }, 250);
      }
    }, 750);
  }
}