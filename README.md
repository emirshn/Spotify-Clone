# Spotify Main Page Clone
Spotify main page clone for learning tailwind.css with vue.js and vuex and of course spotify.api. I used axios for api things and i stored everything in vuex.
Most of the page is placeholder and doesn't have any functionality.

For installing use npm install and npm run serve.

You can login to your spotify account from landing page. (You need to fill empty info in .env file!). After press to "to main page".
There is currently problems with these parts:
- If you press button before logining to spotify, it will doesnt work.
- If you refresh the page you need to login again from auth page.
![image](https://user-images.githubusercontent.com/64266261/221427848-97d01a95-d3f6-4885-ab2f-93b832c89a7c.png)

# Features:
1. You can see your playlists, top tracks, recent tracks and followed users in main part. (I can add other things here but for showing these 4 is enough).
2. You can also see your playlists in left part (it is a scrollbar)
3. Main playbar is working you can play, pause, skip to next or previous songs, it will update accordingly. (You need a spotify premium for these feature).
- Only song name, image and artist will update. Others are placeholder but i can add them later.
- There is a bug in async so you need to click more than once to update correctly. I am trying to fix this problem currently.

# Spotify page
![image](https://user-images.githubusercontent.com/64266261/221427927-a3fa9779-1469-4ffc-8e96-ea7db51264bf.png)

![image](https://user-images.githubusercontent.com/64266261/221428330-0418c905-9c4f-4426-b237-3b04dcb89398.png)

![image](https://user-images.githubusercontent.com/64266261/221428344-e789b07b-5cd3-4a9b-9f3a-e3f7c8ced96b.png)
