Highcharts.setOptions({lang:{thousandsSep:","}});let chartIdGold=document.getElementById("chart-container-gold-oct-7");function drawHighcharts(){Highcharts.chart(chartIdGold,{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:10,spacingTop:20},title:{text:null},data:{googleSpreadsheetKey:"18_ItFBoHFQ5VO3rB8N7810fv2VPNrHfA8_GjpemEuCI"},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow",formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}setTimeout(function(){if(""===chartIdGold.innerHTML){let e=document.getElementsByClassName("chart-area-gold-oct-7");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZEdvbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0hpZ2hjaGFydHMiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInNwYWNpbmdMZWZ0Iiwic3BhY2luZ1RvcCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsInBsb3RPcHRpb25zIiwic2VyaWVzIiwibGluZVdpZHRoIiwibWFya2VyIiwiZW5hYmxlZCIsInN5bWJvbCIsImZpbGxDb2xvciIsInN0YXRlcyIsImhvdmVyIiwibGVnZW5kIiwieEF4aXMiLCJsYWJlbHMiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwieUF4aXMiLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJmb3JtYXR0ZXIiLCJudW1iZXJGb3JtYXQiLCJ0aGlzIiwidmFsdWUiLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImFsaWduIiwieCIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJjaGFydEFyZWEiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImRpc3BsYXkiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBUUFBLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUEsSUFBQUMsWUFBQUMsU0FBQUMsZUFBQSw4QkFpQkEsU0FBQUMsaUJBQ0FQLFdBQUFRLE1BQUFKLFlBQUEsQ0FDQUksTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLElBQ0FDLFlBQUEsR0FDQUMsV0FBQSxJQUVBQyxNQUFBLENBQ0FDLEtBQUEsTUFFQUMsS0FBQSxDQUNBQyxxQkFBQSxnREFTQUMsWUFBQSxDQUNBQyxPQUFBLENBQ0FDLFVBQUEsRUFFQUMsT0FBQSxDQUNBQyxTQUFBLEVBQ0FDLE9BQUEsU0FDQUMsVUFBQSxVQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUYsVUFBQSxlQU1BRyxPQUFBLENBQ0FMLFNBQUEsR0FFQU0sTUFBQSxDQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUMsV0FBQSxXQUdBQyxXQUFBLEdBT0FDLE1BQUEsQ0FDQW5CLE9BQUEsRUFDQWUsT0FBQSxDQUNBSyxTQUFBLEVBQ0FDLFNBQUEsUUFBQUMsVUFBQSxXQUNBLE9BQUFyQyxXQUFBc0MsYUFBQUMsS0FBQUMsTUFBQSxFQUFBLElBQUEsUUFLQUMsUUFBQSxDQUNBbEIsU0FBQSxHQUVBbUIsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsSUFFQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQXpDLE1BQUEsQ0FDQUksYUFBQSxJQUVBZ0IsT0FBQSxDQUNBc0IsTUFBQSxPQUNBQyxHQUFBLElBRUFULFFBQUEsQ0FDQW5CLFNBQUEsU0FwR0E2QixXQUFBLFdBQ0EsR0FBQSxLQUFBaEQsWUFBQWlELFVBQUEsQ0FFQSxJQUFBQyxFQUFBakQsU0FBQWtELHVCQUFBLHlCQUNBLElBQUEsSUFBQUMsRUFBQSxFQUFBQSxFQUFBRixFQUFBRyxPQUFBRCxJQUNBRixFQUFBRSxHQUFBekIsTUFBQTJCLFFBQUEsT0FHQXJELFNBQUFDLGVBQUEsa0JBQUErQyxXQUFBLDRJQUlBLEtBZ0dBLGFBQUFoRCxTQUFBc0QsWUFBQSxnQkFBQXRELFNBQUFzRCxXQUNBcEQsaUJBRUFGLFNBQUF1RCxpQkFBQSxtQkFBQXJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5sZXQgY2hhcnRJZEdvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWNvbnRhaW5lci1nb2xkLW9jdC03XCIpO1xuXG4vLyBjaGVja3MgZm9yIHRoZSBjaGFydCBJRCBhbmQgZGlzcGxheXMgYSBiYWNrdXAgaW1hZ2UgaWYgdGhlIGJyb3dzZXIgY2FuJ3QgZmluZCBpdFxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZihjaGFydElkR29sZC5pbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25vSWQnKTtcbiAgICAgICAgbGV0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhLWdvbGQtb2N0LTdcIik7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGFydEFyZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoYXJ0QXJlYVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIGluc2VydCBjaGFydCBzY3JlZW5zaG90IGhlcmVcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1mYWxsYmFja1wiKS5pbm5lckhUTUwgKz0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9mbS1zdGF0aWMuY25iYy5jb20vYXdzbWVkaWEvY2hhcnQvMjAxOS8xMC8wOC9jaGFydC1lcnJvcl93aWRlLjE1NzA1NjkzMzEyNTIucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTttYXgtd2lkdGg6NjYwcHhcIj4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd5ZXNJZCcpXG4gICAgfVxufSw1MDApO1xuXG5mdW5jdGlvbiBkcmF3SGlnaGNoYXJ0cygpIHtcbiAgICBIaWdoY2hhcnRzLmNoYXJ0KGNoYXJ0SWRHb2xkLCB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgIHNwYWNpbmdUb3A6IDIwXG4gICAgICAgIH0sIFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzE4X0l0RkJvSEZRNVZPM3JCOE43ODEwZnYyVlBOckhmQThfR2pwZW1FdUNJJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgYmFyIGNoYXJ0cyBvbmx5XG4gICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIC8vICAgICBzZXJpZXM6IHtcbiAgICAgICAgLy8gICAgICAgICBncm91cFBhZGRpbmc6IDAuMVxuICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gZm9yIGxpbmUgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAvLyBjbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja0xlbmd0aDogNSxcbiAgICAgICAgICAgIC8vIGVkaXRzIHhBeGlzIHRpY2tzXG4gICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgLy8gICAgIHdlZWs6ICclYi4gJWUnLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHRpY2tJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCAqIDdcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdycsICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBhZGRzIGNvbW1hcyB0byB0aG91c2FuZHNcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDUwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIHg6IC0xOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgZHJhd0hpZ2hjaGFydHMoKTtcbn0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZHJhd0hpZ2hjaGFydHMpO1xufSJdfQ==
