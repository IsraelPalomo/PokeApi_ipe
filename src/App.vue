<template>
  <nav>
    <router-link to="/"><h3>Home page</h3></router-link>
    <router-link to="/secondary"><h3>Secondary page</h3></router-link>
  </nav>
  <router-view></router-view>
 <!--  <main>
    <p class="technologies">
      vue3 + vite + vitest + ts + vue-router4 + pinia + i18n + sass
    </p>
    <div class="counters">
      <p class="counter">
        Counter: <span>{{ store.$state.count }}</span>
      </p>
      <p class="counter">
        Double counter: <span>{{ store.doubleCount }}</span>
      </p>
    </div>

    <div class="buttons">
      <button data-test="add" @click="store.increment()">Add counter</button>
      <button data-test="sub" @click="store.decrement()">Sub counter</button>
    </div>
    <div class="locale">
      <h3>{{ $t('text_example') }}</h3>
      <label for="locale">Locale: </label>
      <select v-model="$i18n.locale" id="locale">
        <option v-for="locale in $i18n.availableLocales" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </main> -->
</template>

<script setup lang="ts">
import { globalStore } from './store/globalStore';
import { i18n } from './main';

const store = globalStore();
</script>
<style lang="scss">
@import './styles/main.scss';
</style>
