import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAp3TRdEMoYP4SNjpQTPPloTno_mTWPFyU",
  authDomain: "oye-busy-fd827.firebaseapp.com",
  databaseURL: "https://oye-busy-fd827-default-rtdb.firebaseio.com",
  projectId: "oye-busy-fd827",
  storageBucket: "oye-busy-fd827.appspot.com",
  messagingSenderId: "269488181985",
  appId: "1:269488181985:web:ed3922ddd21013133ddda0"
};

const app = initializeApp(firebaseConfig);

export const dbRef = ref(getDatabase(app));


