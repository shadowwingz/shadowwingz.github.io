var app = new Vue({
    el: "#player",
    data: {
        query: "", // 查询歌曲关键字
        musicList: [], // 歌曲列表
        musicUrl: "", // 播放歌曲链接
        cover: "images/cover.png", // 封面
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
        },

    }
})