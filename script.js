const faqContainer = document.getElementById("faq-container");

// Array med gym FAQ-frågor
const gymFaqs = [
    {
        title: "Hur blir jag medlem?",
        body: "Du kan bli medlem online eller besöka en av våra gym för att få hjälp av personalen."
    },
    {
        title: "Vilka klasser finns tillgängliga?",
        body: "Vi erbjuder yoga, spinning och styrketräning. Kolla schemat för aktuella tider."
    },
    {
        title: "Finns personliga tränare?",
        body: "Ja, personliga tränare finns tillgängliga. Boka via vår app eller i receptionen."
    },
    {
        title: "Vad har gymmet för öppettider?",
        body: "Våra gym är öppna 05.00–23.00 på vardagar och 06.00–20.00 på helger."
    },
    {
        title: "Finns omklädningsrum och duschar?",
        body: "Ja, omklädningsrum och dusch finns. Ta med eget lås."
    }

];

// Skapade FAQ med gymtema
gymFaqs.forEach(item => {
    const section = document.createElement("div");
    section.classList.add("section");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = item.title;

// Jag skapar pilen här
    const arrow = document.createElement("span");
    arrow.classList.add("arrow");
    arrow.textContent = '▼';  // Här kan jag byta ut ikonet
    title.appendChild(arrow);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = item.body;

    // Toggle sektion och pil för ytterligare utveckling för finare hemsida
    title.addEventListener("click", () => {
        title.classList.toggle("active");
    });

    section.appendChild(title);
    section.appendChild(description);
    faqContainer.appendChild(section);

});

