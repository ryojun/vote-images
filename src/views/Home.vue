<template>
    <div class="register container">
        <div class="row">
            <!-- <div class="col-md-3"></div> -->
            <!-- <img src="../assets/Empty-logo.png" alt="Logo" class="img-logo"> -->
            <div class="col-md-6">
                <div class="card">
                    <h1 class="card-header">
                        VOTE BETTER IMAGE
                    </h1>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="">IMGE :</label>
                                <img src="../assets/BestForTest.jpg" alt="Logo" class="img-logo">
                            </div>
                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-info btn-block">
                                    VOTE
                                </button>

                                <button type="button" class="btn btn-secondary btn-block">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <h1 class="card-header">
                        VOTE BETTER IMAGE
                    </h1>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="">IMGE :</label>
                                <img src="../assets/WorstForTest.jpg" alt="Logo" class="img-logo">
                            </div>
                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-info btn-block">
                                    VOTE
                                </button>

                                <button type="button" class="btn btn-secondary btn-block">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.img-logo {
  width: 80%;
  height: 20%;
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
}
.card {
  margin-bottom: 15%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.buttons .btn-info {
    width: 100%;
    margin-top: 0px;
}
.buttons .btn-secondary {
    width: 100%;
    margin-top: 10px;
}
.buttons {
  margin-top: 30px;
  margin-bottom: 50px;
}
.form-group {
    margin-bottom: 2%;
}
</style>
