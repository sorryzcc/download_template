const sheets = [
  {
    // 表名
    sheetName:'sheet1',
    // 导出的数据
    data:[
      {
        id: "1292286",
        TextChangeTag: "文本变动信息",
        PO: "文本负责人",
        InGameKey: "客户端读取的key",
        Origin:"原文",
        Used:"文本状态",
        Version:"版本信息",
        Region:"文本所属区域",
        Platform:"文本所属平台",
        Context:"文本场景信息",
      }
    ],
    // 列配置
    fields:[
      {
         // 表头名
        colName: '新增、变更、废弃',
        // 取值
        dataKey: 'TextChangeTag',
        // 列宽（字符数）
        colWidth: 17.17
      },
      {
        // 表头名
       colName: '谁的文本谁负责',
       // 取值
       dataKey: 'PO',
       // 列宽（字符数）
       colWidth: 15
     },
      {
        // 表头名
       colName: '',
       // 取值
       dataKey: 'InGameKey',
       // 列宽（字符数）
       // colWidth: 10
     },
      {
        // 表头名
       colName: '',
       // 取值
       dataKey: 'Origin',
       // 列宽（字符数）
       // colWidth: 10
     },
     {
       colName: 'NotUsed: 曾经使用的，现在废弃了\nNormal: 正常使用的\nTemp：未合意或者临时测试用，不翻译',
       dataKey: 'Used',
      colWidth: 36.42
      },
      {
        // 表头名
       colName: '',
       // 取值
       dataKey: 'Origin',
       // 列宽（字符数）
       colWidth: 12.83
     },
      {
        // 表头名
       colName: '',
       // 取值
       dataKey: 'Version',
       // 列宽（字符数）
       // colWidth: 10
     },
      {
        // 表头名
       colName: 'All_Text\nCN_only\nGlobal_only',
       // 取值
       dataKey: 'Region',
       // 列宽（字符数）
       colWidth: 12.83
     },
      {
        // 表头名
       colName: 'All_Platforms\nSP_Only\nNX_Only',
       // 取值
       dataKey: 'Platform',
       // 列宽（字符数）
       colWidth: 13.92
     },
      {
        // 表头名
       colName: '（How - 如何复现, Where-在哪里使用, What - 用来做什么的）\n1. 运营活动要写明：开启时间，关闭时间，开启条件。\n2. 玩法要写明：开启条件\n3. 全部文本都要写明对应的Backlog/MCAT/JIRA单号。对应首字母+单号的格式，如：B1111、M2222、J3333。需要放在最前面。\n4. 文本对应版本的发布时间\n5. 如果使用变量的，如{0}，{1}，需要注明代表的是什么。\n6. 如果是文本变更的，需要额外附加2个信息：\n变更原因：\n变更内容：\n7. 禁止使用字符：“【】和[]”',
       // 取值
       dataKey: 'Context',
       // 列宽（字符数）
       colWidth: 120.17
     },
    ]
  }
  // ...其他表的配置
];
return sheets;