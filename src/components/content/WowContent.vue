<template>
  <div class="content-padding">
    <h1 class="section-content">
      World of Warcraft
    </h1>
    <div class="form-info">
      <form @submit.prevent="getCharacterInformations">
        <div>
          <label for="character">Character name:</label>
          <input v-model="character" type="text" placeholder="Enter your character name" id="character" required>
        </div>
        <div>
          <label for="realm">Realm name:</label>
          <input v-model="realm" type="text" placeholder="Enter your character realm" id="realm" required>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
    <div v-if="firstProfession.length && seCondProfession.length">
      <div>
        This character has {{ firstProfession }} and {{ seCondProfession }}
      </div>
    </div>
    <div class="render" v-if="assets.length">
      <div v-for="asset in assets" :key="asset.avatar">
        <img v-bind:src="asset.value" alt="character img asset">
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
    namespace: "profile-eu",
    locale: "en_EU",
    region: "eu",
    assets: [],
    firstProfession: [],
    seCondProfession: [],
    token: import.meta.env.VITE_API_TOKEN
  }),
  methods: {
    getCharacterRender(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}/character-media?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        this.assets = resp.data.assets
      });
    },
    getCharacterProfessions(){
      axios.get(`https://${this.region}.api.blizzard.com/profile/wow/character/${this.realm}/${this.character}/professions?namespace=${this.namespace}&locale=${this.locale}&access_token=${this.token}`).then(resp => {
        console.log(resp.data);
        this.firstProfession = resp.data.primaries[0].profession.name
        this.seCondProfession = resp.data.primaries[1].profession.name
        console.log("professions : " + this.firstProfession + " and " + this.seCondProfession);
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

</style>