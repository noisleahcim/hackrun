// Add values to the values array and see what happens :)
var colours = ["#719b3f","#eaeaea","#004c93"];
var values = [4250,10000,7500];
drawChart(values,"#chart",13,colours) // You can adjust the margin between each bar by changing 10 to whatever you like
function drawChart(data,selector,padding,colours){
    var colorcounter = 0;
    var max = Math.max.apply(Math, data);
    var chart = document.querySelector(selector);
    var barwidth = ((chart.offsetWidth-(values.length-1)*padding-(data.length)*10)/data.length);
    var sum = data.reduce(function(pv, cv) { return pv + cv; }, 0);
    var left = 0;
    for (var i in data){
        var newbar = document.createElement('div');
        var par = document.createElement('p');
        newbar.setAttribute("class", "bar");
        newbar.style.width=43+"px";
        newbar.style.height=((data[i]/max)*100)+"%";
        newbar.style.left=left+"px";
        newbar.style.backgroundColor=colours[colorcounter];
        par.textContent="19";
        par.style.color=colours[colorcounter];
        newbar.appendChild(par);
        chart.appendChild(newbar);
        left += (barwidth+padding+10+43);
        colorcounter++;
    }
}