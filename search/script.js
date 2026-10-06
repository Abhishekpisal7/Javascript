const users = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRwvwZQV1EYSZ4liHP8FvtN06WohAbG485XMOm6mCviuKe6Yp5lgO4DI5NpXgDomG_kRQEZBvIW6zmTbgE",
    name: "Donal Trump",
    email: "donaltrumpUSA@trump.com",
  },

  {
    imageUrl: "https://up.bjp.org/filesup/SPG-image/yogi_1.jpg",
    name: "Yogi Adityanath",
    email: "yogiadityanath@bjp.in",
  },

  {
    imageUrl: "https://assets.rahulgandhi.in/rg-website/cards/home-page/academia.webp",
    name: "Rahul Gandhi",
    email: "rahulgandhi@inc.in",
  },

  {
    imageUrl: "https://data.indianexpress.com/election2019/about/images/politician/narendra-modi.jpg?w=330",
    name: "Narendra Modi",
    email: "narendarmodi@bjp.in"
  },

  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90yBeB2ULaLb8_NoZ13IxFqmEELq72p4kqA22XQVSTgoD98gSGELe_nJ6&s=10",
    name: "Amit Shah",
    email: "amitshah@bjp.in"
  }
];

let userContainer = document.querySelector(".userContainer");
let search = document.querySelector('#search')

users.map((data) => {
    let { imageUrl, name, email } = data

    let div = document.createElement('div');
    div.className = 'userList';
    
    div.innerHTML = `
        <div class="image">
            <img
                src=${imageUrl}
                alt="error loading image"
            />
        </div>
            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        </div>
    `;

    userContainer.append(div);
})

search.addEventListener('keydown', (event) => {
    if(event.key !== 'Enter'){
        return
    }

    let findValue = search.value
    userContainer.innerHTML = ''

    users.filter((value) => {
        let { imageUrl, name, email } =  value
        console.log(name)
        
        if(name.toLowerCase().includes(findValue) || email.toLowerCase().includes(findValue)){
            let div = document.createElement('div')
            div.className = 'userList'
            div.innerHTML = `
                <div class="image">
                    <img
                        src=${imageUrl}
                        alt="error loading image"
                    />
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>
            `;  
            userContainer.append(div) 
        }
   })
})