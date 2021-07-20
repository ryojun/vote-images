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
<<<<<<< HEAD
<<<<<<< HEAD


                <p class="card-text">Image_File :</p>
                <div class="form-group">
                    <label class="btn btn-secondary btn-block">
                        <i class="fa fa-upload"></i> อัพโหลดภาพ
                        <input type="file" class="d-none" @change="onChangeFile($event.target)">
                        <p>{{form.Image_Name}}</p>
                    </label>

                </div>
                <button type="button" @click="onSubmit()" class="btn btn-success">Submit</button>
=======
                <p class="card-text">Image_Like :</p>
                <Field name="Image_Like" :rules="isRequired" />
                <ErrorMessage name="Image_Like" />
                <p class="card-text">Image_File :</p>
                <input type="file" id="myFile" name="filename">
                <button type="button" class="btn btn-success">Submit</button>
>>>>>>> parent of 889a613... update add page and test upload
=======
                <p class="card-text">Image_Like :</p>
                <Field name="Image_Like" :rules="isRequired" />
                <ErrorMessage name="Image_Like" />
                <p class="card-text">Image_File :</p>
                <input type="file" id="myFile" name="filename">
                <button type="button" class="btn btn-success">Submit</button>
>>>>>>> parent of 889a613... update add page and test upload
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
<<<<<<< HEAD
<<<<<<< HEAD
  data() {
        return {
            form: {
                Image_Name: "",
                Image_shortcode: "",
                Ig_account: "",
                Image_rank: ""
            },
            errorMessage: ""
        };
    },
=======
>>>>>>> parent of 889a613... update add page and test upload
=======
>>>>>>> parent of 889a613... update add page and test upload
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
<<<<<<< HEAD
<<<<<<< HEAD
    onTest() {
      console.log(this.form)
    },
    onChangeFile(input) {
      // console.log(input.files[0].name)
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        this.form.Image_Name = file.name
        if (file.type.indexOf("image/") >= 0) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.addEventListener("load", () => {
            // console.log(reader.result);
            this.form.Image_shortcode = reader.result
          });
          return;
        }
      }
    },
    onSubmit() {
      try{
        Axios.post("api/imagesmanager/addimage",this.form).then(response => {console.log(response); this.onReset();}).catch(err => {console.log(err)});
      }catch (ex) {
        console.log(ex);
      }
    },
    onReset() {
      this.form = {
        Image_Name: "",
        Image_shortcode: "",
        Ig_account: this.form.Ig_account,
        Image_rank: ""
      };
    }
=======
>>>>>>> parent of 889a613... update add page and test upload
=======
>>>>>>> parent of 889a613... update add page and test upload
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
