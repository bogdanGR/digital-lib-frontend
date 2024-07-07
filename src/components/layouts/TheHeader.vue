<template>
  <header class="header-wrapper">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a
          class="navbar-brand pb-0"
          href="https://ice.uniwa.gr/"
          target="__blank"
        >
          <img src="../../assets/uniwa_logo.png" width="110" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                {{ $t("About") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">
                {{ $t("Projects") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/publications">
                {{ $t("Publications") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/courses">
                {{ $t("Courses") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/people">
                {{ $t("People") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/links">
                {{ $t("Links") }}
              </router-link>
            </li>
          </ul>
          <div class="language-switcher">
            <div
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              @click="switchLanguage(locale)"
              class="language-option"
            >
              <span
                :class="['flag-icon', `flag-icon-${locale.toLowerCase()}`]"
              ></span>
              <!-- Apply flag CSS class -->
              {{ locale == "us" ? "EN" : locale.toUpperCase() }}
            </div>
            <select v-model="$i18n.locale" class="hidden">
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    switchLanguage(locale) {
      // Logic to switch language using the $i18n plugin
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
.language-switcher {
  display: flex;
  align-items: center;
}

.language-option {
  margin-right: 10px;
  cursor: pointer;
}

.flag-icon {
  width: 30px; /* Adjust as needed */
  height: auto;
  display: inline-block;
  /* Add any other necessary styles */
}

/* Hide the select element */
.hidden {
  display: none;
}
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

.header-wrapper ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-wrapper li {
  margin: 0 2rem;
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  text-decoration: none;
}

.nav-link:hover,
.nav-link:active,
.nav-link.router-link-active {
  color: white;
  border-color: #f1a80a;
  background-color: #1a037e;
}
.nav-link:hover, .nav-link:focus {
  color: #f1a80a;
}
</style>
