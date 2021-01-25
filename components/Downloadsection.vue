<template>
  <v-container fluid style="background-color:#0a0d12;overflow:hidden;">
    <div style="position:relative;">
      <div
        style="position:absolute;top:-100px;right:0px;width:200px;border-radius:100px;height:200px;background-color:#FF5722"
      ></div>
    </div>
    <v-row id="downloadnow" class="my-16 d-flex align-center">
      <v-col class="d-flex" cols="12">
        <div class="mx-auto accent" style="border-radius:100px;">
          <v-icon x-large class="pa-7">fal fa-download</v-icon>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <div class="mx-auto text-center">
          <SectionTitle :first="'Download'" :second="'Now'" />
          <v-btn rounded color="accent" x-large link href="/animezone.apk">
            <v-icon class="mr-3">download</v-icon>
            Download for android
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div style="position:relative;">
      <div
        style="position:absolute;top:-100px;width:200px;border-radius:100px;height:200px;background-color:#FF5722"
      ></div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
