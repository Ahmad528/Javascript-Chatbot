var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["Uttarakhand tunnel collapse: ‘Auger machine is finished’; official explains delay in rescue, according to NASA.",
        "Sense Of Pride: PM Modi After Flying On Tejas Fighter Jet In Bengaluru.",
        "Israel-Hamas truce live updates | 14 hostages, 42 prisoners to be released Saturday under truce deal",
        "5 Facts On Tejas Fighter Jet That PM Modi Took A Sortie In"],

        url : {
            more:"https://www.indiatoday.in/",
            link:["https://www.hindustantimes.com/india-news/uttarakhand-tunnel-collapse-manual-drilling-to-be-employed-official-explains-delay-101700895908130.html",
            "https://www.ndtv.com/india-news/pm-modi-takes-sortie-on-light-combat-tejas-fighter-jet-in-bengaluru-4604783",
            "https://www.thehindu.com/news/international/israel-hamas-truce-live-updates-november-25-2023/article67572506.ece",
            "https://www.ndtv.com/india-news/5-facts-on-tejas-fighter-jet-that-pm-modi-took-a-sortie-in-4605007"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Smarphone','Smartwatches','Speakers'],
        url : {
            more:"https://www.amazon.in/b?node=75350398031",
            link:["https://www.amazon.in/deal/77ccd5b8/?_encoding=UTF8&showVariations=true&pd_rd_i=B0B9WYJYK2&pd_rd_w=eiaTw&content-id=amzn1.sym.879df441-ace5-461b-b60d-8966462c2825&pf_rd_p=879df441-ace5-461b-b60d-8966462c2825&pf_rd_r=S1HMWHMJBRWZPT2SHCZJ&pd_rd_wg=zF9B5&pd_rd_r=a799c8da-7c18-42b9-a9db-9ea75c6503e1&ref_=oct_dx_dotd",
            "https://www.amazon.in/b?node=75350398031",
            "https://www.amazon.in/b?node=1389401031&ref_=MH1_Smartphones",
            "https://www.amazon.in/s?k=smartwatches&crid=3KQGI6JHQ9ISE&sprefix=smartwateche%2Caps%2C181&ref=nb_sb_ss_sc_2_11",
            "https://www.amazon.in/s?i=electronics&bbn=1389373031&rh=n%3A1389373031%2Cp_n_condition-type%3A8609960031%2Cp_85%3A10440599031&pf_rd_i=1389335031&pf_rd_m=AT95IG9ONZD7S&pf_rd_p=30cb650f-9af6-44c7-b168-68b3b940f5ac&pf_rd_r=CKFCNTRZ3R41CGYZFRFN&pf_rd_s=merchandised-search-9&pf_rd_t=101&ref=s9_acss_bw_cg_INSpeak_2e1_w"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.amazon.in/s?k=makeup&rh=n%3A1374357031&ref=nb_sb_noss",
            link:["https://www.amazon.in/s?k=makeup&rh=n%3A1374357031&ref=nb_sb_noss",
            "https://www.amazon.in/s?k=skincare&rh=n%3A1374357031&ref=nb_sb_noss",
            "https://www.amazon.in/s?k=fragrance&rh=n%3A1374357031&ref=nb_sb_noss",
            "https://www.amazon.in/s?k=haircare&rh=n%3A1374357031&ref=nb_sb_noss"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.amazon.in/s?k=mobile+phones&ref=nb_sb_noss",
            link:["https://www.amazon.in/s?k=mobile+phones&ref=nb_sb_noss",
            "https://www.amazon.in/s?k=case+and+cover&crid=39SRLIPOBHR85&sprefix=case+and+c%2Caps%2C183&ref=nb_sb_ss_ts-doa-p_2_10",
            "https://www.amazon.in/s?k=powerbank&crid=1JVYSGVSE6HNN&sprefix=powerbank+%2Caps%2C177&ref=nb_sb_noss_2",
            "https://www.amazon.in/s?k=tablets&crid=1I6SPVH7X142&sprefix=tablets%2Caps%2C184&ref=nb_sb_noss_2"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.amazon.in/s?k=clothing&crid=3EZN155IP4S23&sprefix=clothi%2Caps%2C183&ref=nb_sb_ss_ts-doa-p_1_6",
            link:["https://www.amazon.in/s?k=clothing&crid=3EZN155IP4S23&sprefix=clothi%2Caps%2C183&ref=nb_sb_ss_ts-doa-p_1_6",
            "https://www.amazon.in/s?k=shirt&crid=1DPI51VBE4XPL&sprefix=shirt%2Caps%2C177&ref=nb_sb_noss_1",
            "https://www.amazon.in/s?k=tshirts&crid=X36K7JNV2MZ&sprefix=tshirts%2Caps%2C189&ref=nb_sb_noss_2",
            "https://www.amazon.in/s?k=innerwear+men&crid=1EJI8DN0O94PE&sprefix=inne%2Caps%2C175&ref=nb_sb_ss_ts-doa-p_1_4",
            "https://www.amazon.in/s?k=jeans&crid=2YFPI25OQ1XJ2&sprefix=jeans%2Caps%2C185&ref=nb_sb_noss_1"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.amazon.in/s?k=clothing+women&crid=PUDW0LVTBVAK&sprefix=clothing+wo%2Caps%2C184&ref=nb_sb_ss_ts-doa-p_1_11",
            link:["https://www.amazon.in/s?k=clothing+women&crid=PUDW0LVTBVAK&sprefix=clothing+wo%2Caps%2C184&ref=nb_sb_ss_ts-doa-p_1_11",
            "https://www.amazon.in/s?k=western+wear+for+women&crid=13MUYK4GLHCQ3&sprefix=western+%2Caps%2C183&ref=nb_sb_ss_ts-doa-p_4_8",
            "https://www.amazon.in/s?k=ethics+wear+for+women&crid=2GOG07RC3Y5QG&sprefix=ethi%2Caps%2C181&ref=nb_sb_ss_ts-doa-p_5_4",
            "https://www.amazon.in/s?k=top+brands&crid=2OKAQ7AF7Q3TG&sprefix=top+brands%2Caps%2C197&ref=nb_sb_ss_ts-doa-p_4_10"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["Hindi","Marathi","English","Gujrati"],
        url : {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/results?search_query=Marathi+songs",
            "https://www.youtube.com/results?search_query=hindi+songs",
            "https://www.youtube.com/results?search_query=english+songs",
            "https://www.youtube.com/results?search_query=gujrati+songs"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=hollywood+comedy+movies",
            link:["https://www.youtube.com/results?search_query=hollywood+comedy+movies",
            "https://www.youtube.com/results?search_query=hollywood+horror+movies",
            "https://www.youtube.com/results?search_query=hollywood+sci+movies+in+hindi",
            "https://www.youtube.com/results?search_query=hollywood+romantic+movie+in+hindi+dubbed+full+movie+2018+",
            "https://www.youtube.com/results?search_query=hollywood+action+movie+"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=bollywood+comedy+movies",
            link:["https://www.youtube.com/results?search_query=bollywood+comedy+movies",
            "https://www.youtube.com/results?search_query=bollywood+horror+movies",
            "https://www.youtube.com/results?search_query=bollywood+sci-fi+movie",
            "https://www.youtube.com/results?search_query=bollywood+romantic+movies",
            "https://www.youtube.com/results?search_query=bollywood+action+movie"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=web+series+comedy",
            link:["https://www.youtube.com/results?search_query=web+series+comedy",
            "https://www.youtube.com/results?search_query=web+series+horror",
            "https://www.youtube.com/results?search_query=web+series+sci+fi+in+hindi",
            "https://www.youtube.com/results?search_query=web+series+romance",
            "https://www.youtube.com/results?search_query=web+series+action+hindi"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/",
            "https://www.netflix.com/in/",
            "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root",
            "https://www.hotstar.com/in/home",]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}