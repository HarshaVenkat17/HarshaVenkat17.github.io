window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
const icon = document.querySelector('.mic-icon')
let line = document.createElement('p');
let change = document.querySelector('.change');
change.append(line);
line.textContent="Tap to speak";
const sound = document.querySelector('.sound');
icon.addEventListener('click', () => {
  line.textContent="Listening..."
  sound.play();
  dictate();
});
const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    sp=speechToText.toLowerCase();
    qList=sp.split(" ");
    sList=["how","why","what","which","where","when","who"];
    tList=["tell ","tell about","tell me","tell me about"];
    if (event.results[0].isFinal) {
        line.textContent="Analysing...";
        setTimeout (function(){
          line.textContent="Tap to speak"
        },4000);
      if (sp.includes('time')) {
          speak(getTime);
      }
      if (sp.includes('hi')||sp.includes('hello')||sp.includes('hey')) {
          speak2("Hey boss, What can I do for you?");
      }
      else if (sp.includes('date')) {
          speak(getDate);
      }
      else if ((sp.includes('who are you'))||((sp.includes('name'))&&(sp.includes('your')))){
          reply(1);
      }
      else if (sp.includes('how are you')) {
          reply(2);
      }
      else if (sp.includes('weather in')) {
          getTheWeather(sp);
      }
      else if ((sp.includes('weather'))||(sp.includes('temperature'))){
          getTheWeather2();
      }

      else if (sp.includes('in youtube')){
          openYV(sp);
      }

      else if (sp.includes('netflix')){
          openBr(1);
      }
      else if (sp.includes('amazon prime')){
          openBr(2);
      }
      else if (sp.includes('amazon')){
          openBr(3);
      }
      else if (sp.includes('flipkart')){
          openBr(4);
      }
      else if (sp.includes('zomato')){
          openBr(5);
      }
      else if (sp.includes('swiggy')||sp.includes('order food')){
          openBr(6);
      }
      else if (sp.includes('youtube')){
          openBr(8);
      }
      else if (sp.includes('calculator')){
          openBr(9);
      }
      else if (sp.includes('whatsapp')){
          openBr(10);
      }
      else if((sp.includes('show')||sp.includes('movie'))&&(sp.includes('book')||sp.includes('ticket'))){
          openBr(11);
      }
      else if(sp.includes('microsoft')||sp.includes('ms')){
        if (sp.includes('presentation')||sp.includes('powerpoint'))
          {openBr(12);}
        else if (sp.includes('word'))
          {openBr(13);}
        else if (sp.includes('excel'))
          {openBr(14);};
      }
      else if(sp.includes('book')){
        if (sp.includes('cab')||sp.includes('car')||sp.includes('taxi'))
          {openBr(15);}
        else if (sp.includes('bus'))
          {openBr(16);}
        else if (sp.includes('train'))
          {openBr(17);}
        else if (sp.includes('plane'))
          {openBr(18);};
      }
      else if (sp.includes('calendar'))
          {openBr(20);}
      else if (sp.includes('google drive'))
          {openBr(21);}
      else if (sp.includes('sports'))
          {openBr(22);}
      else if (sp.includes('news'))
          {openBr(23);}
      else if (sp.includes('songs') || sp.includes('music'))
          {openBr(24);}
      else if (sp.includes('timer'))
          {openBr(25);}
      else if (sp.includes('stop watch')||sp.includes('stopwatch'))
          {openBr(26);}
      else if (sp.includes('mail')&&(sp.includes('write')||sp.includes('send')))
          {openBr(28);}
      else if ((sp.includes('mail')&&sp.includes('inbox'))||(sp.includes('email')||sp.includes('gmail')))
          {openBr(27);}
      else if (sp.includes('outlook'))
          {openBr(29);}
      else if (sp.includes('one drive') || sp.includes('onedrive'))
          {openBr(30);}
      else if (sp.includes('skype'))
          {openBr(31);}
      else if (sp.includes('hangout'))
          {openBr(32);}
      else if (sp.includes('google slides'))
          {openBr(33);}
      else if (sp.includes('google sheets'))
          {openBr(34);}
      else if (sp.includes('google doc'))
          {openBr(35);}
      else if (sp.includes('google photos'))
          {openBr(36);}
      else if (sp.includes('google duo'))
          {openBr(37);}
      else if (sp.includes('google meet'))
          {openBr(38);}
      else if (i=check2(sp))
      {sp=sp.replace(tList[i],"");
        window.open("https://www.google.com/search?q="+sp);}
      else if (check1())
      {window.open("https://www.google.com/search?q="+sp);}

      else if(sp.includes('locat')){
        sp=sp.replace(" in ","")
        sp=sp.replace("google ","")
        sp=sp.replace("maps","")
        sp=sp.replace("map","")
        sl=sp.split(" ");
        var sTerm;
        if(sp.includes("locate"))
        {
          sTerm=sl.slice(sl.indexOf("locate")+1,).join("+");
        }
        else if (sp.includes("location"))
        {
          sTerm=sl.slice(sl.indexOf("location")+2,).join("+");
        }
        url="https://www.google.com/maps?q="+sTerm;
        window.open(url);
      }
      else if(sp.includes("navigate")||sp.includes("directions"))
      {
      sp=sp.replace(" in ","");
      sp=sp.replace("google ","");
      sp=sp.replace("maps","");
      sp=sp.replace("map","");
      var tAddr,fAddr;
        if (sp.includes("from"))
          {fAddr=qList.slice(qList.indexOf("from")+1,qList.indexOf("to")).join("+");}
        else
          {fAddr="My+Location";}
        if(sp.includes("to"))
          {tAddr=qList.slice(qList.indexOf("to")+1,).join("+");}
        url="https://www.google.com/maps?saddr=fAddr&daddr=tAddr";
        url=url.replace("fAddr",fAddr);
        url=url.replace("tAddr",tAddr);
        window.open(url);
      }
      else if (sp.includes(' map'))
          {openBr(19);}
      else if(sp.includes('search')){
          opentab(sp);
      }
      else if(sp.includes('close')||sp.includes('exit')||sp.includes('quit')){
          closetab();
      }
      else if (sp.includes('google')){
          openBr(7);
      }
      else{
        s="Sorry! I didn't listen. Please say again.";
        //paragraph.textContent="";
        speak2(s);
      }
    }
  }
  //line.textContent="Tap to speak";
}

