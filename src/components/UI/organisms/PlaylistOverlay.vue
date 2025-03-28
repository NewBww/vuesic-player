<script setup>
import { useOverlayStore } from '@/stores/overlayStore'
import { storeToRefs } from 'pinia'
import { ref, inject, watchEffect } from 'vue'
import { useControllerStore } from '@/stores/controllerStore'
import { useUserStore } from '@/stores/userStore'

import PreviousPageButton from '../atoms/PreviousPageButton.vue'
import PlayPauseButton from '../atoms/PlayPauseButton.vue'
import LikeButton from '../atoms/LikeButton.vue'
import MenuButton from '../atoms/MenuButton.vue'

import ContentSection from '../../templates/ContentSection.vue'
import TrackList from './TrackList.vue'
import TrackService from '@/lib/trackService'
import PlaylistService from '@/lib/playlistService'
import UserService from '@/lib/userService'
import ModalTemplate from '../../templates/ModalTemplate.vue'
import { usePlaylistStore } from '@/stores/playlistStore'

const trackService = new TrackService()
const playlistService = new PlaylistService()
const userService = new UserService()

const overlayStore = useOverlayStore()
const { overlayPlaylistId, contextMenu, playlistOverlay } =
  storeToRefs(overlayStore)

const controllerStore = useControllerStore()
const { isPlaying } = storeToRefs(controllerStore)
const { chooseTrack, togglePlayPause } = controllerStore

const userStore = useUserStore()
const { currentUser } = storeToRefs(userStore)

const playlistStore = usePlaylistStore()
const { addToFavorites, checkFavorites } = playlistStore

const audioElement = inject('audioElement')
const playlist = ref({})
const tracks = ref({})
const emit = defineEmits(['chooseTrack', 'deletePlaylist', 'updatePlaylist'])

const playlistUserName = ref(null)
const isOpen = ref(false)
watchEffect(async () => {
  if (playlistOverlay.value.isOpen) {
    playlist.value = playlistOverlay.value.playlist
    tracks.value = await trackService.getFilteredItemList(
      'tracks',
      playlist.value.tracks
    )
    tracks.value = playlist.value.tracks.map((trackId) =>
      tracks.value.find((track) => track.id === trackId)
    )
    if (playlist.value.owner === 1) {
      playlistUserName.value = 'Vuesic Player'
    } else {
      playlistUserName.value = (
        await userService.getUserById(playlist.value.owner)
      ).firstName
    }
  }
})

const onChooseTrackClick = (e, playlistId) => {
  if (playlistId !== 0) {
    localStorage.setItem('selectedPlaylistId', JSON.stringify(playlistId))
    chooseTrack(e.currentTarget.id, playlistId)
    emit('chooseTrack', 300)
  } else {
    localStorage.setItem('selectedPlaylistId', JSON.stringify(1))
    chooseTrack(e.currentTarget.id, 1)
  }
}
const onClickOpenDeleteBtn = () => {
  isOpen.value = true
}
const onClickCloseDeleteBtn = () => {
  isOpen.value = false
}
const onDeletePlaylist = async () => {
  if (
    playlist.value.owner !== 1 &&
    playlist.value.owner === currentUser.value.id
  ) {
    await playlistService.deletePlaylist(overlayPlaylistId.value)
  }
  localStorage.setItem('selectedPlaylistId', JSON.stringify(1))
  isOpen.value = false
  playlistOverlay.value.hide()
  emit('deletePlaylist')
}

