const APIS = [
                {
                    "name" : "Get your IP",
                    "fetchUrl" : "https://api.ipify.org/?format=json",
                    "routeUrl" : "/your-ip"
                },
                {
                    "name" : "Exchange",
                    "fetchUrl" : "https://open.er-api.com/v6/latest/USD",
                    "routeUrl" : "/exchange"
                },
                {
                    "name" : "Random Joke",
                    "fetchUrl" : "https://v2.jokeapi.dev/joke/Any?safe-mode",
                    "routeUrl" : "/random-joke"
                },
                {
                    "name" : "Geolocate your IP",
                    "fetchUrl" : "https://freegeoip.app/json/",
                    "routeUrl" : "/ip-geolocation"
                },
                {
                    "name" : "Facts on numbers",
                    "fetchUrl" : "http://numbersapi.com/random?json",
                    "routeUrl" : "/number-fact"
                },
                {
                    "name" : "Random year history-fact",
                    "fetchUrl" : "http://numbersapi.com/random/year?json",
                    "routeUrl" : "/history-fact"
                },
                {
                    "name" : "Activity suggestions",
                    "fetchUrl" : "https://www.boredapi.com/api/activity",
                    "routeUrl" : "/activity-suggestion"
                },
                {
                    "name" : "Cocktail recipes",
                    "fetchUrl" : "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
                    "routeUrl" : "/cocktails"
                },
                {
                    "name" : "Useless facts",
                    "fetchUrl" : "https://uselessfacts.jsph.pl/random.json?language=en",
                    "routeUrl" : "/facts"
                },
                {
                    "name" : "Affirmations",
                    "fetchUrl" : "https://www.affirmations.dev",
                    "routeUrl" : "/affirmations"
                },
                {
                    "name" : "Advice",
                    "fetchUrl" : "https://api.adviceslip.com/advice",
                    "routeUrl" : "/advice"
                }
            ] 

export default APIS;
    
