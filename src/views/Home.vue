<template>
    <div>
    <Stream />
    <HelloWorld />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Stream from '@/components/Stream.vue'

export default {
  name: 'Home',
  components: {
      Stream,
      HelloWorld,
  }
}
</script>
