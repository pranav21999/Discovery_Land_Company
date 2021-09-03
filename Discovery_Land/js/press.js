window.addEventListener('DOMContentLoaded', function () {
    const lbtn = document.getElementById('left-btn')
    console.log(lbtn)
    const rbtn = document.getElementById('right-btn')
    console.log(rbtn)
    let arr = [{
        title: "Discovery's Nearst<br> Property in Kauai north <br>shore perserve", desc: `aaaaaaaaaaaaaaaaaaaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi eveniet error dignissimos dolorum
    maxime ex dolorem sunt aut? Sit aliquid maiores earum explicabo temporibus vero enim ea beatae
    sapiente officiis laborum dicta corporis at obcaecati, nulla maxime eaque aut ex impedit quibusdam
    eligendi ab nobis eos nemo! Nobis fugiat ea quisquam sit debitis? Perferendis officia omnis non
    eaque a distinctio. Minus quos hic veniam et voluptatibus reprehenderit tenetur cupiditate deserunt
    saepe reiciendis sequi, tempora officia blanditiis vero perferendis a porro doloribus eveniet! Sint
    ullam vitae veniam repellat quia laudantium optio saepe at necessitatibus. Eius earum fugiat
    explicabo commodi dicta, ratione maiores! Placeat tempora, odio, hic vero accusantium eveniet sit
`}, { title: "ddfsfdf vvfvfvr fs  ffewfwe", desc: `India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[23] is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.` }, { title: "Austreliya des fdfdfdf dsdas", desc: `Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.[13] It is the largest country by area in Oceania and the world's sixth-largest country. Australia's population of nearly 26 million,[7] in an area of 7,617,930 square kilometres (2,941,300 sq mi),[14] is highly urbanised and heavily concentrated on the eastern seaboard.[15] Canberra is the nation's capital, while the largest city is Sydney, and other major metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide.` }];

let heading = document.getElementById('desc')
console.log(heading);
    heading.innerHTML = arr[0].title


let desc = document.getElementById('title-desc')
console.log(desc);
    desc.innerHTML = arr[0].desc

    let count = 0


    lbtn.addEventListener('click', function() {
         console.log("i click left btn")
        if(count > 0) {
            count--
            heading.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc

        }
        else
        {
            count=arr.length-1
            heading.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc
            
        }
    })
    rbtn.addEventListener("click", function() {
         console.log("i click right btn")
        if(count < arr.length-1) {
            count++
            heading.innerHTML = arr[count].title

            desc.innerHTML = arr[count].desc
            desc1.innerHTML = arr[count].desc
            desc2.innerHTML = arr[count].desc
            
        }
            else
            {
                count=0
                heading.innerHTML = arr[count].title
                desc.innerHTML = arr[count].desc
                
            }
    
    })





})