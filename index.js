let cards=[
    {
        image:"https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        value:1,
        status:"closed"
    },
    {
            image:"https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
            value:1,
            status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608825005-mid-century-modern-plant-pot-1608824988.jpg",
        value:3,
        status:"closed"
    },
    {
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608825005-mid-century-modern-plant-pot-1608824988.jpg",
            value:3,
            status:"closed"
    },
    {
        image:"https://www.thehindubusinessline.com/news/variety/x0lzjg/article31373595.ece/ALTERNATES/LANDSCAPE_355/Chota-BheemDDNational",
        value:4,
        status:"closed"
    },
    {
        image:"https://www.thehindubusinessline.com/news/variety/x0lzjg/article31373595.ece/ALTERNATES/LANDSCAPE_355/Chota-BheemDDNational",
        value:4,
        status:"closed"
    },
    {
        image:"http://images6.fanpop.com/image/photos/40800000/siberian-husky-cute-puppies-puppies-40835586-600-400.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"http://images6.fanpop.com/image/photos/40800000/siberian-husky-cute-puppies-puppies-40835586-600-400.jpg",
        value:5,
        status:"closed"
    },


]




let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;



    let cardsCopy=cards;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);

} 
}
