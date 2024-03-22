function start()
{
    createAllFastButtons();
    console.log(getAllWords("hola como estan gente nashey"));
    
}

let pages = [
    "https://www.youtube.com/",
    "https://www.google.com/search?q=clima&oq=clima&aqs=chrome.0.69i59l3j69i60.2582j0j1&sourceid=chrome&ie=UTF-8",
    "https://chat.openai.com/chat",
    "https://www.google.com/search?sca_esv=39bd196d7b057ff4&sxsrf=ACQVn08eADlfyF1QOrpBro3e6HLjH8dnTQ:1711108808191&q=Traductor+de+ingl%C3%A9s+a+espa%C3%B1ol&uds=AMwkrPtJ4U6-SUPtEve-kGgPQcbBswMFxBq6oyayOvmSAkkizkRL9UbogKkeFM7NMQ5ENPaCap7C1u46jwOHD1Pp2JwNJQSi_C4eFu9Zfvz2Spp22EbNx45irpQTpBrG3C5tvtgV5UF9I5eWmxUkqcsPC7MVWdHNqvxRnw9w8reaK0ILyPydZDt5U-WCATVzjHnFioshs6WzpE0wgqZrVmaYew3O9-BcaNyelOQ9TRkpUBn51zy_CES7RUSFpmi0AJfTd56MryV3wig-r06ouITwlXT2Ht-aAlbSBjbwXrsZqROl4ILN1ewhs-OnEXBVwih7zQgfuKbpk3jb22nZNIZMJ4sz1M3svR5ZODe_5BO5OoT-D7dOuyUE-6drWgKaLHUaa5oBRxwrHlBitJP0IExHKxm8Mbko1g&sa=X&ved=2ahUKEwjjlryF6YeFAxVEp5UCHZtoDaAQxKsJegQIDhAB&ictx=0&biw=1366&bih=615&dpr=1",
]

function openPage(pageName)
{
    openURL(getPageId(pageName));
}

function getPageId(pageName)
{
    let pageNum = 0;
    function getPageId_(pageName_, pageId_) { if(pageName == pageName_) pageNum = pageId_; }

    getPageId_('Youtube',0);
    getPageId_('Clima',1);

    return pages[pageNum];
}

function openURL(pageName)
{
    window.open(pageName, '_blank');
}

function createAllFastButtons()
{
    for (let i = 0; i < pages.length; i++) {
        const element = pages[i];

        createFastButton(element);
    }
}

function createFastButton(url)
{
    var contenedor = document.getElementById("fastButtons");
    var newButton = document.createElement("button");
    var lineBreak = document.createElement("br");
    
    contenedor.appendChild(newButton);
    contenedor.appendChild(lineBreak);

    newButton.textContent = getPageName(url);
    newButton.id = "fastButton";

    newButton.addEventListener("click", function(){openURL(url);});
}

function getPageName(url)
{
    let pageName = new URL(url).hostname.replace("www.", "").replace(".com", "");

    if(pageName == "google")
    {
        return getGoogleSearch(url);
    }
    else
    {
        return pageName;
    }
}

function getGoogleSearch(url)
{
    var params = new URLSearchParams(new URL(url).search);
    var googleSearch = params.get("q");

    return googleSearch || "no se encontro el nombre";
}

function getAllWords(string_) {
    return palabras = string_.split(/\W+/);
}