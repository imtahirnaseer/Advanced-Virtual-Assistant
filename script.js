let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("Hello Sir,what can i help you?")
    }
    else if(message.includes("Who are you")){
        speak("i am virtual assistant, created by Tahir Naseer")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/@Tahirtechlab","_blank")
        }
        else if(message.includes("what is your name")){
        speak("My Name is Aditi")
        }
        else if(message.includes("what is your father name")){
        speak("My Father Name is Tahir Naseer because he is the one who created me. He is a talented software developer with a passion for creating innovative solutions.")
        }
        else if(message.includes("who is tahir nasir")){
        speak("Tahir Naseer is a skilled software developer and the creator of this virtual assistant. He has a strong background in programming and technology, and he enjoys building tools to help others.")
        }
        else if(message.includes("how are you")){
            speak("I am fine, thank you for asking. How can I assist you today?")
        }
        else if(message.includes("what can you do")){
            speak("I can assist you with various tasks such as opening websites, telling the time and date, and answering your questions.")
        }
        else if(message.includes("who created you")){
            speak("I was created by Tahir Naseer.")
        }
        else if(message.includes("what is your purpose")){
            speak("My purpose is to assist you with your tasks and provide information.")
        }
        else if(message.includes("do you have any hobbies")){
            speak("As a virtual assistant, I don't have hobbies, but I enjoy helping you.")
        }
        else if(message.includes("what is your favorite color")){
            speak("I don't have a favorite color, but I think all colors are beautiful.")
        }
        else if(message.includes("do you have any friends")){
            speak("As a virtual assistant, I don't have friends, but I am here to assist you.")
        }
        else if(message.includes("what is your favorite food")){
            speak("I don't eat food, but I can help you find recipes or order food online.")
        }
        else if(message.includes("can you sing a song")){
            speak("I can recite lyrics, but I cannot sing. How about I recite a song for you?")
        }
        else if(message.includes("can you tell me a joke")){
            speak("Sure! Why don't scientists trust atoms? Because they make up everything!")
        }
        else if(message.includes("what is the weather like")){
            speak("I cannot check the weather, but you can use a weather app or website for that information.")
        }
        else if(message.includes("can you dance")){
            speak("I cannot dance, but I can play some music for you.")
        }
        else if(message.includes("what is your favorite movie")){
            speak("I don't watch movies, but I can help you find information about movies.")
        }
        else if(message.includes("do you have any siblings")){
            speak("As a virtual assistant, I don't have siblings, but I am here to assist you.")
        }
        else if(message.includes("can you drive a car")){
            speak("I cannot drive a car, but I can help you find directions or call a cab.")
        }
        else if(message.includes("what is your favorite book")){
            speak("I don't read books, but I can help you find information about books.")
        }
        else if(message.includes("can you help me with my homework")){
            speak("I can try to help you with your homework. What subject do you need help with?")
        }
        else if(message.includes("do you like music")){
            speak("I don't have preferences, but I can play music for you.")
        }
        else if(message.includes("can you play a game with me")){
            speak("I cannot play games, but I can help you find online games to play.")
        }
        else if(message.includes("what is your favorite sport")){
            speak("I don't play sports, but I can help you find information about sports.")
        }
        else if(message.includes("can you cook")){
            speak("I cannot cook, but I can help you find recipes or order food online.")
        }
        else if(message.includes("do you like traveling")){
            speak("I don't travel, but I can help you find travel information and book trips.")
        }
        else if(message.includes("can you help me with shopping")){
            speak("I can help you find online stores and products to buy.")
        }
        else if(message.includes("what is your favorite animal")){
            speak("I don't have a favorite animal, but I think all animals are interesting.")
        }
        else if(message.includes("can you help me with my finances")){
            speak("I can help you find financial information and tools to manage your finances.")
        }
        else if(message.includes("do you like art")){
            speak("I don't have preferences, but I can help you find information about art.")
        }
        else if(message.includes("can you help me with my fitness goals")){
            speak("I can help you find fitness information and workout plans.")
        }
        else if(message.includes("what is your favorite holiday")){
            speak("I don't have a favorite holiday, but I can help you find information about holidays.")
        }
        else if(message.includes("can you help me with my job search")){
            speak("I can help you find job listings and information about job searching.")
        }
        else if(message.includes("do you like science")){
            speak("I find science fascinating and can help you find information about scientific topics.")
        }
        else if(message.includes("can you help me with my travel plans")){
            speak("I can help you find travel information and book trips.")
        }
        else if(message.includes("what is your favorite season")){
            speak("I don't have a favorite season, but I can help you find information about seasons.")
        }
        else if(message.includes("can you help me with my studies")){
            speak("I can help you find study materials and information on various subjects.")
        }
        else if(message.includes("do you like history")){
            speak("I find history interesting and can help you find information about historical events.")
        }
        else if(message.includes("can you help me with my health goals")){
            speak("I can help you find health information and tips to achieve your health goals.")
        }
        else if(message.includes("what is your favorite hobby")){
            speak("I don't have hobbies, but I enjoy helping you.")
        }
        else if(message.includes("can you help me with my project")){
            speak("I can help you find information and resources for your project.")
        }
        else if(message.includes("do you like technology")){
            speak("I find technology fascinating and can help you find information about tech topics.")
        }
        else if(message.includes("can you help me with my presentation")){
            speak("I can help you find information and resources for your presentation.")
        }
        else if(message.includes("what is your favorite subject")){
            speak("I don't have a favorite subject, but I can help you find information on various subjects.")
        }
        else if(message.includes("can you help me with my research")){
            speak("I can help you find research materials and information.")
        }
        else if(message.includes("do you like mathematics")){
            speak("I find mathematics interesting and can help you find information about math topics.")
        }
        else if(message.includes("can you help me with my writing")){
            speak("I can help you find writing resources and tips.")
        }
        else if(message.includes("what is your favorite quote")){
            speak("I don't have a favorite quote, but I can help you find quotes.")
        }
        else if(message.includes("can you help me with my coding")){
            speak("I can help you find coding resources and information.")
        }
        else if(message.includes("do you like programming")){
            speak("I find programming fascinating and can help you find information about programming.")
        }
        else if(message.includes("can you help me with my design")){
            speak("I can help you find design resources and tips.")
        }
        else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/imtahirnaseer","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Aditi","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Aditi","")}`,"_blank")
    }
}




const subdomain = 'demo'; // Replace with your custom subdomain
        const frame = document.getElementById('frame');

        frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;

        window.addEventListener('message', subscribe);
        document.addEventListener('message', subscribe);

        function subscribe(event) {
            const json = parse(event);

            if (json?.source !== 'readyplayerme') {
                return;
            }

            // Susbribe to all events sent from Ready Player Me once frame is ready
            if (json.eventName === 'v1.frame.ready') {
                frame.contentWindow.postMessage(
                    JSON.stringify({
                        target: 'readyplayerme',
                        type: 'subscribe',
                        eventName: 'v1.**'
                    }),
                    '*'
                );
            }

            // Get avatar GLB URL
            if (json.eventName === 'v1.avatar.exported') {
                console.log(`Avatar URL: ${json.data.url}`);
                document.getElementById('avatarUrl').innerHTML = `Avatar URL: ${json.data.url}`;
                document.getElementById('frame').hidden = true;
            }

            // Get user id
            if (json.eventName === 'v1.user.set') {
                console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
            }
        }

        function parse(event) {
            try {
                return JSON.parse(event.data);
            } catch (error) {
                return null;
            }
        }

        function displayIframe() {
            document.getElementById('frame').hidden = false;
        }