const speak = (action) => {
  utterThis = new SpeechSynthesisUtterance(action());
  synth.speak(utterThis);
};
const speak2 = (speech) => {
  utterThis = new SpeechSynthesisUtterance(speech);
  synth.speak(utterThis);
};
const opentab=(speech)=>{
  c='search';
  ind=speech.indexOf(c);
  speech=speech.replace("in google","")
  window.open("https://www.google.com/search?q="+speech.substr(ind+6,));
};
const closetab=()=>{
  window.close();
};
const check1=()=>{
  for (var i = sList.length - 1; i >= 0; i--) {
    if(qList.includes(sList[i])){
      {return true;}
    }
  }
  return false;
}
const check2=(sp)=>{
  for (var i = tList.length - 1; i >= 0; i--) {
    if(sp.indexOf(tList[i])!=-1){
      {return i;}
    }
  }
  return false;
}
const openYV=(speech)=>{
  speech=speech.replace("search","");
  speech=speech.replace("open","");
  speech=speech.replace("in youtube","");
  window.open("https://www.youtube.com/results?search_query="+speech);
};
const reply=(opt)=>{
  if (opt==1)
  {speak2("I am Harsha. Version 2 point O. ");}
  else if (opt==2)
  {speak2("I am fine. Thank you.");};
  };
