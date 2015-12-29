angular.module('starter.services', [])

.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    title: '全市建设领域清欠工作会议召开',
    time: '2015-01-01',
    channel: '新闻中心',
    content: '25日，全市建设领域清欠工作会议召开。市委常委、政法委书记章壮钧，副市长孙卫军出席会议。',
    img: 'img/ben.png'
  }, {
    id: 1,
    title: '全市建设领域清欠工作会议召开1',
    time: '2015-01-01',
    channel: '新闻中心',
    content: '25日，全市建设领域清欠工作会议召开。市委常委、政法委书记章壮钧，副市长孙卫军出席会议。',
    img: 'img/max.png'
  }, {
    id: 2,
    title: '全市建设领域清欠工作会议召开2',
    time: '2015-01-01',
    channel: '新闻中心',
    content: '25日，全市建设领域清欠工作会议召开。市委常委、政法委书记章壮钧，副市长孙卫军出席会议。',
    img: 'img/adam.jpg'
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(chat) {
      items.splice(items.indexOf(chat), 1);
    },
    get: function(newsId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(newsId)) {
          return items[i];
        }
      }
      return null;
    }
  }
});
