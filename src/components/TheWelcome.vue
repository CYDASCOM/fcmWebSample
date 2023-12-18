<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import CodeEditor from "simple-code-editor";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>

    <template #heading>
      OAuth クライアント ID のセットアップ - SetUp OAuth Client ID </template>
    <p v-html="testData"></p>
    <a href="https://console.cloud.google.com/apis/credentials?project=cydas-member-stg-ee2e7" target="_blank"
      rel="noopener">Google Cloud Console ページに </a>
    移動し、「認証情報」に移動して「ウェブ クライアント 1」を表示します。
    <p v-html="testData"></p>
    Goto
    <a href="https://console.cloud.google.com/apis/credentials?project=cydas-member-stg-ee2e7" target="_blank"
      rel="noopener">Google Cloud Console page </a>
    and then goto "Authentication information" and view the "web client 1"
    <img src="../../src/assets/img/001.png" alt="" height="440px" width="auto">
    <p v-html="testData"></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>JSONをダウンロード - DOWNLOAD JSON</template>
    "DOWNLOAD JSON" をクリックして、JSON ファイルを Google ドライブにアップロードしました。
    <p v-html="testData"></p>
    Click on the "DOWNLOAD JSON" and I uploaded the json file into my Google drive.
  </WelcomeItem>
  <WelcomeItem>
    <img src="../../src/assets/img/003.png" alt="" height="400px" width="auto">
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>認証キーの生成 - Generate Auth Key </template>
    以下のコードと<a href="https://colab.research.google.com/drive/1Ff7RTrLPpdAi-CHgQEY9v8obxPfeL0Ay?hl=ja#scrollTo=nY7bLAHUCNIJ" target="_blank"
      rel="noopener">colab</a>を使用して認証キーを生成しました。
    <p v-html="testData"></p>
    Generate Authentication Key using below code and <a href="https://colab.research.google.com/drive/1Ff7RTrLPpdAi-CHgQEY9v8obxPfeL0Ay?hl=ja#scrollTo=nY7bLAHUCNIJ" target="_blank"
      rel="noopener">colab</a>
    <client-only>
      <code-editor width="100%" value="
      import requests
      import google.auth.transport.requests
      from google.oauth2 import service_account

      SCOPES = ['https://www.googleapis.com/auth/firebase.messaging']
      credentials = service_account.Credentials.from_service_account_file('/content/drive/MyDrive/google-services/firebase-adminsdk.json', scopes=SCOPES)
      request = google.auth.transport.requests.Request()
      credentials.refresh(request)
      print(credentials.token)">
      </code-editor>
    </client-only>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <img src="../../src/assets/img/002.png" alt="" height="380px" width="auto">
    <p v-html="testData"></p>
    コードをコピーして POSTMAN を設定 - Copy the code and set the Postman
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>PostManリクエスト設定 - PostMan Request SetUp </template>
    <p v-html="testData"></p>
    POSTリクエスト - POST Request
    <client-only>
      <code-editor width="100%" value="https://fcm.googleapis.com/v1/projects/cydas-member-stg-ee2e7/messages:send">
      </code-editor>
    </client-only>
    置換 認証キーの生成 - Replace Generate Authentication Key
    <client-only>
      <code-editor width="100%" value="Bearer <Generate Authentication Key>">
      </code-editor>
    </client-only>
    <img src="../../src/assets/img/004.png" alt="" height="380px" width="auto">
    <img src="../../src/assets/img/005.png" alt="" height="380px" width="auto">
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
