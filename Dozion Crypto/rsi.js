fetch("https:api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMjAwMDJAaWlpdC1iaC5hYy5pbiIsImlhdCI6MTY0NTAxMDU5OCwiZXhwIjo3OTUyMjEwNTk4fQ.2_mKo12S3OzIN11ZFr4QwH0sT_Qn_j1HeDFfuo4kmEA&exchange=binance&symbol=BTC/USDT&interval=1h",{

}).then(data=>{
  return data.json();
}).then(rsidata=>{
  rsidata=rsidata.value;
  var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: rsidata,
		title: { text: "RSI-INDEX" },
		type: "indicator",
		mode: "gauge+number"
	}
];

var layout = { width: 400, height: 400, margin: { t: 0, b: 0,r:0,l:0},paper_bgcolor: '#000000'};
Plotly.newPlot('meter', data, layout);

})
.catch(err=>{
  console.log(err);
});
