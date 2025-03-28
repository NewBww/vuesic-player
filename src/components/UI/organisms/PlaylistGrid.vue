<script setup>
import { useOverlayStore } from '@/stores/overlayStore'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import PlaylistOverlay from '@/components/UI/organisms/PlaylistOverlay.vue'
import CreateOverlay from './CreatePlaylistOverlay.vue'
import { ref } from 'vue'

const overlayStore = useOverlayStore()
const { isUpdate, playlistOverlay } = storeToRefs(overlayStore)
const { showCreateOverlay, contextMenu } = overlayStore

const userStore = useUserStore()
const { currentUser } = storeToRefs(userStore)
const { checkUserLoggedIn } = userStore

const emit = defineEmits(['updatedPlaylist'])

const props = defineProps({
  cols: {
    type: String,
    required: true,
  },
  playlists: {
    type: Array,
    required: true,
  },
  searchPageIsOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const playlist = ref({})

const onUpdatePlaylist = (selectedPlaylist) => {
  playlist.value = selectedPlaylist
  if (
    playlist.value.owner !== 1 &&
    playlist.value.owner === currentUser.value.id
  ) {
    isUpdate.value = true
  }
}
</script>

<template>
  <div class="min-h-0 overflow-y-scroll">
    <div class="h-fit gap-x-6 gap-y-3 grid" :class="[cols]">
      <div
        v-if="checkUserLoggedIn() && !searchPageIsOpen"
        class="flex justify-center cursor-pointer h-full aspect-square hover:opacity-80 bg-cover rounded-xl my-auto truncate bg-transparent/30"
        @click="showCreateOverlay"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon scale-75"
          viewBox="0 0 512 512"
        >
          <path
            fill="#FFFFFF"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      </div>
      <div
        class="flex justify-center cursor-pointer truncate h-full aspect-square hover:opacity-80 bg-transparent/80 bg-cover rounded-xl my-auto"
        v-for="playlist in playlists"
        :key="playlist.id"
        :id="playlist.id"
        :style="{
          backgroundImage: 'url(' + encodeURI(playlist.background) + ')',
        }"
        tabindex="-1"
        @click="playlistOverlay.show(playlist)"
        @contextmenu.prevent="contextMenu.show($event, 'playlist')"
      >
        <p class="text-white text-lg font-semibold self-center text-center">
          {{ playlist.name }}
        </p>
      </div>
    </div>
  </div>
  <PlaylistOverlay
    @deletePlaylist="$emit('updatedPlaylist')"
    @updatePlaylist="onUpdatePlaylist"
  />
  <CreateOverlay
    @updatedPlaylist="$emit('updatedPlaylist')"
    @createPlaylist="$emit('updatedPlaylist')"
    :playlist="playlist"
  />
</template>

<style scoped></style>
