Page({
    data: {
        path: '',
        query: '',
        fullUrl: null
    },

    onLoad: function(opt) {
        for (var prop in opt) {
            if (opt.hasOwnProperty(prop)) {
                if (prop === 'url') {
                    this.setData({path: opt[prop]});
                } else {
                    this.setData({query: this.data.query + prop + '=' + opt[prop] + '&'});
                }
            }
        }
        if (this.data.query.length == 0) {
            this.setData({fullUrl: this.data.path});
        } else {
            this.setData({fullUrl: this.data.path + '?' + this.data.query.substr(0, this.data.query.length-1)});
        }
        // console.log(this.data.fullUrl);
    }

});