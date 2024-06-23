<template>
  <form @submit.prevent="handleSearch">
    <div class="row">
      <div class="mb-3 text-start d-flex justify-content-start">
        <div class="col-md-2 mx-2">
          <label for="author" class="form-label">{{ $t('Author') }}</label>
          <input type="text" class="form-control" id="author" v-model="filters.author">
        </div>
        <div class="col-md-2 mx-2">
          <label for="title" class="form-label">{{ $t('Title') }}</label>
          <input type="text" class="form-control" id="title" v-model="filters.title">
        </div>
        <div class="col-md-2 mx-2">
          <label for="abstract" class="form-label">{{ $t('Abstract') }}</label>
          <input type="text" class="form-control" id="abstract" v-model="filters.abstract">
        </div>
        <div class="col-md-2 mx-2">
          <label for="publisher" class="form-label">{{ $t('Publisher') }}</label>
          <input type="text" class="form-control" id="publisher" v-model="filters.publisher">
        </div>
      </div>
      <div class="d-flex text-start justify-content-start">
        <div class="col-md-2 mx-2">
          <label for="from" class="form-label">{{ $t('From') }}</label>
          <input type="date" class="form-control" id="from" v-model="filters.from">
        </div>
        <div class="col-md-2 mx-2">
          <label for="to" class="form-label">{{ $t('To') }}</label>
          <input type="date" class="form-control" id="to" v-model="filters.to">
        </div>
        <div class="col-md-2 mx-2">
          <label for="text" class="form-label d-flex">{{ $t('Text') }} <sub>1</sub></label>
          <input type="text" class="form-control" id="text" v-model="filters.text">
        </div>
        <div class="col-md-2 mx-2">
          <label for="type" class="form-label">{{ $t('Type') }}</label>
          <select class="form-select" aria-label="Default select example" v-model="filters.type">
            <option selected>{{ $t('All') }}</option>
            <option v-for="publicationType in publicationTypes" :key="publicationType">
              {{ $t(publicationType) }}
            </option>
          </select>
        </div>
      </div>
      <div class="d-flex mt-3 mx-2"><sub>1</sub>{{ $t('min length 2 chars') }}</div>
      <div class="d-flex mt-2 mx-2">
        <button class="btn btn-primary mt-2 mb-5" type="submit">{{ $t('Search') }}</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        author: '',
        title: '',
        abstract: '',
        publisher: '',
        from: '',
        to: '',
        text: '',
        type: 'All',
      },
      publicationTypes: [
        'Journal',
        'Book',
        'Conference',
        'Diploma Thesis',
        'Phd Thesis'
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.filters);
    }
  }
}
</script>

<style scoped>
</style>