const openBr=(opt)=>{
  if (opt==1)
  {window.open("https://www.netflix.com/");}
  else if (opt==2)
  {window.open("https://www.primevideo.com/");}
  else if (opt==3)
  {window.open("https://www.amazon.in");}
  else if (opt==4)
  {window.open("https://www.flipkart.com/");}
  else if (opt==5)
  {window.open("https://www.zomato.com");}
  else if (opt==6)
  {window.open("https://www.swiggy.com/restaurants");}
  else if (opt==7)
  {window.open("https://www.google.com/");}
  else if (opt==8)
  {window.open("https://www.youtube.com/");}
  else if (opt==9)
  {window.open("https://www.calculator.com/calculators/scientific");}
  else if (opt==10)
  {window.open("https://web.whatsapp.com/");}
  else if (opt==11)
  {window.open("https://in.bookmyshow.com/");}
  else if (opt==12)
  {window.open("https://office.live.com/start/Powerpoint.aspx");}
  else if (opt==13)
  {window.open("https://office.live.com/start/Word.aspx");}
  else if (opt==14)
  {window.open("https://office.live.com/start/Excel.aspx");}
  else if (opt==15)
  {window.open("https://www.goibibo.com/cars/");}
  else if (opt==16)
  {window.open("https://www.redbus.in/bus-tickets/");}
  else if (opt==17)
  {window.open("https://www.irctc.co.in/nget/train-search");}
  else if (opt==18)
  {window.open("https://www.goibibo.com/flights/");}
  else if (opt==19)
  {window.open("https://www.google.com/maps/");}
  else if (opt==20)
  {window.open("https://calendar.google.com/calendar/r");}
  else if (opt==21)
  {window.open("https://drive.google.com/drive/u/0/my-drive");}
  else if (opt==22)
  {window.open("https://timesofindia.indiatimes.com/sports");}
  else if (opt==23)
  {window.open("https://news.google.com/");}
  else if (opt==24)
  {window.open("https://wynk.in/music");}
  else if (opt==25)
  {window.open("https://www.google.com/search?q=timer");}
  else if (opt==26)
  {window.open("https://www.google.com/search?q=stop+watch");}
  else if (opt==27)
  {window.open("https://mail.google.com/mail");}
  else if (opt==28)
  {window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");}
  else if (opt==29)
  {window.open("https://outlook.live.com");}
  else if (opt==30)
  {window.open("https://onedrive.live.com/");}
  else if (opt==31)
  {window.open("https://web.skype.com/");}
  else if (opt==32)
  {window.open("https://hangouts.google.com/");}
  else if (opt==33)
  {window.open("https://docs.google.com/presentation/");}
  else if (opt==34)
  {window.open("https://docs.google.com/spreadsheets/");}
  else if (opt==35)
  {window.open("https://docs.google.com/document/");}
  else if (opt==36)
  {window.open("https://photos.google.com");}
  else if (opt==37)
  {window.open("https://duo.google.com/");}
  else if (opt==38)
  {window.open("https://meet.google.com/");}
};

const getTime = () => {
  const time = new Date(Date.now());
  return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};

const getDate = () => {
  const time = new Date(Date.now())
  return `today\'s date is ${time.toLocaleDateString()}`;
};
const getTheWeather2=()=>{
  getLocation();
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);}}
  function showPosition(position) {
    l1=position.coords.latitude;
    l2=position.coords.longitude;
    url="http://api.openweathermap.org/data/2.5/weather?lat=l1&lon=l2&appid=ab0d5e80e8dafb2cb81fa9e82431c1fa&units=metric";
    url=url.replace("l1",l1);
    url=url.replace("l2",l2);
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(weather){
      if (weather.cod === '404') {
        utterThis = new SpeechSynthesisUtterance(`I cannot find the current weather.`);
        synth.speak(utterThis);
        return;
      }
      text=`Current weather condition is mostly ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`;
      utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
      });};
};
const getTheWeather = (speech) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ').slice(-1)}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`)
  .then(function(response){
    return response.json();
  })
  .then(function(weather){

    utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
    synth.speak(utterThis);
  });
};
