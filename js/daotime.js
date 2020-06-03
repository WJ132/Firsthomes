function getDiff(start,end) {
    // // 1.创建一个开始的时间对象
    // var start = new Date();
    // // 2.创建要一个未来时间对象
    // var end = new Date(‘2020/06/01 23:00:00’);
    // // 3.求两个日前的时间差（差多少毫秒）
    var temp = end.getTime() - start.getTime();
    var date = parseInt(temp / 1000 / 60 / 60 / 24);  //天
				if(date>9){
					date=date
				}else{
					date='0'+date
				}
				var hours = parseInt(temp / 1000 / 60 / 60 % 60); // 小时
				if(hours>9){
					hours=hours
				}else{
					hours='0'+hours
				}
				var minute = parseInt(temp / 1000 / 60 % 60); // 分钟
				if(minute>9){
					minute=minute
				}else{
					minute='0'+minute
				}
				var seconds = parseInt(temp / 1000 % 60);  // 秒
				if(seconds>9){
					seconds=seconds
				}else{
					seconds='0'+seconds
				}
				var milliSecond = temp % 1000;   // 毫秒

				var obj = {
					date:date,
					hours:hours,
					minute:minute,
					seconds:seconds,
					milliSecond:milliSecond
				};
				return obj;
			}

			setInterval(function() {
			var s = new Date();
			var e = new Date('2020/6/10 12:00:00');
			var r = getDiff(s,e);
			if(e>=s){
				document.getElementById("day").innerHTML=(r.date);
				document.getElementById("hours").innerHTML=(r.hours);
				document.getElementById("minute").innerHTML=(r.minute);
				document.getElementById("seconds").innerHTML=(r.seconds);
			}
			return false;

            }, 1000);
