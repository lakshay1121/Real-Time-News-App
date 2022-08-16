
//initialize api , parameters.

let source = 'bbc-news';
let apiKey = '363a8bd26c474c97a3636c8b4f1d38fd';



console.log("this is app.js")

let newsAccordion = document.getElementById('newsAccordion');


//create a get request.

//create an ajax get request.

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


//onload

xhr.onload = function () {

    if (this.status === 200) {

        let json = JSON.parse(this.responseText);

        let articles = json.articles;



        // console.log(articles);

        let newsHtml = "";

        articles.forEach(function (element, index) {



            // console.log(articles[news]);


            let news = `
            <div class="accordion-item ">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <strong> <h5 class="btn show text-primary">Breaking News ${index + 1}:</strong> </h5> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body bg-light">
                    
                   ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here</a>
                </div>
            </div>
            </div>
            `

            newsHtml += news;

            newsAccordion.innerHTML = newsHtml;

        });

    }

    else {

        console.log("Some Error Occured!");
    }

};






//send 

xhr.send();

