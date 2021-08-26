<template>
	<div class="container">
		<div class="top">
			<h1>{{ title }}</h1>
		</div>
		<div class="bottom">
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
export default {
		props: ['title'],
		data() {
			return {
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
		}
	}
</script>

<style scoped>
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
</style>
