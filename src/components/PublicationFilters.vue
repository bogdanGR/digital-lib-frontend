<template>
  <form>
    <div class="row">
      <div class="mb-3 text-start d-flex justify-content-start">
        <div class="col-md-2 mx-2">
          <label for="author" class="form-label">Author</label>
          <input type="text" class="form-control" id="author" >
        </div>
        <div class="col-md-2 mx-2">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title">
        </div>
        <div class="col-md-2 mx-2">
          <label for="abstract" class="form-label">Abstract</label>
          <input type="text" class="form-control" id="abstract">
        </div>
        <div class="col-md-2 mx-2">
          <label for="publisher" class="form-label">Publisher</label>
          <input type="text" class="form-control" id="publisher">
        </div>
      </div>
      <div class="d-flex text-start justify-content-start">
        <div class="col-md-2 mx-2">
          <label for="from" class="form-label">From</label>
          <input type="date" class="form-control" id="from">
        </div>
        <div class="col-md-2 mx-2">
          <label for="to" class="form-label">To</label>
          <input type="date" class="form-control" id="to">
        </div>
        <div class="col-md-2 mx-2">
          <label for="text" class="form-label d-flex">Text <sub>1</sub></label>
          <input type="text" class="form-control" id="text">
        </div>
        <div class="col-md-2 mx-2">
          <label for="type" class="form-label">Type</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option v-for="publicationType in publicationTypes" :key="publicationType">
              {{ publicationType }}
            </option>
          </select>
        </div>
      </div>
      <div class="d-flex mt-3 mx-2"><sub>1</sub>:min length 2 chars, first 3 matches are shown per paper</div>
      <div class="d-flex mt-2 mx-2">
        <button class="btn btn-primary mt-2 mb-5">Search</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      publicationTypes: [
          'Journal',
          'Book',
          'Conference',
          'Diploma Thesis',
          'Phd Thesis'
      ]
    }
  }
}
</script>

<style scoped>

</style>