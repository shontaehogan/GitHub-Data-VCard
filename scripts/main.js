


let body = document.querySelector('.body');

// name the request event

let request = new XMLHttpRequest();

// define the request to read the data from this gitHub link
request.open('GET', 'https://api.github.com/users/shontaehogan');

// when data from the request is loaded, run the function "githubData"
request.addEventListener("load", githubData);
// send request to the specified github url
request.send();

// call githubData function
function githubData() {
// create an object for me to interact with from the data i got back from the web response
  let info = JSON.parse(this.responseText);
  // console.log(info);
  // console.log(info.name);

console.log(info);

  let form = `
    <header class = boxTop>
    <h1>${info.name}</h1>
    </header>

    <section class = boxBody>
      <div class = basics>
        <h2>The Basics</h2>
          <ul>
            <li><span class="text">Name: </span> ${info.name}</li>
            <li><span class="link">GitHub URL:</span><a href="${info.html_url}"> shogan</a></li>
            <li><span class="text">Email: </span><a href= "${info.email}">shogan@gmail.com</a></li>
            <li><span class="text">Company: </span> ${info.company}</li>
            <li><span class="link">Website: </span><a href= "${info.url}"> www.mysite.com</a></li>
          </ul>
      </div>

      <hr>

      <div class = story>
        <h2>The Story</h2>
          <p>${info.bio}</p>
      </div>

      <div class = picture>
        <img src="${info.avatar_url}">
      </div>
    </section>
  `;
  body.innerHTML = form;
}
