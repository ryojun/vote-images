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
  name: 'VoteImage'
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
