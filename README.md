# Vuesic Player
## Group: _GeegieAndFriends_

### LINK VDO
https://drive.google.com/file/d/1b2WtoWcEK03dNxZ2fo_2FZnMaLMOJuzm/view?usp=sharing

Our team includes:

| Student ID  | Name                     | Email                      | Github Username | Contributions (%) |
|-------------|--------------------------|----------------------------|-----------------|-------------------|
| 64130500066 | Phutawan Palakavong      | Phutawan.pala@kmutt.ac.th  | pphtw           | 25                |
| 64130500079 | Siripoom Kusonsong       | Siripoom.kuso@kmutt.ac.th  | PhuMiZz         | 25                |
| 64130500080 | Supapit Krawsaikom       | Supapit.kraw@kmutt.ac.th   | supapitploy     | 0                 |
| 64130500105 | Banlearit Siriboon       | Banlearit.siri@kmutt.ac.th | banlearit       | 25                |
| 64130500119 | Bowonwit Anothaisintavee | Bowonwit.anot@kmutt.ac.th  | NewBww          | 25                |

## Contributions
- design search page (NewBww, pphtw)
- design playlist page/overlay (NewBww)
- component destructuring (NewBww, pphtw, PhuMiZz, Banlearit)
- repeat/ non-repeat queue (NewBww, pphtw, PhuMiZz, Banlearit)
- state management (PhuMiZz, pphtw, NewBww, Banleari)
- Search feature (pphtw)
- router (PhuMiZz, NewBww, Banlearit)
- add, delete, and update playlist (PhuMiZz, pphtw, NewBww, Banlearit)
- fetch API (PhuMiZz, pphtw, NewBww, Banlearit)
- like playlist (NewBww)
- like track playlist (PhuMiZz, NewBww)
- login/register (Banlearit, pphtw, NewBww)

let's see our [project diagram](https://www.figma.com/file/dDtTS5QqIBKJpVSpNJ7xoc/Project-Board?node-id=0%3A1&t=OczlRe7O1ZBPnBGJ-1)

## Overview
### HomePage
![homepage.png](docs/img/homepage.png)
### SearchPage
![searchpage.png](docs/img/searchpage.png)
### PlaylistPage
![playlistspage.png](docs/img/playlistspage.png)
Due to contributors in group listen to a variety genre of music. So, we interest to developing music player  websites project in INT203 Client-Side Programming II for learning Vue3.


### Features

- Music Player
  - Music Controller
  - Playing Queue
  - Shuffle-able Queue
  - Draggable Progress Bar
- Playlist
  - Choose Any Track From the playlist
  - Add tracks to favorites
  
#### :sparkles: New :sparkles:
- Authentication 
  - Login
  - Register
- Search
  - Search tracks and playlists 
- Playlist
  - Create playlist 
  - Update playlist 
  - Delete playlist 
  - Like playlist


  
## Tech Stack

[Our Stack](https://stackshare.io/newbww/project1-sec-2-geegie-and-friends)

## Prerequisite and Installation
You would require the following tools to develop and run the project on your local machine:

- A text editor or an IDE (Recommended: _WebStorm_ or _Visual Studio Code_)
- _NodeJs_ v16.9.0 or later (Install [NodeJs](https://nodejs.org/en/download/))
- _Yarn_ for package management. (Install Yarn through the [_npm package manager_](http://npmjs.org/))

  ```
  npm install --global yarn
  ```

  Check the version of Yarn by running:

  ```
  yarn --version
  ```


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Running the App

Steps and commands for running the app:

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Preview for Production

```sh
yarn preview
```

### App Instructions

#### Music Player Card

![A music player card](docs/img/music-player-card.png "Music Player Card")

- Play/Pause button for toggle play-pause track
- Shuffle button for shuffle queue
- Skip button for skip to next/previous track
- Loop button for loop queue in playlist

![Available playlist to choose](docs/img/pinned-playlists.png "Playlists")

![List of tracks in playlist](docs/img/playlist-tracks.png "Playlist Tracks")
- You can change tracks in a playlist by clicking playlist that you want
- Add track to favorites by clicking on the heart icon

### Search
![Search all](docs/img/searchpage-all.png "Search All")
- You can search tracks and playlists by name and keywords
- You can select a filter to search only playlists or songs

![Search playlists](docs/img/searchpage-playlists.png "Search playlists")

![Search songs](docs/img/searchpage-songs.png "Search songs")

### Playlist

- You can see your playlist library when you login

![Loggedin playlists Page](docs/img/playlistpage-loggedin.png "playlist page when loggedin")

- you can view tracks in the playlist

![playlist overlay](docs/img/playlist-overlay.png "playlist page when loggedin")

- create a playlist by clicking Add playlist

![create playlist overlay](docs/img/playlist-create.png "playlist overlay create")

- update the playlist by clicking the meatballs menu button

![update playlist overlay](docs/img/playlist-update.png "playlist overlay update")

- delete the playlist by clicking the bin icon but you can delete the playlist created by you

![delete playlist overlay](docs/img/playlist-delete.png "playlist overlay delete")

### Credit and Inspirations

- [Music Player Web App](https://dribbble.com/shots/18946599-Music-Player-Web-App) (Dribble)
- [Web Music Player Concept](https://dribbble.com/shots/19753283-Web-Music-Player-Concept) (Dribble)
- [Spotify](https://www.spotify.com/)
