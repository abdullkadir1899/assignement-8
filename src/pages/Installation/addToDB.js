// addToDB.js
const getStoredApps = () => {
    const storedAppSTR = localStorage.getItem('appsList')

    if(storedAppSTR){
        const storedAppsData = JSON.parse(storedAppSTR)
        return storedAppsData
    }
    else{
        return [];
    }
}

// ad 
const addToStoredDB = (id)  => {
    const storedAppsData = getStoredApps();

    if(storedAppsData.includes(id.toString())){
        return 'Already_added'
    }
    else{
        storedAppsData.push(id.toString())
        const data = JSON.stringify(storedAppsData)
        localStorage.setItem('appsList', data)
        return 'added_successfully'
    }
}



//remove
const removeFromStoredDB = (id) => {
    const storedAppsData = getStoredApps();

    const idToRemove = id.toString();
    const updateData = storedAppsData.filter(appId => appId !== idToRemove);

    if(updateData.length === storedAppsData.length){
        return 'not_found'
    }
    else{
        localStorage.setItem('appsList', JSON.stringify(updateData));
        console.log('Removed', idToRemove)
        return 'removed_successfully'
    }

}


export { addToStoredDB, getStoredApps, removeFromStoredDB }