/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxcf67f3d9adb4a5ee',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9e2557355977f8e324e2c9460699c766',

  PROVINCE: '江苏',
  CITY: '张家港',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的丹妮公主，早上好',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'odw4z5yRzbbLxCZ1l6dHo8vqRwX0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Ry4QDBR_kcxoKShzCsVUEUo1A3ZbRmIc6NXkhFjfJ60',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '07-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2000', date: '08-25',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '06-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-06-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-06-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	Ry4QDBR_kcxoKShzCsVUEUo1A3ZbRmIc6NXkhFjfJ60',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxcf67f3d9adb4a5ee',
    }
  ],

}

module.exports = USER_CONFIG

