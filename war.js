// Sets up the card class
class Card 
{
    constructer(cardName, cardValue, cardSuite,)
    {
        this.cardName = cardName
        this.cardValue = cardValue
        this.cardSuite = cardSuite
    }    

    // Shows the card and prints a friendly message
    showCard(player)
    {
        console.log('Player ' + player + '\'s card: ' + this.cardName + ' of ' + this.cardSuite )
     //   console.log(this.cardName + ' of ' + this.cardSuite)
    }

}//end Card class

// Sets up the deck as an array of the card class
let deck = [new Card()]
let player1Deck = [new Card()]
let player2Deck = [new Card()]
let tempArray = [new Card()]


// Prime read for a    
let a = 0

// Main loop to setup cards.  Runs once for each suite
for (let j = 0; j < 4; j++)
{

    if (j === 0)
    {
        setCard(a,"HEART")
    }
    else if (j === 1)
    {
        setCard(a,"CLUB")
    }
    else if (j === 2)
    {
        setCard(a,"SPADE")
    }
    else
    {
        setCard(a,"DIAMOND")
    }

    a += 13
}

// Function creates 13 new cards (2 - ace) of the same suite
function setCard(index,suite)
{
    for (let i = 0; i < 13; i++)
    {
        deck[index + i] = new Card()
        deck[index + i].cardSuite=suite
        deck[index + i].cardName=pickName(i+2)
        deck[index + i].cardValue=(i + 2)   
    }
}

// Function assigns the name of the card.  Used for displaying Jack - Ace properly
function pickName(cardNumber)
{
    switch(cardNumber)
        {
            case 11:
                cardNumber="Jack"
                break;
            case 12:
                cardNumber="Queen"
                break;
            case 13:
                cardNumber="King"
                break;
            case 14:
                cardNumber="Ace"
                break;
            default:
                cardNumber=cardNumber%15
        }

    return(cardNumber)
}

shuffleCards()
dealCards()

// // Shows all the cards in the deck 
// // Debug - can be removed
// console.log('\nPlayer 1\'s Deck:')
// for (let i = 0; i < player1Deck.length - 1; i++)
// {
//     player1Deck[i].showCard(1)
// }

// console.log('\nPlayer 2\'s Deck')
// for (let i = 0; i < player2Deck.length - 1; i++)
// {

//     player2Deck[i].showCard(2)
// }

playGame()



// Function uses the  durstenfeld shuffle algorithm to shuffle the cards around
function shuffleCards()
{
    for (let i = (deck.length - 1); i > 0; i--)
    {
        let random = Math.floor(Math.random() * (i + 1 ))
        let temp = deck[i]
        deck[i] = deck[random]
        deck[random] = temp
    }
}

// Function to split the deck between the two player
function dealCards()
{
  
    let exit = deck.length
    for (let i = 0; i < exit; i++)
    {
        if( i%2 )
        {
            player2Deck.unshift(deck.pop())
        }
        else
        {
            player1Deck.unshift(deck.pop())            
        }
    }
}

// Function to play the game
function playGame()
{

    // Set's up the round counter
    let roundCount = 1

    while (player1Deck.length != 0 || player2Deck.length != 0)
    {
   
        console.log('\nRound: ' + roundCount)
        tempArray.unshift(player1Deck.pop())
        tempArray[0].showCard(1)
        console.log("Player 2 pulls a card from the top of the deck")
        tempArray.unshift(player2Deck.pop())
        tempArray[1].showCard(2)
        roundCount++
    }

    if (player1Deck.length === 0)
    {
        console.log('Player 2 is the WINNER!')
    }
    else
    {
        console.log('Player 1 is the WINNER!')
    }
}





// //Function to handle a war situation.  Based upon the rules outlined here: https://www.pagat.com/war/war.html
// function war()
// {

//     // Pulls player 1 card
//     cardP1 = playerOne.pop();

//     // Pulls player 2 card
//     cardP2 = playerTwo.pop();

//     // Puts both cards in a temp Array to store the values in the event war is declared
//     tempCardArray.push(cardP1)
//     tempCardArray.push(cardP2)
    
