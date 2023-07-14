 var x = [`"Entrancing beauty falls nothing short of absolute magnificent creation."`,`"Stories End, Love Doesn't."`,`"There is no friend as loyal as a book."`,`"It is better to be hated for what you are than to be loved for what you are not."`,`"Without music, life would be a mistake."`,`"Be yourself; everyone else is already taken."`,`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`, `"A room without books is like a body without a soul."`, `"Be the change that you wish to see in the world."`,`"A friend is someone who knows all about you and still loves you."`,`"To live is the rarest thing in the world. Most people exist, that is all."`] 
 var y = [`"--Wayne Chirisa"`,`"--Sumit Rai"`,`"--Ernest Hemingway"`,`"--Andre Gide, Autumn Leaves"`,`"--Friedrich Nietzsche, Twilight of the Idols"`,"--Oscar Wilde","--Albert Einstein", " --Marcus Tullius Cicero", "--Mahatma Gandhi",`"--Elbert Hubbard"`,`"--Oscar Wilde"`] 

 var count = 0;
//  var r = 0 ;
 function test()
 {
    document.getElementById("apper").innerHTML=x[count];
    document.getElementById("app").innerHTML=y[r];
    // var r = Math.ceil(Math.random() * 10);

    count++;
    
    if(count>x.length-1 && count>y.length-1)
    {
        count=0;
    }
  //  getR();
    // console.log(r);
    console.log(count );
 }

//  function getR() 
//  {
//     var previousNumber;
//     var r = Math.ceil(Math.random() * 10);
//     while (r == previousNumber) 
//     {
//       r = Math.ceil(Math.random() * 10);
//     }
//     previousNumber = r;
//     return r;
//   }