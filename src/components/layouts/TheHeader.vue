<template>
  <header>
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
              <a class="nav-link active" aria-current="page" href="#">
                {{ $t("About") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {{ $t("Projects") }}
                </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {{ $t("Publications") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                > {{ $t("Courses") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">{{ $t("People") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">{{ $t("Links") }}</a>
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
</style>
