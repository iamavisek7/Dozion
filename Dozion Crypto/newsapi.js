fetch("https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset=28800&lang_ID=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
		"x-rapidapi-key": "e8c3104e2fmsh8120fadc12a9802p1caed9jsnb57f5c2abfb1"
	}
})
.then(data => {
	return data.json();
})

.then((completedata)=>{
   /* console.log(completedata[0].name);  */
 /*  document.getElementById("coin-card").innerHTML = completedata */
 let halwa=completedata.data[0].screen_data.news;
 let html = "";
 halwa.map((values)=>{
   html+=` <div class="news-grid1">
   <div class="news-label1" >
   <div class="news1">
   <h2 class="name1">${values.HEADLINE}</h2>
   </div>
   <img class="pic1" src= ${values.related_image} style="width: 100px; height: 100px" class="coin-images">
   </div>
</div>`

});
 document.getElementById("news-card").innerHTML = html;
})
.catch(err => {
	console.error(err);
});