//     // Displays each players card for the round
//     displayHand(cardP1, cardP2)
    
//     // Checks to see if Player 1 wins
//     if ( cardP1[1] > cardP2[1] )
//     {
//         console.log("Player 1 wins")
//         addCard(1)
//     }
//     // Checks to see if Player 2 wins
//     else if ( cardP1[1] < cardP2[1])
//     {
//         console.log ("Player 2 wins")
//         addCard(2)
//     }
//     // This if statement will only be tested if both cards match (the first two statements are false)
//     // This will check if both players have enough cards to play war (at least 2).  Only evalutes to true if they do
//     else if ( playerOne.length > 1 && playerTwo.length > 1)
//     {

//         showWar()
//         console.log("Player 1 puts a card face down")
//         console.log("Player 2 puts a card face down")
        
//         // Adds the "face down" cards to the temp Array
//         tempCardArray.push(playerOne.pop())
//         tempCardArray.push(playerTwo.pop())
//         war()
//     }
//     // This statement will check if both players have less then the number of cards needed. If so, then
//     //  winning the hand of war will go to whoever started it
//     else if ( playerOne.length < 2 && playerTwo.length < 2)
//     {
//         showWar()
//         // If it's an even round, then player 2 went first and wins
//         if (roundCount % 2)
//         {
//             console.log("Neither player has enough cards, so Player 1 is the winner since it was his turn")
//             addCard(1)
//         }
//         else
//         {
//             console.log("Neither player has enough cards, so Player 2 is the winner since it was his turn")
//             addCard(2)
//         }
//     }
//     // The last possibility is that it's war and only 1 of the two players doesn't have enough cards
//     //  this will test to see which player that is and give the win to the other player
//     else 
//     {
//         showWar()
//         if (playerOne.length < 2)
//         {
//             console.log("Player 2 wins round because player 1 did not have enough cards to play war")
//             addCard(2)
//         }
//         else if (playerTwo.length < 2)
//         {
//             console.log("Player 1 wins round because player 2 did not have enough cards to play war")
//             addCard(1)
//         }

     
//     }
    
// }

// // Function will display the two cards passed to it.  It will interperet 11 - 14 
// //  as face cards and display them as such.
// function displayHand(p1Card,p2Card,pNum)
// {
//     // Setup a temporary card variable for display purposes
//     let tempC1 = p1Card.slice(0)
//     let tempC2 = p2Card.slice(0)

//     //Checks if the card is a face card and assigns the face name
//     // to a temp variable for display puroses only.
//     if (tempC1[1] > 10)
//     {
//         switch(tempC1[1])
//         {
//             case 11:
//                 tempC1[1]="Jack"
//                 break;
//             case 12:
//                 tempC1[1]="Queen"
//                 break;
//             case 13:
//                 tempC1[1]="King"
//                 break;
//             case 14:
//                 tempC1[1]="Ace"
//                 break;
//         }
    
//     }
    
//     if (tempC2[1] > 10)
//     {
//         switch(tempC2[1])
//         {
//             case 11:
//                 tempC2[1]="Jack"
//                 break;
//             case 12:
//                 tempC2[1]="Queen"
//                 break;
//             case 13:
//                 tempC2[1]="King"
//                 break;
//             case 14:
//                 tempC2[1]="Ace"
//                 break;
//         }

//     }

//     // Outputs the two players cards
//     // if pNum isn't passed to the function it's a regular hand.
//     // if it is, then it's a war hand and the display is slightly different
//     if (typeof(pNum) == "undefined")
//     {
//         console.log('\nPlayer 1 CARD:',tempC1)
//         console.log('Player 2 CARD:',tempC2)
//     }
//     else
//     {
//         console.log("Adding card",tempC1,"to Player",pNum,"'s hand")
//         console.log("Adding card",tempC2,"to Player",pNum,"'s hand")
//     }

// }

// function showWar()
// {
//     console.log("*********")
//     console.log("   WAR")
//     console.log("*********")

// }