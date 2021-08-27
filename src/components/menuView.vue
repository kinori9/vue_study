<template>
	<div class="container">
		<div class="top"
		v-bind:class="{'orginalMode': !clicked, 'darkmode':clicked}">
			<h1>{{ title }}</h1>
			<slot>
		<!--darkmode -->
		<button id="btn"
		v-on:click="clicked = !clicked">theme chagne</button>

			</slot>
		</div>
		<div class="bottom"
		v-bind:class="{'orginalMode': !clicked, 'darkmode':clicked}">
			<ul>
				<li v-for="item in items">
					<router-link v-bind:to="`/${item.url}`">
						{{ item.menu }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
//var menu = new Vue(
var data = {
	clicked : false,
	items: [
	{
		menu: 'profile',
		url: 'profileView'
	},
	{
		menu: 'book',
		url: 'bookView'
	},
	{
		menu: 'map',
		url: 'mapView'
	},
	{
		menu: 'setting',
		url: 'settingView'
	},
	]
}
export default {
		props: ['title'],
		data: function (){
			return data
		}
}
</script>

<style scoped>
h1 {
	margin: 0px;
	padding-top: 12px;
}
a {
	text-decoration:none;
	color:gray;
}
ul {
	margin: 0px;
	padding: 0px;
	list-style:none;
	text-align:center;
}
li {
	display:inline-block;
	width: 25%;
}

.darkmode {
	background-color: black;
	color: white;
}

.container {
	width: 100%;
	height: 100%;
}
.top {
	width: 100%;
	height: 90%;
}
.bottom {
	width: 100%;
	height: 10%;
}
#btn {
	float: right;
}
</style>
