<template>
  <div class="container">
    <div class="card mt-4 mb-4">
      <div class="card-body text-start">
        <h1>{{ $t('University of West Attica') }}</h1>
        <h2>{{ $t('Department of Informatics and Computer Engineering')}}</h2>

        <h3 class="mr-auto"><strong>{{ $t('Address') }}</strong></h3>
        <p class="mb-0">
          <strong>
            <a href="https://maps.app.goo.gl/TwLzsnJdhEmD8x518" target="_blank"><i class="fa-regular fa-map" style="color: red"></i> {{ $t('Ag. Spyridonos Str., Egaleo, Postal Code 12243, Athens') }}</a>
          </strong>
        </p>
        <a class="d-block" href="emailto: ice@uniwa.gr"><i class="fa-solid fa-envelope" style="color: #1a037e"></i> ice@uniwa.gr</a>
        <a class="d-block" href="tel:2105385312"><i class="fa-solid fa-phone"  style="color: #1a037e"></i> +30.210-538-5312</a>
        <a class="d-block" href="tel:2105910975"><i class="fa-solid fa-fax"  style="color: #1a037e"></i> +30.210-591-0975</a>

        <h3 class="mr-auto"><strong>{{ $t('Map') }}<i class="fa-solid fa-location-dot m-lg-2" style="color: red"></i></strong></h3>
        <a href="https://maps.app.goo.gl/DjqWjd8sXgLmm8sd8" target="_blank"> <i class="fa-regular fa-map" style="color: red"></i> {{ $t('Campus on Google maps') }}</a>
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