var readlineSync= require("readline-sync")
var score=0

var username=readlineSync.question("whats ur name? ")
console.log("welcome to the quiz- DO U KNOW ME? "+username)
console.log("-----------")
console.log("Sorry,this application is made in JS, freaking case sensitive:/ so please answer in smallcase only!")
console.log("-----------")
console.log("LETs START")

//PLAY FUNC
function play(que,ans){
  var userans=readlineSync.question(que)

  if(userans===ans)
  {
    console.log("right!")
    score++
  
  }
  else{
    console.log("wrong!")
  }
  console.log("current score is "+score)
  console.log("----------")
}


play("where do i live? ", "hinganghat")
play("how much do i earn? ", "0 LOL")
play("do i love treks? ", "yes")
play("what is my surname? ", "nakhate")
play("do i like to do fun stuff in public? ","yes")