<script lang="ts">
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
    import {type Station } from "$lib/types"

    const { station }: {station: Station} = $props() 
    const {lat, lon} = station;

</script>

<div style="width:100%;height:400px;" class="map">
	<Map
		options={{
			center: [lat, lon],
			zoom: 14
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
		<Marker latLng={[lat, lon]}>
            <Popup
				options={{
					content: station.name
				}}
			></Popup>
        </Marker>
	</Map>
</div>

<style>
	.map {
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
		-webkit-mask-image: -webkit-radial-gradient(white, black);
		mask-image: radial-gradient(white, black);
		-webkit-border-radius: 0.5rem;
		border-radius: 0.5rem;
	}
</style>
