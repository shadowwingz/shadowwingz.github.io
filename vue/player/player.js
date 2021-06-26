var app = new Vue({
    el: "#player",
    data: {
        query: "", // 查询歌曲关键字
        musicList: [], // 歌曲列表
        musicUrl: "", // 播放歌曲链接
        cover: "images/cover.png", // 封面
        hotComments: [], // 歌曲热门评论
        isPlaying: false, // 正在播放
    },
    methods: {
        searchMusic: function () {
            const that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    that.musicList = response.data.result.songs;
                    console.log(response)
                }, function (err) {
                    console.log(err);
                })
        },
        /**
         * 从歌曲列表选择音乐播放
         *
         * @param musicId 歌曲 id
         */
        playMusic: function (musicId) {
            const that = this;
            // 播放音乐
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                .then(function (response) {
                    that.musicUrl = response.data.data[0].url;
                }, function (err) {
                    console.log(err);
                });
            // 获取封面
            axios.get('https://autumnfish.cn/song/detail?ids=' + musicId)
                .then(function (response) {
                    console.log(response.data.songs[0].al.picUrl);
                    that.cover = response.data.songs[0].al.picUrl;
                }, function (err) {
                    console.log(err);
                });
            // 获取歌曲热门评论
            axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
                .then(function (response) {
                    console.log(response)
                    that.hotComments = response.data.hotComments;
                }, function (err) {
                    console.log(err);
                });
        },
        /**
         * 音乐播放回调监听
         */
        play: function () {
            this.isPlaying = true;
        },
        /**
         * 音乐暂停回调监听
         */
        pause: function () {
            this.isPlaying = false;
        }
    }
})