<template>
    <div class="row">
        <div class="col-sm-12">
        <h3>Players Added</h3>
        <div class="progress">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                :style="{width: (playerCount/maxPlayers) * 100 + '%'}">
                    {{ playerCount }} / {{ maxPlayers }}
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
    
<script>
export default{
    props: ['playerCount', 'maxPlayers']
}
</script>