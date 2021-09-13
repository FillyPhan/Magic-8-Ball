      
        
        var answer = new Array();

        answer[0] = "It is Certain."
        answer[1] = "It is decidedly so."
        answer[2] = "Without a doubt."
        answer[3] = "Yes definitely."
        answer[4] = "You may rely on it"
        answer[5] = "As I see it, yes."
        answer[6] = "Most likely."
        answer[7] = "Outlook good"
        answer[8] = "Yes."
        answer[9] = "Signs point to yes."
        answer[10] = "Reply hazy, try again."
        answer[11] = "Ask again later."
        answer[12] = "Better not tell you now."
        answer[13] = "Cannot predict now."
        answer[14] = "Concentrate and ask again."
        answer[15] = "Don't count on it."
        answer[16] = "My reply is no."
        answer[17] = "My sources say no."
        answer[18] = "Outlook not so good."
        answer[19] = "Very doubtful."
        
        var random = Math.floor(Math.random()*(answer.length));
        console.log(answer[random]);
       
        function wait(ms){
            var start = new Date().getTime();
            var end = start;
            while(end < start + ms) {
             end = new Date().getTime();
  }
}
        
        
        document.addEventListener("keyup", function(event){
             if (event.keyCode === 13) {
                document.getElementById("text1").innerHTML = answer[random];
              
             }
         }
        );