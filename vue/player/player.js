var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList: []
    },
    methods: {
        searchMusic: function () {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    that.musicList = response.data.result.songs;
                    console.log(response)
                }, function (err) {
                })
        }
    }
})