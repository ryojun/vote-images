<template>
    <div class="Vote container">
      <div class="card">
        <div class="card-header">
          Add Image To database
        </div>
        <div class="card-body">
          <Form action="">
              <div class="col-md-3"></div>
              <h1>Upload ไฟล์ภาพ</h1>
              <div class="row">
                <p class="card-text">ชื่อไฟล์ภาพ :</p>
                <Field name="ImageName" :rules="isRequired" />
                <ErrorMessage name="ImageName" />
                <p class="card-text">Shortcode :</p>
                <Field name="Shortcode" :rules="isRequired" />
                <ErrorMessage name="Shortcode" />
                <p class="card-text">Ig_account :</p>
                <Field name="Ig_account" :rules="isRequired" />
                <ErrorMessage name="Ig_account" />
                <p class="card-text">Image_rank :</p>
                <Field name="Image_rank" :rules="isRequired" />
                <ErrorMessage name="Image_rank" />
                <p class="card-text">Image_Like :</p>
                <Field name="Image_Like" :rules="isRequired" />
                <ErrorMessage name="Image_Like" />
                <p class="card-text">Image_File :</p>
                <input type="file" id="myFile" name="filename">
                <button type="button" class="btn btn-success">Submit</button>
              </div>
          </Form>
        </div>
      </div>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  name: 'AddImage',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    },
  },
};
</script>

<style scoped>
.img-logo {
  width: 80%;
  height: 80%;
  display: block;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 10px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
  margin-top: 5%;
}
.col {
  margin-bottom: 15%;
}
.card {
  margin-top: 2%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.form-group {
    margin-bottom: 2%;
}
.card-text {
  margin-top: 1%;
  margin-bottom: 1%;
}
.btn {
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>