const onClickOutside = () => {
  playlistOverlay.value.hide()
  contextMenu.value.hide()
}
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="playlistOverlay.isOpen"
        class="absolute top-0 left-0 w-screen h-screen bg-gray-900/50 flex items-center justify-center z-[998]"
        @click.self="onClickOutside"
      >
        <div
          class="grid grid-rows-[1fr_2fr] background-overlay shadow-xl w-[60%] min-w-fit h-full no-scrollbar-full"
          :class="[
            contextMenu.isOpen ? 'overflow-y-hidden' : 'overflow-y-scroll',
          ]"
          @click="contextMenu.hide"
        >
          <div class="md:flex w-full row-span-1 p-10">
            <ContentSection class="min-h-full">
              <template v-slot:header>
                <div class="flex flex-row justify-between">
                  <PreviousPageButton @click="playlistOverlay.hide" />
                  <button
                    v-if="
                      playlist.owner !== 1 &&
                      currentUser.id === playlist.owner &&
                      playlist.id !== 0
                    "
                    class="bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-10"
                    @click="onClickOpenDeleteBtn"
                  >
                    <svg
                      class="scale-75"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Z"
                      />
                    </svg>
                  </button>
                </div>
              </template>

              <div class="w-full h-full grid grid-cols-[1fr_2fr] gap-x-5">
                <div
                  class="bg-gray-300 aspect-square bg-center bg-no-repeat bg-cover w-full"
                  :style="{
                    backgroundImage:
                      'url(' + encodeURI(playlist.background) + ')',
                  }"
                ></div>
                <div class="flex h-full items-center">
                  <div class="grow text-left text-white pt-20">
                    <h1 class="text-6xl font-bold pb-5">
                      {{ playlist.name }}
                    </h1>
                    <p class="text-2xl font-semibold">
                      {{ playlistUserName }} | {{ tracks.length }}
                      {{ tracks.length > 1 ? 'Songs' : 'Song' }}
                    </p>
                  </div>
                </div>
              </div>
            </ContentSection>
          </div>
          <div class="md:flex w-full h-full row-span-1 p-10 pt-0">
            <ContentSection class="h-full">
              <template v-slot:header>
                <div
                  class="flex flex-row justify-start w-full gap-x-5 items-center"
                >
                  <button
                    class="[clip-path:circle()]"
                    @click="togglePlayPause(audioElement)"
                  >
                    <PlayPauseButton :isActive="isPlaying" class="w-20 h-20" />
                  </button>

                  <button
                    v-if="playlist.owner !== 1 && playlist.id !== 0"
                    @click="addToFavorites(playlist.id, 'playlist')"
                  >
                    <LikeButton
                      fill="#c493e1"
                      stroke="#c493e1"
                      v-if="checkFavorites(playlist.id, 'playlist')"
                    />
                    <LikeButton fill="none" stroke="white" v-else />
                  </button>
                  <MenuButton
                    v-if="
                      playlist.owner !== 1 &&
                      playlist.id !== 0 &&
                      currentUser.id === playlist.owner
                    "
                    fill="#FFFFFF"
                    class="w-10 h-10 cursor-pointer"
                    @click="$emit('updatePlaylist', playlist)"
                  />
                </div>
              </template>
              <div class="h-full">
                <TrackList
                  :trackList="tracks"
                  :playlistId="overlayPlaylistId"
                  @chooseTrack="onChooseTrackClick"
                />
              </div>
            </ContentSection>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  <ModalTemplate :show-modal="isOpen" @hide-modal="onClickCloseDeleteBtn">
    <div class="bg-white h-full rounded-2xl flex flex-col justify-around">
      <div class="h-fit">
        <h1 class="text-2xl font-bold text-center">
          Are you sure you want to delete this playlist ?
        </h1>
      </div>
      <div class="flex justify-center space-x-24">
        <button
          class="w-24 h-14 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-2xl"
          @click="onClickCloseDeleteBtn"
        >
          No
        </button>
        <button
          class="w-24 h-14 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-2xl"
          @click="onDeletePlaylist"
        >
          Yes
        </button>
      </div>
    </div>
  </ModalTemplate>
</template>

<style scoped>
.background-overlay {
  background: linear-gradient(180deg, #162750 0%, #171717 100%);
}

.v-enter-active {
  transition: opacity 0.3s ease-in;
}

.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
