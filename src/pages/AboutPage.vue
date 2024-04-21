<template>
  <div class="container">
    <div class="card mt-4 mb-4">
      <div class="card-body text-start">
        <h1>{{ $t('University of West Attica') }}</h1>
        <h2>{{ $t('Department of Informatics and Computer Engineering')}}</h2>

        <h3 class="mr-auto"><strong>{{ $t('Address') }}</strong></h3>
        <p class="mb-0">
          <strong>
            <a href="https://maps.app.goo.gl/TwLzsnJdhEmD8x518" target="_blank">{{ $t('Ag. Spyridonos Str., Egaleo, Postal Code 12243, Athens') }}</a>
          </strong>
        </p>
        <a class="d-block" href="emailto: ice@uniwa.gr">ice@uniwa.gr</a>
        <a class="d-block" href="tel:2105385312">TEL +30.210-538-5312</a>
        <a class="d-block" href="tel:2105910975">FAX: +30.210-591-0975</a>

        <h3 class="mr-auto"><strong>{{ $t('Map') }}</strong></h3>
        <a href="https://maps.app.goo.gl/DjqWjd8sXgLmm8sd8" target="_blank">{{ $t('Campus on Google maps') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
  padding-left: 0;
}
a:hover {
  color: #1a037e;
}
</style>
<script setup lang="ts">
</script>