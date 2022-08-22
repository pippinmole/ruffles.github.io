window.addEventListener("load", () => {
    const fades = $(".fade-2");
    
    fades.each((index, elem) => {
        $(elem).delay(100 * index).animate({
            opacity: 1
        }, 2200);
    });
});