function navigation () {
    if(document.referrer !== "./quiz/quiz.html") {
        return window.history.back()
    } else {
        return window.location.href = './quiz/quiz.html'
    }
    
}
console.log(document.referrer)