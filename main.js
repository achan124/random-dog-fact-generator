
fetchData();

async function fetchData() {

    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

        if (!response.ok) {
            throw new Error("couldn't fetch resource");
        }
        const data = await response.json();
        const dogPic = data.message;

        const imgElement = document.getElementById("dogPic");
        imgElement.src = dogPic;
        imgElement.style.display = "block";

    }
    catch(error) {
        console.error(error);
    }
}

