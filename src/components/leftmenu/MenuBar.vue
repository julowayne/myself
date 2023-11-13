<template>
  <div class="menu">
    <ul>
      <li>
        <DocumentationIcon />
        <router-link to="/jules">Jules</router-link>
      </li>
      <li>
        <ToolingIcon />
        <router-link to="/github">Github</router-link>
      </li>
      <li>
        <EcosystemIcon />
        <router-link to="/garmin">Garmin</router-link>
      </li>
      <li>
        <CommunityIcon />
        <router-link to="/wow">WoW</router-link>
      </li>
      <li>
        <SupportIcon />
        <router-link to="/projects">Projets</router-link>
      </li>
      <li>
        <SupportIcon />
        <router-link to="/weather">Météo</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import DocumentationIcon from '../icons/IconDocumentation.vue'
import ToolingIcon from '../icons/IconTooling.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import SupportIcon from '../icons/IconSupport.vue'
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  list-style-type: none;
  padding: 20px;
  border-bottom: 1.5px solid lightgrey;
}

a,
router-link {
  font-size: x-large;
  font-weight: bolder;
  margin-left: 10px;
}

.menu {
  border-right: 2px solid lightgrey;
  max-width: 18vw;
  min-height: 100vh;
  /* padding: 30px; */
}
</style>
