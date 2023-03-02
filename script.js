async function API(){
    let data = await fetch("https://type.fit/api/quotes");
        data = await data.json();
    let num = Math.floor((Math.random()*1641)+1);
    document.getElementById('text-value').innerText= data[num].text;
    document.getElementById('author-value').innerText= `-${data[num].author}`;
  }

  API()