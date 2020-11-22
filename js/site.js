window.addEventListener("load", () => {
    const fades = $(".fade-2");
    
    fades.each((index, elem) => {
        $(elem).delay(300 * index).animate({
            opacity: 1
        }, 1000);
    });
});