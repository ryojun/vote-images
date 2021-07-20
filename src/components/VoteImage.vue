<template>
    <div class="Vote container">
        <form action="">
            <div class="col-md-3"></div>
            <h1>เลือก VOTE รูปภาพที่ดีที่สุด</h1>
            <div class="row">
                <div class="col">
                    <img src="../assets/BestForTest.jpg" alt="Logo" class="img-logo">
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-success">VOTE</button>
                    </div>
                </div>
                <div class="col">
                    <img src="../assets/WorstForTest.jpg" alt="Logo" class="img-logo">
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-success">VOTE</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      setTimeout(this.seenRandom(),2000)
      this.user_nameList = [];
      this.Image_nameList = [];
    },
    addNewData(username,Image_Name) {
      this.user_nameList.push((username || Date.now()))
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
=======
  name: 'VoteImage'
>>>>>>> parent of 889a613... update add page and test upload
=======
  name: 'VoteImage'
>>>>>>> parent of 889a613... update add page and test upload
=======
  name: 'VoteImage'
>>>>>>> parent of 889a613... update add page and test upload
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
</style>
