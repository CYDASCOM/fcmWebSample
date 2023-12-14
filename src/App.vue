<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-UpcuJYqS75Nw2_nATZ-i6z9OdpQ3ETE",
  authDomain: "cydas-member-stg-ee2e7.firebaseapp.com",
  databaseURL: "https://cydas-member-stg-ee2e7-default-rtdb.firebaseio.com",
  projectId: "cydas-member-stg-ee2e7",
  storageBucket: "cydas-member-stg-ee2e7.appspot.com",
  messagingSenderId: "458758423846",
  appId: "1:458758423846:web:ca952d1116efb5f43dade7",
  measurementId: "G-JHR9H7BLDK"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});
getToken(messaging, { vapidKey: 'BOhTvkYJEjRnEqfatXNfyeaJs97BEUWsxxEXpnb0rEqxmazn2HVGwoZDamJZTrQxK7Vc_qwewrdCE0DECX8LU_k' }).then(async (currentToken) => {
  if (currentToken) {
    console.info("Web Token: ", currentToken)
    const collectionPath = "cydas"; 
    const uuId = "919fcfb3-ac6c-11ea-8d08-0a51e6767a16"; 
    const documentPath = `${collectionPath}/${uuId}`;
  await setDoc(doc(db, documentPath), {
    web: currentToken,
    mobile: "fKnbGC4cSE_enTdcwzDyDL:APA91bHcvCkOsS_ZZAhLCg0Y2SgjIGOX0Hw_ayCg5xLBlQMHy-HtUertopm9JIZOkF-6Bkiy2oyPTo0SYe9TK6s9JbxEDc-iWXtEH-10KlXGp4wMB3_0BNTJpVLug53HipiBxSuXDDlu"
  });
  } else {
    console.info('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.info('An error occurred while retrieving token. ', err);
});
</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="FCM Notification!" />
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
