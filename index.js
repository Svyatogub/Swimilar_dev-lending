(function firstLoad() {
    sessionStorage.setItem("executed", true)
})();
// console.log(location.host)

function mainPageHandler() {
    sessionStorage.setItem("page", "start");
    window.location.href = "/index.html"
}
function firstPageHandler() {
    sessionStorage.setItem("page", "quiz");
    sessionStorage.setItem("forQuiz", "quiz");
    sessionStorage.removeItem("forReg")
    window.location.href = "/quiz/quiz.html"
}

function secondPageHandler() {
    sessionStorage.setItem("page", "registration");
    sessionStorage.setItem("forReg", "reg")
    sessionStorage.removeItem("forQuiz")
    window.location.href = "/registration/registration.html"
}

 function registrationHandler() {
    let loaded = sessionStorage.getItem("executed")
    let lastPage = sessionStorage.getItem("page");
    let qPage = sessionStorage.getItem("forQuiz");
    let rPage = sessionStorage.getItem("forReg");
    if(loaded) {
        firstPageHandler()
    }
    if(lastPage == "start" && qPage == "quiz") {
        firstPageHandler()
    }
    if(lastPage == "start" && rPage == "reg") {
        secondPageHandler()
    }
 }