<template>
  <div class="entry-container mb-3 pointer p-2" 
       @click="$router.push({ name: 'entry', params: {id: 10 }})"
  >

      <!-- Titulo -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">07</span>
          <span class="mx-1 fs-5">Febrero</span>
          <span class="mx-1 fw-light">Lunes</span>
      </div>

      <div class="entry-description">
          Esse in laboris sint non magna fugiat aute aute laboris adipisicing enim occaecat. Et magna sit dolore anim enim ea non commodo proident aliquip. Duis reprehenderit sit labore magna in excepteur. Veniam excepteur consectetur dolor nostrud culpa officia nostrud excepteur veniam fugiat. Esse qui aute duis irure. Fugiat aliqua non mollit officia eiusmod Lorem sit irure esse veniam.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>