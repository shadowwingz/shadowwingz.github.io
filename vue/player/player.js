var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
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
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                .then(function (response) {
                    that.musicUrl = response.data.data[0].url;
                }, function (err) {
                    console.log(err);
                });
        }
    }
})