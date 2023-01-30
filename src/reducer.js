import { defaultVolume } from './contants/controller';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_CURRENT = 'SET_CURRENT';
export const SET_USER = 'SET_USER';
export const SET_PLAYLIST = 'SET_PLAYLIST';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_DURATION = 'SET_DURATION';
export const SET_CURRENTTIME = 'SET_CURRENTTIME';

export const initState = {
  isLoggedin: false,
  token: '',
  current: '',
  user: {},
  player: {
    playing: false,
    audioElement: null,
    duration: 0,
    currentTime: 0,
    volume: defaultVolume,
    track: {},
    id: 0,
  },
  playlist: { loading: true, name: '', cover: null, tracks: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      if (action.token) {
        return { ...state, isLoggedin: true, token: action.token };
      } else {
        return { ...state, isLoggedin: false, token: action.token };
      }
    case SET_CURRENT:
      return { ...state, current: action.key };
    case SET_USER:
      return { ...state, user: action.user };
    case SET_PLAYER:
      return { ...state, player: { ...state.player, ...action.player } };
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          ...action.playlist,
        },
      };
    case SET_VOLUME:
      return { ...state, player: { ...state.player, volume: action.volume } };
    case SET_DURATION:
      return {
        ...state,
        player: { ...state.player, duration: action.duration },
      };
    case SET_CURRENTTIME:
      return {
        ...state,
        player: {
          ...state.player,
          audioElement: {
            ...state.player.audioElement,
            currentTime: action.currentTime,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
