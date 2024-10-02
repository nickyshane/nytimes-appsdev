const API_KEY = '94QtdIeLldHIWk4WU6hskuwqqSmATbXr'

getdata('key.json')

async function getdata(file){
    try {
        const result=await fetch(file) //key.json
        const data=await result.json()
        console.log(data.results)

        const newsContainer = document.querySelector('.news-container');
        data.results.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            let imageHTML = '';

            if (item.multimedia && item.multimedia.length > 0) {
                const photo = item.multimedia.find(media => media.type === 'image' && media.subtype === 'photo');
                if (photo) {
                    imageHTML = `<img src="${photo.url}" alt="${item.title}" class="news-image">`;
                }
            }
        
            newsItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.abstract}</p>
                <a href="${item.url}">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        }); 
    } catch (error) {
        console.error("Error fetching data:", error);
        document.querySelector('.news-container').innerHTML = "<p>Unable to fetch news. Please try again later.</p>";
    }

    //  let time = document.getElementById("current-time");

    //  setInterval(() =>{
    //      let d = new Date();
    //      time.innerHTML = d.toLocaleTimeString();
    //  }, 1000)
}
//should replace the API key. Nagkakagulo yung website kapag wala yung key.
//Pero kasi limited yun kapag ginamit ko.