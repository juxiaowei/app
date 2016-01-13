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
    time: '2015-01-02',
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
})

.factory('Channel', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var xwzx = [{
    channel_id: 0,
    channel_code: 'jrjr',
    channel_name: '今日句容',
  },{
    channel_id: 1,
    channel_code: 'bmdt',
    channel_name: '部门动态',
  },{
    channel_id: 2,
    channel_code: 'xzdt',
    channel_name: '乡镇动态',
  },{
    channel_id: 3,
    channel_code: 'tzgg',
    channel_name: '通知公告',
  }];

  var charm = [{
    channel_id: 0,
    channel_code: 'csgk',
    channel_name: '城市概况',
  },{
    channel_id: 1,
    channel_code: 'jjfz',
    channel_name: '经济发展',
  },{
    channel_id: 2,
    channel_code: 'shsy',
    channel_name: '社会事业',
  },{
    channel_id: 3,
    channel_code: 'tsncp',
    channel_name: '特色农产品',
  },{
    channel_id: 4,
    channel_code: 'shly',
    channel_name: '生活旅游',
  }];

  var xxgk = [{
    channel_id: 0,
    channel_code: 'leard',
    channel_name: '政府领导',
  },{
    channel_id: 1,
    channel_code: 'bmdt',
    channel_name: '政府工作',
  },{
    channel_id: 2,
    channel_code: 'xzdt',
    channel_name: '人事信息',
  },{
    channel_id: 3,
    channel_code: 'tzgg',
    channel_name: '政府文件',
  }];

  return {
    allNewsChannel: function(a) {
      return xwzx;
    },
    allCharmChannel: function(a) {
      return charm;
    },
    allXxgkChannel: function(a) {
      return xxgk;
    }
  }
});
