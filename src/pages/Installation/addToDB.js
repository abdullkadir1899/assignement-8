// addToDB.js

// অ্যাপ ডেটা লোকাল স্টোরেজ থেকে নিয়ে আসে
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

// অ্যাপ আইডি স্টোরেজে যোগ করে
const addToStoredDB = (id) => {

    const storedAppsData = getStoredApps();
    
    if(storedAppsData.includes(id.toString())) { // ID স্ট্রিং হিসেবে চেক করা হলো
        return 'already_added'; // স্ট্যাটাস রিটার্ন
    }
    else{
        storedAppsData.push(id.toString()) // ID স্ট্রিং হিসেবে সেভ করা
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem('appsList', data)
        return 'added_successfully'; // স্ট্যাটাস রিটার্ন
    }
}


// অ্যাপ আইডি রিমুভ করে
const removeFromStoredDB = (id) => {
    const storedAppsData = getStoredApps();

    const idToRemove = id.toString(); 
    const updatedData = storedAppsData.filter(appId => appId !== idToRemove);

    if (updatedData.length === storedAppsData.length) {
        return 'not_found'; // স্ট্যাটাস রিটার্ন
    } else {
        localStorage.setItem('appsList', JSON.stringify(updatedData));
        console.log('Removed:', idToRemove);
        return 'removed_successfully'; // স্ট্যাটাস রিটার্ন
    }
};


export { addToStoredDB, getStoredApps, removeFromStoredDB }















