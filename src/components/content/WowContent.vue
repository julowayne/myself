<template>
  <div class="content-padding">
    <div class="wow">
      <div class="form">
        <h1 class="title">
          World of Warcraft
        </h1>
        <div class="form-info">
          <form @submit.prevent="getCharacterInformations">
            <div class="inputs">
              <div>
                <label for="character">Character name</label>
              </div>
              <input v-model="character" type="text" placeholder="ex: hypea" id="character" required>
            </div>
            <div>
              <div>
                <label for="realm">Realm name</label>
              </div>
              <input v-model="realm" type="text" placeholder="ex: hyjal" id="realm" required>
            </div>
            <div class="request">
              <button class="send-btn" type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="results">
        <div v-if="firstProfession.length && seCondProfession.length">
          <div>
            This character has {{ firstProfession }} and {{ seCondProfession }}
          </div>
        </div>
        <div class="render" v-if="assets.length">
          <!-- <div v-for="asset in assets" :key="asset.avatar">
            <img v-bind:src="asset.value" alt="character img asset">
          </div> -->
          <div>
            <img class="avatar" v-bind:src="assets[2].value" alt="character img asset">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "WowContent",
  data: () => ({
    character: "",
    realm: "",
    namespace: import.meta.env.VITE_WOW_NAMESPACE,
    locale: import.meta.env.VITE_WOW_LOCALE,
    region: import.meta.env.VITE_WOW_REGION,
    token: import.meta.env.VITE_API_TOKEN,
    assets: [],
    firstProfession: [],
    seCondProfession: [],
    statistics: [],
    basicsInformations: []
  }),
  methods: {
    getCharacterRender(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}/character-media?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        this.assets = resp.data.assets
      });
    },
    getCharacterProfessions(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}/professions?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        this.firstProfession = resp.data.primaries[0].profession.name
        this.seCondProfession = resp.data.primaries[1].profession.name
      });
    },
    getCharacterStats(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}/statistics?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        // TODO
        console.log(resp.data)
        // this.statistics = ""
      });
    },
    getCharacterBasicInformations(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        // TODO
        console.log(resp.data)
        // this.statistics = ""
      });
    },

    getCharacterInformations(){
      this.getCharacterRender(),
      this.getCharacterProfessions()
    },
  }
}


</script>

<style>
.wow {
  width: 80vw;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #0074e0;
}
.title {
  text-align: center;
}
.form {
  min-width: 50%;
  padding: 30px;
  background-color: #e9ecef;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border-radius: 4px;
}
.form-info {
  display: flex;
  justify-content: center;
  min-width: 50%;
}
form {
  min-width: 50%;
}
input {
  min-width: 100%;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: none;
  border-radius: 4px;
  height: 30px;
  padding: 10px;
}
input:focus {
  outline: none !important;
  border:1px solid hsla(160, 100%, 37%, 1);
  box-shadow: 0 0 10px #719ECE;
}
button {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background: #495057;
	color: hsla(160, 100%, 37%, 1);
	border: none;
	padding: 5px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
.avatar {
  max-width: 50%;
  background-color: #212529;
  border-radius: 4px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.render {
  text-align: center;
}
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>