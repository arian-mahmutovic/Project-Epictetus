const form = document.querySelector("#join-form");
const joinContent = document.querySelector("#join-content");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });


        if (response.ok) {

            joinContent.innerHTML = `
                <h2>You're all set.</h2>

                <h3>
                    We appreciate your interest in Project Epictetus.
                </h3>

                <h3>
                    Would you like to help us build a better platform by
                    answering a short survey?
                </h3>

                <br>
                <br>
                <br>

                <a href="https://forms.gle/FokuuMfcSi85DmbKA" 
                   target="_blank"
                   class="button">
                    Take Survey
                </a>
            `;

        } else {

            joinContent.innerHTML = `
                <h2>Something went wrong.</h2>

                <h3>
                    Please try again later.
                </h3>
            `;

        }

    } catch (error) {

        joinContent.innerHTML = `
            <h2>Connection error.</h2>

            <h3>
                Please check your internet connection and try again.
            </h3>
        `;

    }

});

//dasdas
const shareButton = document.querySelector("#share-button");

shareButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const shareData = {
        title: "Project Epictetus",
        text: "Join Project Epictetus — a community built for ambitious students.",
        url: "https://epictetusproject.com"
    };

    if (navigator.share) {
        await navigator.share(shareData);
    } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Website link copied to clipboard!");
    }
});

const shareFab = document.querySelector("#share-fab");

shareFab.addEventListener("click", async () => {

    const shareData = {
        title: "Project Epictetus",
        text: "Join Project Epictetus — a community for ambitious students.",
        url: "https://epictetusproject.com"
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(shareData.url);
            alert("Link copied to clipboard!");

        }

    } catch (error) {

        console.error(error);

    }

});