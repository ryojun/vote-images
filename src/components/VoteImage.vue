<template>
    <div class="Vote container">
      <header class="mb-4">
          <h1>เลือก VOTE รูปภาพที่ดีที่สุด</h1>
      </header>
      <Form action="">
        <p>ชื่อผู้ทำแบบทดสอบ :</p>
        <input v-model="username" placeholder="ระบุชื่อ">
        <p>Name is: {{ username }}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>รูป 1</th>
                    <th>รูป 2</th>
                </tr>
            </thead>
            <tbody v-if="seen1" id="hide">
                <tr>
                    <td v-for="item in foodsBest" :key="item.id_table">
                        <div class="img-container">
                            <img class="img" :alt="item.Vote_type" :src="`/api/uploads/${item.Image_shortcode}`">
                            <div class="d-grid gap-2">
                              <button type="button" @click="onVote()" class="btn btn-success">VOTE</button>
                              {{addNewData(username,item.Image_Name)}}
                            </div>
                        </div>
                    </td>
                    <td v-for="item in foodsWorst" :key="item.id_table">
                        <div class="img-container">
                            <img class="img" :alt="item.Vote_type" :src="`/api/uploads/${item.Image_shortcode}`">
                            <div class="d-grid gap-2">
                              <button type="button" @click="onVote()" class="btn btn-success">VOTE</button>
                              {{addNewData(username,item.Image_Name)}}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-if="seen2" id="hide">
                <tr>
                    <td v-for="item in foodsWorst" :key="item.id_table">
                        <div class="img-container">
                            <img class="img" :alt="item.Vote_type" :src="`/api/uploads/${item.Image_shortcode}`">
                            <div class="d-grid gap-2">
                              <button type="button" @click="onVote()" class="btn btn-success">VOTE</button>
                              {{addNewData(username,item.Image_Name)}}
                            </div>
                        </div>
                    </td>
                    <td v-for="item in foodsBest" :key="item.id_table">
                        <div class="img-container">
                            <img class="img" :alt="item.Vote_type" :src="`/api/uploads/${item.Image_shortcode}`">
                            <div class="d-grid gap-2">
                              <button type="button" @click="onVote()" class="btn btn-success">VOTE</button>
                              {{addNewData(username,item.Image_Name)}}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </Form>
    </div>
</template>

<script>
import Axios from "axios";
import { mapState } from 'vuex';
export default {
  computed :{
      ...mapState(['foodsBest','foodsWorst'])
  },
  data() {
    return{
      page: 1,
      Vote_typePage: 1,
      seen1: false,
      seen2: true,
      username: null,
      from: {
        user_name: null,
        Image_name: null,
        Vote_type: null,
        Image_vote: "Best"
      },
      from2: {
        user_name: null,
        Image_name: null,
        Vote_type: null,
        Image_vote: "Best"
      },
      user_nameList: [],
      Image_nameList: [],
      Vote_typeList: [],
      Image_vote: ["Best","Wost"]
    }
  },
  created() {
      this.$store.dispatch('set_foodsBest', this.page);
      this.$store.dispatch('set_foodsWorst', this.page);
      this.seenRandom()
  },
  methods: {
    
    onVote() {
      this.from.user_name = this.user_nameList[0];
      this.from.Image_name = this.Image_nameList[0];
      this.from.Vote_type = this.Vote_typePage
      this.from.Image_vote = this.Image_vote[0]
      this.from2.user_name = this.user_nameList[1];
      this.from2.Image_name = this.Image_nameList[1];
      this.from2.Vote_type = this.Vote_typePage
      this.from2.Image_vote = this.Image_vote[1]
      Axios.post("api/voteimage/votefoods",this.from)
        .then(response => {console.log(response);})
        .catch(err => {console.log(err)});
      Axios.post("api/voteimage/votefoods",this.from2)
        .then(response => {console.log(response); this.changImage()})
        .catch(err => {console.log(err)});
    },
    changImage() {
      this.page += 1
      this.$store.dispatch('set_foodsBest', this.page);
      this.$store.dispatch('set_foodsWorst', this.page);
      this.seenRandom()
      this.user_nameList = [];
      this.Image_nameList = [];
    },
    addNewData(username,Image_Name) {
      this.user_nameList.push((username || "User"))
      this.Image_nameList.push(Image_Name)
    },
    onRandom(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    seenRandom(){
      if (this.onRandom(0,1) == 0){
        this.seen1 = true;
        this.seen2 = false;
        console.log(0)
      } else {
        this.seen1 = false;
        this.seen2 = true;
        console.log(1)
      }
    }
  },
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
.img {
    width: 500px;
}
.img-container{
    width: 100%;
    height: 100%;
}
.img-container img{
    max-width: 100%;
    max-height: 100%;
}
.btn {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
