<template>
  <div class="player">
          <video-player 
                ref="videoPlayer"
                class="player"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @ready="onPlayerReady($event)">
          </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-videojs7'
export default {
    name: 'Stream',
    components: {
        videoPlayer
    },

    data: () => ({
        playerOptions: {
            autoplay: true,
            controls: true,
            controlBar: {
                timeDivider: false,
                durationDisplay: false,
            }
        }
    }),
    computed: {
        player () {
            return this.$refs.videoPlayer.player
        }
    },
    methods: { 
        onPlayerPlay (player) {
            console.log('player play!', player)
        },
        onPlayerReady (player) {
            console.log('player ready!', player)
            this.player.play()
        },
        playVideo: function (source) {
            const video = {
                withCredentials: false,
                type: 'application/x-mpegurl',
                src: source
            }
            this.player.reset()
            this.player.src(video)
            this.player.play()
        },
    },
    mounted() {
        const src = 'http://172.16.1.112:8080/hls/test.m3u8'
        this.playVideo(src)
    }
}
</script>

<style scoped>
.player {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 60%;
}
.vjs-custom-skin {
    height: 60% !important;
}
.vjs-custom-skin /deep/ .video-js {
    height: 60%
}
.head3 {
    text-align: center;
}
</style>
