let player = {
    name : "Per",
    chips : 145
  }
  
  let cards = [] 
  let sum = 0
  let hasBlackJack = false
  let isAlive = false

  let message = ""
  
  let messageEl = document.querySelector("#message-el")
  let sumEl = document.querySelector("#sum-el")
  let cardsEl = document.querySelector("#cards-el")
  let playerEl = document.querySelector("#player-el")
  
  playerEl.textContent = player.name + ": $" + player.chips
  
  function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1 
   
   if (randomCard > 10){  
    return 10
   } else if (randomCard===1){
    return 11
   } else{
    return randomCard
   }
  }
  
  function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //array -ordered list of items
    sum = firstCard + secondCard
    renderGame()
  }
  
  function renderGame(){
    cardsEl.textContent = "Cards: " // + cards[0] +" " + cards[1] 
    // Create a for loop that renders out all the cards instead of just two
     for (let i = 0; i <cards.length; i++){
       cardsEl.textContent+=cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
  
  if (sum <= 20){
           message = "Do you want draw a new card?"
          
         } else if(sum===21){
           message = "Wohoo! You've got Blackjack!"
           hasBlackJack = true
         } else if(sum > 21) {
           message = "You're out of the game!"
           isAlive = false
        }
        messageEl.textContent = message
  
      }
  
     function newCard() {
        if(isAlive === true && hasBlackJack === false){
      console.log("Drawing a new card from the deck!")
    
      let card = getRandomCard()
      sum += card
  
      cards.push(card)
      console.log(cards)
      renderGame()
     }
    }