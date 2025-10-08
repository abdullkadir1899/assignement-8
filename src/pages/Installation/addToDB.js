// get Stored apps
const getStoredApps = () => {
    
    const storedAppSTR = localStorage.getItem('appsList');

    if(storedAppSTR) {
        const storedAppsData = JSON.parse(storedAppSTR)
        return storedAppsData
    }
    else{
        return [];
    }
}

// add app id to storage
const addToStoredDB = (id) => {

    const storedAppsData = getStoredApps();
    
    if(storedAppsData.includes(id)) {
        alert('vhai ei id alrad')
    }
    else{
        storedAppsData.push(id)
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem('appsList', data)
        console.log(data)
    }
}


// remove app id 
const removeFromStoredDB = (id) => {
    const storedAppsData = getStoredApps();

    const updatedData = storedAppsData.filter(appId => appId !== id);

    if (updatedData.length === storedAppsData.length) {
        alert('এই ID খুঁজে পাওয়া যায়নি!');
    } else {
        localStorage.setItem('appsList', JSON.stringify(updatedData));
        console.log('Removed:', id);
    }
};

export { addToStoredDB, getStoredApps, removeFromStoredDB }















