import { Dispatch } from 'react';
import { TrackAction, TrackActionTypes } from '../../types/track';
import axios from 'axios';

export const fetchTracks = () => {

    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('https://reverb-server.herokuapp.com/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Помилка завантаження'})
        }

    }
  };
};
