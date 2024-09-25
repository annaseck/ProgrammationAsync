// Itération avec Async/Await :
//  écrivez une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et 
//  enregistre chaque valeur avec un délai d'une seconde entre les journaux.
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
};
iterateWithAsyncAwait([23,7,8,9,11]);
// En attente d'un appel :
//  créez une fonction asynchrone waitCall qui simule la récupération de données à partir d'une API. 
//  Utilisez wait pour attendre la réponse de l'API, puis enregistrez les données.
async function waitCall(apiUrl) {
    const response = await fetch(apiUrl);        
    const data = await response.json();
    console.log('Données récupérées:', data);
    return data;
};

// Gestion des erreurs avec Async/Await :
//  modifiez la fonction waitCall pour gérer les erreurs de manière appropriée. 
//  Si l'appel d'API échoue, interceptez l'erreur et enregistrez un message d'erreur convivial.
async function waitCall(apiUrl) {
    try {
        const response = await fetch(apiUrl);        
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }
        const data = await response.json();
        console.log('Données récupérées:', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

// Enchaînement Async/Await :
//  écrivez une fonction chainedAsyncFunctions qui appelle séquentiellement trois fonctions asynchrones distinctes. 
//  Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions à l'aide de wait .
async function asyncFunction1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 1 exécutée");
            resolve();
        }, 1000);
    });
};

async function asyncFunction2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 2 exécutée");
            resolve();
        }, 1000);
    });
};

async function asyncFunction3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 3 exécutée");
            resolve();
        }, 1000);
    });
};
// Fonction principale qui enchaîne les appels asynchrones
async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
};
chainedAsyncFunctions();
// En attente de requêtes simultanées :
//  créez une fonction asynchrone concurrentRequests qui effectue deux appels d'API simultanément à l'aide de Promise.all(). 
//  Enregistrez les résultats combinés une fois les deux requêtes résolues.
async function concurrentRequests(url1, url2) {
    try {
        // Effectuer les deux appels d'API simultanément
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);
        // Convertir les réponses en JSON
        const data1 = await response1.json();
        const data2 = await response2.json();
        // Combiner les résultats
        const combinedResults = { data1, data2 };
        // Enregistrer les résultats combinés
        console.log(combinedResults);
        return combinedResults;
    } catch (error) {
        console.error('Erreur lors des requêtes:', error);
    }
};
