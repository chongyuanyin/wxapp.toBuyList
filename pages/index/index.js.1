//index.js
//获取应用实例
// var urlUtil = require('../../utils/urlUtil.js');
var util = require('../../utils/util.js');
var app = getApp();
// console.log(urlUtil);
Page ({
  data: {
    items:[],
    // items: [
    //   {
    //     name: 'Iris除螨吸尘器',
    //     link: 'https://detail.tmall.com/item.htm?id=44987868904&spm=a1z09.2.0.0.3mUmi8&_u=b1sgk4814e4'
    //   },
    //   {
    //     name: '安野光雅《走进奇妙的数学世界》',
    //     link: 'http://product.dangdang.com/22914275.html'
    //   },
    // ],
    openAddItemView: false,
    upButtonText: 'U',
    downButtonText: 'D',
  },
  curInputValue: null,
  origInputValue: null,


  onLoad: function() {

    var items = wx.getStorageSync("items") || [];
    
    for (var i=0; i<items.length; i++) {
      items[i].inputClass = 'disabledBorderedItemInfo';
      items[i].inputDisabled = true;
      items[i].inputTapFunction = 'navigateToUrl';
      items[i].editButtonText = 'edit';
      items[i].editButtonTapFunction = 'editItem';
      items[i].delButtonText= 'delete';
      items[i].delButtonTapFunction = 'deleteItem';
    }

    this.setData({
      items: items
    });

    // console.log(this.data.items);
  },

  navigateToUrl: function(e) {
    var index = e.target.id.slice(4);
    var targetUrl = this.data.items[index].link;
    var query = util.formatLinkToQuery(targetUrl);

    // console.log('../item/item?' + query);
    wx.navigateTo({
      url: '../item/item?' + query,
    });
  },

  inputItem: function(e) {
    curInputValue = e.detail.value;
  },

  inputNewName: function(e) {
    newItemName = e.detail.value;
  },

  inputNewLink: function(e) {
    newItemLink = e.detail.value;
  },

  showAddInfo: function() {
    if (this.data.openAddItemView) {
      this.setData({
        openAddItemView: false,
      });
    } else {
      this.setData({
        openAddItemView: true
    });
    }
    
  },

  addItem: function(e) {
    var newItems = this.data.items;
    var newItem = {
      name: newItemName,
      link: newItemLink,
      inputClass: 'disabledBorderedItemInfo',
      inputDisabled: true,
      inputTapFunction: 'navigateToUrl',
      editButtonText: 'edit',
      editButtonTapFunction: 'editItem',
      delButtonText: 'delete',
      delButtonTapFunction: 'deleteItem'
    };

    newItems.unshift(newItem);
    // console.log("latest: ");
    // console.log(newItems);

    this.setData({
      items: newItems,
      newItemName: null,
      newItemLink: null
    });

    this.setData({openAddItemView: false});

    wx.setStorage({
      key: "items",
      data: this.data.items
    });
  },

  editItem: function(e) {
    // console.log("try to edit an item");

    var index = e.target.id.slice(4);

    var newItems = this.data.items;
    newItems[index].inputClass = 'borderedItemInfo';
    newItems[index].inputDisabled = false;
    newItems[index].inputTapFunction = '';
    newItems[index].editButtonText = 'save';
    newItems[index].editButtonTapFunction = 'saveItem';
    newItems[index].delButtonText= 'cancel';
    newItems[index].delButtonTapFunction = 'cancelEdit';
    this.setData({
      items: newItems
    });
    
    // console.log(this.data.items);
  },

  saveItem: function(e) {
    // console.log("save an updated item");

    var index = e.target.id.slice(4);

    var newItems = this.data.items;
    if (curInputValue != null) {
      newItems[index].name = curInputValue;
    }
    newItems[index].inputClass = 'disabledBorderedItemInfo';
    newItems[index].inputDisabled = true;
    newItems[index].inputTapFunction = 'navigateToUrl';
    newItems[index].editButtonText = 'edit';
    newItems[index].editButtonTapFunction = 'editItem';
    newItems[index].delButtonText= 'delete';
    newItems[index].delButtonTapFunction = 'deleteItem';
    this.setData({
      items: newItems
    });

    wx.setStorage({
      key: "items",
      data: this.data.items
    });
    // console.log(this.data.items);
  },

  deleteItem: function(e) {
    // console.log("delete an item");

    var index = e.target.id.slice(6);

    var newItems = [];
    var newInd = 0;
    for (var i=0; i<this.data.items.length; i++) {
      if (i != index) {
        newItems[newInd] = this.data.items[i];
        newInd++;
      }
    };

    this.setData({
      items: newItems
    });

    wx.setStorage({
      key: "items",
      data: this.data.items
    });
    // console.log(this.data.items);
  },

  cancelEdit: function(e) {
    // console.log("give up editing the item");

    var index = e.target.id.slice(6);

    var newItems = this.data.items;
    newItems[index].name = this.data.items[index].name;
    // console.log(newItems[index].name);
    newItems[index].inputClass = 'disabledBorderedItemInfo';
    newItems[index].inputDisabled = true;
    newItems[index].inputTapFunction = 'navigateToUrl';
    newItems[index].editButtonText = 'edit';
    newItems[index].editButtonTapFunction = 'editItem';
    newItems[index].delButtonText= 'delete';
    newItems[index].delButtonTapFunction = 'deleteItem';

    this.setData({
      items: newItems
    });

    curInputValue = null;
  },

  moveUp: function(e) {
    var index = parseInt(e.target.id.slice(2));
    
    var newItems = [];

    if (index == 0) {
      return;
    }
    for (var i=0; i<this.data.items.length; i++) {
      if (i === index -1) {
        newItems[i] = this.data.items[index];
        newItems[index] = this.data.items[i];
      } else if (i === index) {
        //do nothing as it's already handled in the last loop
      } else {
        newItems[i] = this.data.items[i];
      }
    }

    this.setData({
      items: newItems
    });

    wx.setStorage({
      key: "items",
      data: this.data.items
    });
  },

  moveDown: function(e) {
    var index = parseInt(e.target.id.slice(4));
    
    var newItems = [];

    if (index == this.data.items.length - 1) {
      return;
    }
    for (var i=0; i<this.data.items.length; i++) {
      if (i === index) {
        newItems[i] = this.data.items[index + 1];
        newItems[index + 1] = this.data.items[i];
      } else if (i === index + 1) {
        //do nothing as it's already handled in the last loop
      } else {
        newItems[i] = this.data.items[i];
      }
    }

    this.setData({
      items: newItems
    });

    // wx.setStorage({
    //   key: "items",
    //   data: this.data.items
    // });
  }


});
