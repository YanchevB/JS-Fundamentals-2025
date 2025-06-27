function createSongPlaylist(inputArr) {
  let numberOfSongs = inputArr.shift();
  let allSongs = [];
  let neededTypeList = inputArr.pop();
  
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < numberOfSongs; i++) {
    let songInfo = inputArr[i].split('_');
    let [playlist, songName, duration] = songInfo;
    let song = new Song(playlist, songName, duration);
    allSongs.push(song);
  }


  if (neededTypeList !== 'all') {
    allSongs = allSongs.filter(s => s.typeList === neededTypeList);
  }

  let songNames = allSongs.map(s => s.name);
  
  for (let song of songNames) {
    console.log(song);
  }
}

createSongPlaylist([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite'
]);

createSongPlaylist([4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater'])

createSongPlaylist([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all'])