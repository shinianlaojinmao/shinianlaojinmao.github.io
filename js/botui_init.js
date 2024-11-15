function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, 欢迎光临金毛狗😊"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是金毛狗😄"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我shinianlaojinmao😋"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于金毛狗!😃",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 600,
        content: "🎉🎉🎉🎉🎉🎉"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。金毛狗是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function() {
        botui.message.add({
          delay: 15000,
          content: "起这个名字是因为想到了金毛狗。"
        }).then(function() {
          botui.message.add({
            delay: 5000,
            content: "分类也有一点我的恶趣味在。👀"
          }).then(function() {
            botui.message.add({
              delay: 8000,
              content: "比如巧克力是Ubuntu的教程，棉花糖是windows的教程，糖葫芦就是各种通用教程啦！🎉"
            }).then(function() {
              botui.message.add({
                delay: 5000,
                content: "泡泡糖是个人日记哦，流水账一样的，不要看，很羞耻的。😶"
              }).then(function() {
                botui.message.add({
                  delay: 4000,
                  content: "。"
                }).then(function() {
                  botui.action.button({
                    delay: 1100,
                    action: [{
                      text: "为什么叫十年老狗？🤔",
                      value: "why-mashiro"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "诶？shinianlaojinmao是我的英文名啊😏，emm🤔，是因为拼音金毛狗与十年老狗。"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "😲，那英文名为什么叫Akilar呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: "金毛狗小店 "
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "灵感来自于刀剑神域~"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？👀",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "只是一介无名小卒而已^_^"
        })
      })
    }
}