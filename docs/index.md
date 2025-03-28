# Project Music Player (Release v2.2.0)

##### By _Geegie and Friends_, an INT203 Project Team

A Vue music player project for INT203 Class created for education purposes only.

Open and view the Project using the `.zip` file provided or at my [GitHub Repository]

The project is also hosted on [Netlify](https://geegie.netlify.app) (for development preview using this [link](https://geegie-dev.netlify.app))

## Table of Contents

- [Getting Started](#getting-started)
  - [Tools Required](#tools-required)
  - [Installation](#installation)
- [Development](#development)
  - [Sprint 1: Planning and Project Setup](#sprint-1-planning-and-project-setup)
    - [Step 1: Project and repository preparation](#step-1-project-and-repository-preparation)
    - [Step 2: Work flow planning and choosing the topic](#step-2-work-flow-planning-and-choosing-the-topic)
  - [Sprint 2: Home page UI and Music Player](#sprint-2-home-page-ui-and-music-player)
    - [Step 1: Design the homepage for the application](#step-1-design-the-homepage-for-the-application)
    - [Step 2: Coding the music player component and layout for the homepage](#step-2-coding-the-music-player-component-and-layout-for-the-homepage)
  - [Sprint 3: Main Function for Homepage](#sprint-3-main-function-for-homepage)
    - [Step 1: Refactor the code from previous sprint](#step-1-refactor-the-code-from-previous-sprint)
    - [Step 2: Planning the backlog for this sprint](#step-2-planning-the-backlog-for-this-sprint)
    - [Step 3: Develop new features for the app](#step-3-develop-new-features-for-the-app)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## Getting Started

The two primary branches in the project are `main` and `dev`.

- `main` contains the production version of the application code
- `dev` contains code under development

The project structure:

```
    PROJECT1-SEC-2-GeegieAndFriends
	├── README.md
	├── package.json
	├── .gitignore
	├── .stylelintrc.json
	├── .yarnrc.yml
	├── .gitignore
	├── package.json
	├── postcss.config.js
	├── tailwind.config.js
	├── vite.config.js
	├── yarn.lock
	├── index.html
	├── data
	│   └── db.json
	├── .github
	│   └── workflows
	│       └── unit-test.yml
	├── .yarn
	│   ├── cache
	│   └── releases
	├── public
	│   ├── img
	│   └── tracks
	└── src
	    ├── assets
	    ├── components
	    │   ├── pages
	    │   │    ├── CollaboratorPage.vue
	    │   │    ├── HomePage.vue
	    │   │    ├── PlaylistPage.vue
	    │   │    └── SearchPage.vue
	    │   ├── templates
	    │   │    ├── ContentSection.vue
	    │   │    ├── ModalTemplate.vue
	    │   │    └── PageTemplate.vue
	    │   └── UI
	    │        ├── atoms
	    │        │    ├── CollaboratorPageButton.vue
	    │        │    ├── EditButton.vue
	    │        │    ├── FilterButton.vue
	    │        │    ├── HomePageButton.vue
	    │        │    ├── LikeButton.vue
	    │        │    ├── LoginLogooutButton.vue
	    │        │    ├── MenuButton.vue
	    │        │    ├── MusicCover.vue
	    │        │    ├── MusicName.vue
	    │        │    ├── MusicPlayerCardLoading.vue
	    │        │    ├── NextPageButton.vue
	    │        │    ├── NoShuffled.vue
	    │        │    ├── PlaylistCarouselLoading.vue
	    │        │    ├── PlaylistPageButton.vue
	    │        │    ├── PlayPauseButton.vue
	    │        │    ├── PreviousButton.vue
	    │        │    ├── PreviousPageButton.vue
	    │        │    ├── RepeatButton.vue
	    │        │    ├── SearchPageButton.vue
	    │        │    ├── SectionHeader.vue
	    │        │    ├── ShuffleButton.vue
	    │        │    ├── SkipButton.vue
	    │        │    ├── Timer.vue
	    │        │    └── TrackListLoading.vue
	    │        ├── molecules
	    │        │    ├── FilterSection.vue
	    │        │    ├── ProgressBarWithTimer.vue
	    │        │    ├── SearchBar.vue
	    │        │    └── TitleAndArtist.vue
	    │        └── organisms
	    │             ├── CollaboratorGrid.vue
	    │             ├── ContextMenu.vue
	    │             ├── CreatePlaylistOverlay.vue
	    │             ├── LoginOverlay.vue
	    │             ├── MusicPlayerCard.vue
	    │             ├── NavigationBar.vue
	    │             ├── PinnedPlaylistGrid.vue
	    │             ├── PlaylistGrid.vue
	    │             ├── PlaylistOverlay.vue
	    │             ├── SingleTrack.vue
	    │             └── TrackList.vue
	    ├── lib
	    │   ├── playlistService.js
	    │   ├── registerManagement.js
	    │   ├── trackService.js
	    │   ├── userService.js
	    │   └── util.js
	    ├── router
	    │   └── router.js
	    ├── stores
	    │   ├── controllerStore.js
	    │   ├── overlayStore.js
	    │   ├── playlistStore.js
	    │   ├── userStore.js
	    ├── App.vue
	    ├── main.css
	    └── main.js
	    
```

### Tools Required

You would require the following tools to develop and run the project:

- A text editor or an IDE (Recommended: _WebStorm_ or _Visual Studio Code_)
- _NodeJs_ v16.9.0 or later
- _Yarn_ for package management

### Installation

These installation steps are required to build the project from your local machine.

- Install NodeJs from this [_link_](https://nodejs.org/en/download/)
- Install Yarn through the [_npm package manager_](http://npmjs.org/):

  ```
  npm install --global yarn
  ```

  Check the version of Yarn by running:

  ```
  yarn --version
  ```

## Development

This section includes the development strategies, processes and contributions within the project.

### Sprint 1 Planning and Project Setup

#### Step 1 Project and repository preparation

- Create a new project with the IDE.
  - Integrating Yarn, Tailwind, etc.
  - Refactoring a package.json file.
- Setup [Netlify] for the project.
  ![The Netlify site overview for the production branch](img/netlify-site-overview.png 'Site Overview')
- Putting additional tools in the tech stack.
  - PostCSS: a transpiler that turns a special PostCSS plugin syntax into a Vanilla CSS
  - Autoprefixer: a plugin to parse CSS and add vendor prefixes to CSS rules using values from _Can I Use_.
  - Stylelint: a linter for set the CSS style rules.

#### Step 2 Work flow planning and choosing the topic

- Brainstorm the topic we want to practice and working on
- Chose a topic of music player app from 3 ideas including the split share app and restaurant recommendation app
  ![Top 3 topic we picked from the brainstorm session](img/topic-ideas.png 'Topic Ideas')
- Discussing how to contribute within the team.
  - Created the GitHub project for managing the task for contributors to pick their task.
    ![A todo board for organizing task within the team](img/github-projects-board.png 'Todo Board')
- Setup GitHub workflow for the future unit tests and linters optionally.
  ![Create unit test workflow for GitHub Actions](img/unit-test-workflow.png 'Unit Tests Workflow')

  For details now how everything has been implemented, refer the source code

### Sprint 2 Home page UI and Music Player

#### Step 1 Design the homepage for the application

- Finding some references for inspiration
- Drafting the homepage and some other pages for the future
  ![The first draft was paticipated by every contributors](img/first-draft.png 'The First Draft')
- Develop the design system for the whole project
  ![a music player component for reuse in the design](img/design-sys-music-player.png 'Music Player Component Design')
  ![Collection of color to use in the design](img/theme-and-colors.png 'Theme and Colors')
- Redesign in Figma
  ![Final design of the release v1.0.0](img/homepage-final.png 'The Redesigned Homepage')

#### Step 2 Coding the music player component and layout for the homepage

- Developing the music player algorithm in `dev` branch
  ![Some preview for the Vue source code](img/code-preview.png 'Code Preview')
- Layout for the homepage in `template` branch

### Sprint 3 Main Function for Homepage

#### Step 1 Refactor the code from previous sprint

- Changing to composition API
- Optimize the code, reduce redundancy, grouping the utility functions

#### Step 2 Planning the backlog for this sprint

![Feature in progress during sprint 3](img/sprint-3-backlog.png "Sprint 3 Todo list")

#### Step 3 Develop new features for the app

![Home page with many new features](img/sprint-3-final.png "Final Release of sprint 3")
- includes
  - carousel playlist
  - queuing system
  - shuffle song
  - drag-to-seek progress bar
  - choose and play music from trending list

### Sprint 4 Code Optimization, Bug fixing and Code Review

![UI of our app in sprint 4](img/sprint-4-final.png "Sprint 4 Final")

#### Step 1 Code optimize and refactoring
  - remove unnecessary code
  - merge redundant code

#### Step 2 Code Review for every group members

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

## Deployment

The `main` branch is automatically deployed to production on [geegie.netlify.app]

The `dev` branch is automatically deployed to preview the development on [geegie-dev.netlify.app]

This documentation also hosted on [Github Pages]

## Contributors

| Student ID  | Name                     | Email                      | Github Username |
|-------------|--------------------------|----------------------------|-----------------|
| 64130500066 | Phutawan Palakavong      | Phutawan.pala@kmutt.ac.th  | [pphtw]         |
| 64130500079 | Siripoom Kusonsong       | Siripoom.kuso@kmutt.ac.th  | [PhuMiZz]       |
| 64130500080 | Supapit Krawsaikom       | Supapit.kraw@kmutt.ac.th   | [supapitploy]   |
| 64130500105 | Banlearit Siriboon       | Banlearit.siri@kmutt.ac.th | [Banlearit]     |
| 64130500119 | Bowonwit Anothaisintavee | Bowonwit.anot@kmutt.ac.th  | [NewBww]        |

You can also see the complete [list of contributors][Contributors] who participated in this project.

See full contribution log [here](contribution.md)

## Authors

#### _Bowonwit Anothaisintavee_

- [Github](https://github.com/NewBww)

## Acknowledgments

This section can also be called as `Resources` or `References`

### Inspirations

- [Music Player Web App](https://dribbble.com/shots/18946599-Music-Player-Web-App) (Dribble)
- [Web Music Player Concept](https://dribbble.com/shots/19753283-Web-Music-Player-Concept) (Dribble)

[//]: # 'HyperLinks'
[GitHub Repository]: https://github.com/NewBww/PROJECT1-SEC-2-GeegieAndFriends
[GitHub Pages]: https://NewBww.github.io/PROJECT1-SEC-2-GeegieAndFriends
[Contributors]: https://github.com/NewBww/PROJECT1-SEC-2-GeegieAndFriends/graphs/contributors
[Netlify]: https://geegie.netlify.app
[geegie.netlify.app]: https://geegie.netlify.app
[geegie-dev.netlify.app]: https://geegie.netlify.app
[//]: # 'Contributors Links'
[pphtw]: https://github.com/pphtw
[PhuMiZz]: https://github.com/PhuMiZz
[supapitploy]: https://github.com/supapitploy
[Banlearit]: https://github.com/Banlearit
[NewBww]: https://github.com/NewBww
