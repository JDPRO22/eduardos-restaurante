import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    updateDoc,
    writeBatch
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import {
    getDownloadURL,
    getStorage,
    ref as storageRef,
    uploadBytes
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

export function createClients(firebaseConfig) {
    const app = initializeApp(firebaseConfig);
    return { db: getFirestore(app), storage: getStorage(app) };
}

export {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    updateDoc,
    writeBatch
};

export { getDownloadURL, storageRef, uploadBytes };
