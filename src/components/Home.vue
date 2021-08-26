<template>
  <div class="container">
	<router-link to="/profileView">
	<div class="top">
		<img src="../assets/Travel.png">
    <h1>{{ msg }}</h1>
	</div>
	<div class="bottom">
	</div>
	</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	width: 100%;
	height: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
	color:black;
  text-decoration:none;
}
.top {
	width: 100%;
	height: 90%;
}
.bottom {
	width: 100%;
	height: 10%;
}
</style>
