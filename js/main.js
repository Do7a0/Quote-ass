// var ParentQuote=document.getElementById("parent-quote");
// var ParentQuoterandom=document.getElementById("parent-randomquote");

// var i=0;
// function changeQuote(){
//     var arrQuotes = [`<P></p>  ,
//         kjuhy
//         ,nbbbn    ,
        
        
//         `]

// }

var Quotes = [
    {
        author: 'Jim Rohn', 
     quote: 'Beware of what you become in pursuit of what you want.'
    },
    {
    author: 'Epictetus', 
     quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        author: 'Frank Sinatra', 
     quote: 'The best revenge is massive success.'
    },
    {author: 'Wayne Gretzy', 
     quote: 'You miss 100% of the shots you don\'t take.'
    },
    {author: 'Nelson Mandela', 
     quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {author: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
];

var newIndex;

var lastIndex;

var displayQuotes = [];



function  changeQuote(){
    if( displayQuotes.length==Quotes.length){
        displayQuotes =[];
    }




    do{
        newIndex =Math.floor(Math.random()*Quotes.length)
    }
    while(newIndex ==lastIndex || displayQuotes.includes(newIndex) );
    lastIndex= newIndex


    console.log(newIndex);

    document.getElementById('quote').innerHTML=Quotes[newIndex].quote;
    document.getElementById('author').innerHTML=Quotes[newIndex].author;

}

