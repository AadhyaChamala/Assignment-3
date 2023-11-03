// IIFE --> Immediately invoke function expression
(function(){
    function Start()
    {
        console.log("App Started");
    }
    window.addEventListener("load",Start);
})();