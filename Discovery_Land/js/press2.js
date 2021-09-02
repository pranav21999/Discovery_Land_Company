window.addEventListener('DOMContentLoaded', function () {

    // console.log('loaded')
    const lbtn = document.getElementById('left-btn')
    const rbtn = document.getElementById('right-btn')
    // console.log(lbtn, rbtn)

    let arr1 = [
        { cardcontext1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, odit.", cardheading1: "newyork post julyl5/2020"},
     { cardcontext1: "Paris is a major railway, highway, and air-transport hub served by two international airports",  cardheading1: "paris post april5/2021"},
     
     { cardcontext1: "Paris is a major railway, highway, and air-transport hub served by two international airports",  cardheading1: "paris post april5/2021"},
     { cardcontext1: "Paris is a major railway, highway, and air-transport hub served by two international airports",  cardheading1: "paris post april5/2021"},
     ];
   
       let arr2 = [{ cardcontext2: " The Discovery Land Company Foundation primarily supports children in  ", cardheading2: "newyork post janl0/2019"},
       { cardcontext2: " Paris received 38 million visitors in 2019, measured by hotel stays, with the largest numbers of foreign visitors ",  cardheading2: "paris post apri16/2021"},
        { cardcontext2: "78f",  cardheading2: "8.5mph" },
         { cardcontext2: "444f",  cardheading2: "0.5mph"}];
     
         let arr3 = [{ cardcontext3: " Wikipedia is written collaboratively by largely anonymous volunteers.  except in limited cases . ", cardheading3: "newyork post feb9/2021"},
         { cardcontext3: " The football club Paris Saint-Germain and the rugby union club Stade Français are based in Paris. The 80,000-seat ",  cardheading3: "paris post april5/2016"},
          { cardcontext3: "78f",  cardheading3: "8.5mph" },
           { cardcontext3: "444f",  cardheading3: "0.5mph"}];
       
      
           let arr4 = [{ cardcontext4: " The fundamental principles by which Wikipedia operates are the five pillars. The Wikipedia  ", cardheading4: "1.566mph"},
           { cardcontext4: "The Parisii, a sub-tribe of the Celtic Senones, inhabited the Paris area from around the middle of the 3rd century",  cardheading4: "paris post may21/2017"},
            { cardcontext4: "78f",  cardheading4: "8.5mph" },
             { cardcontext4: "444f",  cardheading4: "0.5mph"}];

    // row1
    let cardcontext1 = document.getElementById('context1')
    cardcontext1.innerHTML = arr1[0].cardcontext1

    let cardheading1 = document.getElementById('heading1')
    cardheading1.innerHTML= arr1[0].cardheading1


    let cardcontext2 = document.getElementById('context2')
    cardcontext2.innerHTML = arr2[0].cardcontext2

    let cardheading2 = document.getElementById('heading2')
    cardheading2.innerHTML= arr2[0].cardheading2


    let cardcontext3 = document.getElementById('context3')
    cardcontext3.innerHTML = arr3[0].cardcontext3

    let cardheading3 = document.getElementById('heading3')
    cardheading3.innerHTML= arr3[0].cardheading3


    let cardcontext4 = document.getElementById('context4')
    cardcontext4.innerHTML = arr4[0].cardcontext4

    let cardheading4 = document.getElementById('heading4')
    cardheading4.innerHTML= arr4[0].cardheading4


    let count = 0

    lbtn.addEventListener('click', function () {
        // console.log("i click left btn")
        if (count > 0) {
            count--
            cardcontext1.innerHTML = arr1[count].cardcontext1
            cardheading1.innerHTML = arr1[count].cardheading1

            cardcontext2.innerHTML = arr2[count].cardcontext2
            cardheading2.innerHTML = arr1[count].cardheading1

            cardcontext3.innerHTML = arr3[count].cardcontext3
            cardheading3.innerHTML = arr1[count].cardheading1

            cardcontext4.innerHTML = arr4[count].cardcontext4
            cardheading4.innerHTML = arr1[count].cardheading1

        }
        else {
            count = arr1.length - 1
            cardcontext1.innerHTML = arr1[count].cardcontext1
            cardheading1.innerHTML = arr1[count].cardheading1

            cardcontext2.innerHTML = arr2[count].cardcontext2
            cardheading2.innerHTML = arr1[count].cardheading1

            cardcontext3.innerHTML = arr3[count].cardcontext3
            cardheading3.innerHTML = arr1[count].cardheading1

            cardcontext4.innerHTML = arr4[count].cardcontext4
            cardheading4.innerHTML = arr1[count].cardheading1

        }


    })
    rbtn.addEventListener('click', function () {
        // console.log("i click right btn")
        if (count < arr1.length - 1) {
            count++
            cardcontext1.innerHTML = arr1[count].cardcontext1
            cardheading1.innerHTML = arr1[count].cardheading1

            cardcontext2.innerHTML = arr2[count].cardcontext2
            cardheading2.innerHTML = arr1[count].cardheading1

            cardcontext3.innerHTML = arr3[count].cardcontext3
            cardheading3.innerHTML = arr1[count].cardheading1

            cardcontext4.innerHTML = arr4[count].cardcontext4
            cardheading4.innerHTML = arr1[count].cardheading1


        }
        else {
            count = 0
            cardcontext1.innerHTML = arr1[count].cardcontext1
            cardheading1.innerHTML = arr1[count].cardheading1

            cardcontext2.innerHTML = arr2[count].cardcontext2
            cardheading2.innerHTML = arr1[count].cardheading1

            cardcontext3.innerHTML = arr3[count].cardcontext3
            cardheading3.innerHTML = arr1[count].cardheading1

            cardcontext4.innerHTML = arr4[count].cardcontext4
            cardheading4.innerHTML = arr1[count].cardheading1

        }

    })


})