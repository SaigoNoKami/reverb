import React from 'react';

import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow, AndroidSharp} from "@material-ui/icons";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
import axios from "axios";


interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };


    return (
        <Card className={styles.track} >
            <IconButton onClick={play}>
                {!active
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <IconButton onClick={() => router.push('/tracks/' + track._id)}>
            <AndroidSharp/>
            </IconButton>
            <img width={70} height={70} src={'http://diw4nk35u3ll.cloudfront.net/' + track.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={async()=>  await axios.delete('https://reverb-server.herokuapp.com/tracks/' + track._id )} style={{marginLeft: 'auto'}} >
                <Delete/>
            </IconButton>
        </Card>
        
    );
};
export default TrackItem;

