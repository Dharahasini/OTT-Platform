// Sample data for trending movies and new releases
const trendingMovies = [
    {
        id: 1,
        title: "Inception",
        description: "A mind-bending thriller directed by Christopher Nolan.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 2,
        title: "The Dark Knight",
        description: "Batman faces off against the Joker in Gotham City.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 3,
        title: "Interstellar",
        description: "A journey through space and time to save humanity.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 4,
        title: "The Godfather",
        description: "A powerful mafia family's rise in New York.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 5,
        title: "Fight Club",
        description: "A disillusioned man forms an underground fight club.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 6,
        title: "Pulp Fiction",
        description: "A complex and interconnected story of crime and redemption.",
        image: "https://via.placeholder.com/150x200"
    }
];

const newReleases = [
    {
        id: 7,
        title: "Dune",
        description: "A young man must travel to a dangerous planet to secure his family's future.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 8,
        title: "Spider-Man: No Way Home",
        description: "Spider-Man faces his greatest challenge yet.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 9,
        title: "The French Dispatch",
        description: "A magazine staff creates a final issue chronicling their adventures.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 10,
        title: "No Time to Die",
        description: "James Bond faces a dangerous new enemy in his latest adventure.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 11,
        title: "The Power of the Dog",
        description: "A complex tale of masculinity, power, and betrayal in the West.",
        image: "https://via.placeholder.com/150x200"
    },
    {
        id: 12,
        title: "Encanto",
        description: "A young girl discovers her family's unique gifts in a magical world.",
        image: "https://via.placeholder.com/150x200"
    }
];

// Function to initialize the page with trending movies and new releases
function initializeHomePage() {
    const trendingCarousel = document.getElementById("trending-carousel");
    const newReleasesCarousel = document.getElementById("new-releases-carousel");

    // Populate trending carousel with data
    trendingMovies.forEach(movie => {
        const imgElement = document.createElement("img");
        imgElement.src = movie.image;
        imgElement.alt = movie.title;
        imgElement.dataset.id = movie.id;
        imgElement.addEventListener("click", () => showContentDetails(movie.id));
        trendingCarousel.appendChild(imgElement);
    });

    // Populate new releases carousel with data
    newReleases.forEach(movie => {
        const imgElement = document.createElement("img");
        imgElement.src = movie.image;
        imgElement.alt = movie.title;
        imgElement.dataset.id = movie.id;
        imgElement.addEventListener("click", () => showContentDetails(movie.id));
        newReleasesCarousel.appendChild(imgElement);
    });
}

// Function to show content details
function showContentDetails(movieId) {
    const contentDetails = document.getElementById("content-details");
    const homePage = document.getElementById("home-page");

    const movie = [...trendingMovies, ...newReleases].find(movie => movie.id === movieId);
    if (movie) {
        document.getElementById("content-image").src = movie.image;
        document.getElementById("content-title").innerText = movie.title;
        document.getElementById("content-description").innerText = movie.description;

        homePage.style.display = "none";
        contentDetails.style.display = "block";
    }
}

// Function to go back to home page
function goBackToHomePage() {
    const contentDetails = document.getElementById("content-details");
    const homePage = document.getElementById("home-page");

    contentDetails.style.display = "none";
    homePage.style.display = "block";
}

// Function to search for movies
function searchMovies() {
    const searchInput = document.getElementById("search-input");
    const searchQuery = searchInput.value.toLowerCase();

    const filteredMovies = [...trendingMovies, ...newReleases].filter(movie =>
        movie.title.toLowerCase().includes(searchQuery) || movie.description.toLowerCase().includes(searchQuery)
    );

    if (filteredMovies.length > 0) {
        // Clear current trending and new releases carousels
        document.getElementById("trending-carousel").innerHTML = "";
        document.getElementById("new-releases-carousel").innerHTML = "";

        // Populate carousels with filtered movies
        filteredMovies.forEach(movie => {
            const imgElement = document.createElement("img");
            imgElement.src = movie.image;
            imgElement.alt = movie.title;
            imgElement.dataset.id = movie.id;
            imgElement.addEventListener("click", () => showContentDetails(movie.id));

            if (trendingMovies.some(m => m.id === movie.id)) {
                document.getElementById("trending-carousel").appendChild(imgElement);
            } else {
                document.getElementById("new-releases-carousel").appendChild(imgElement);
            }
        });
    } else {
        alert("No movies found matching your search.");
    }
}

// Initialize the home page on load
window.addEventListener("load", initializeHomePage);
