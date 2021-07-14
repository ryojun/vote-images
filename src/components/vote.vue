<template>
    <div class="Vote container">
      <button type="button" @click="onVote()" class="btn btn-success">VOTE</button>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            from: {
                    user_name: "test",
                    Image_name: "test",
                    Image_shortcode: "test",
                    Image_vote: "Best"
            }
        }
    },
    methods: {
        onVote() {
          console.log(this.from)
          Axios.post("api/voteimage/votefoods",this.from)
            .then(response => {console.log(response)})
            .catch(err => {console.log(err)});
        }
    }
}

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
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.form-group {
    margin-bottom: 2%;
}
.img-container{
    width: 500px;
    height: 500px;
}
.img-container img{
    max-width: 100%;
    max-height: 100%;
}
</style>