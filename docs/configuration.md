# Amazing-Remake Documentation - 配置

以下配置说明均假定安装当前主题。部分配置说明参考原仓库 [README](https://github.com/removeif/hexo-theme-amazing/blob/master/README.md) 。绝大多数配置项均在本主题配置文件中配有英文注释。

**注意:** 部分配置项标有“Deprecated”。请尽可能禁用相关配置或使用替代。

## 配置文件优先级

安装主题后，为方便未来可能的配置迁移，建议在博客根目录下创建 `_config.amazingremake.yml` 文件，用以存储本主题的个性化配置。

**注意:** 由于本主题并非基于 Hexo 默认主题 landscape 开发， `_config.yml` 的默认配置内容并不能完全应用于本主题。若您的博客从其他主题迁移于此，请自行按照本主题配置项设置相关配置。

创建完成后，博客目录树内应含有至少三个配置文件：

- `_config.amazingremake.yml` ： 本主题的**用户**配置文件；
- `_config.yml` ： Hexo 的**默认**配置文件；
- `node_modules/hexo-theme-amazingremake/_config.yml` ： 本主题的**默认**配置文件。

以上配置文件的优先级由上而下依次递减，对于同键名**非空**配置项，优先级高的配置文件中的内容会覆盖优先级低的。

为避免各配置文件间的配置相互混淆，可以直接复制 `_config.yml` 的内容到 `_config.amazingremake.yml` ，此后所有配置的更改均在后者中完成。

**注意:** 未经额外说明，在覆盖配置时，若要关闭一些功能，不可直接注释相关配置 (因为 YAML 会认为相关配置项不存在，无法覆盖优先级低的配置) ，而应用空字符串 `''` 占位。例如，若 `_config.amazingremake.yml` 和 `node_modules/hexo-theme-amazingremake/_config.yml` 中分别有如下配置项：

`_config.amazingremake.yml` ：

```yml
funclist:
#   funcA:
#     settingA:
#       settingAA: 'somevar'
  funcB: ''
    # settingB:
    #   settingBB: 'somevar'
```

`node_modules/hexo-theme-amazingremake/_config.yml` ：

```yml
funclist:
  funcA:
    settingA:
      settingAA: 'somevar'
  funcB:
    settingB:
      settingBB: 'somevar'
```

Hexo 整合后的配置为：

```yml
funclist:
  funcA:
    settingA:
      settingAA: 'somevar'
  funcB: ''
```

继而使 `funcA` 相关配置保持默认并禁用 `funcB` 相关配置。

## 元数据

### 配置文件版本

目前是一个固定值。

```yml
version: 4.0.0
```

### 页面 Open Graph 元数据

启用 Hexo 的 Open Graph 机能。该机能基于 [Open Graph 协议](https://ogp.me/)，旨在帮助网页储存在社交网络中。 Hexo 对该协议的应用参见 [open_graph helper](https://hexo.io/docs/helpers.html#open-graph) 。

本主题目前支持的 Open Graph 对象及其配置项如下。 Hexo 已为部分配置项设置默认值，为可选项，不建议修改。

```yml
head:
  open_graph:
    title:          # (可选) 页面标题
    type:           # (可选) 页面类型
    url:            # (可选) 页面 URL
    image:          # (可选) 页面图片
    site_name:      # (可选) 站点名称
    author:         # (可选) 页面作者
    description:    # (可选) 页面描述
    twitter_card:   # (可选) Twitter 卡片类型
    twitter_id:     # Twitter ID
    twitter_site:   # Twitter 站点
    google_plus:    # Google+ 资料链接
    fb_admins:      # Facebook 管理员 ID
    fb_app_id:      # Facebook 应用程序 ID
```

### 结构化数据 (Structured data)

结构化数据可以便于 Google 搜索引擎获取页面上的信息。有关 Google 对这种数据的解释参见 [Understand how structured data works](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data) 。

本主题目前支持的结构化数据及其配置项如下。本主题部分配置项设置默认值，为可选项，不建议修改。

```yml
head:
  structured_data:
    title:        # (可选) 页面标题
    description:  # (可选) 页面描述
    url:          # (可选) 页面 URL
    author:       # (可选) 页面作者
    image:        # (可选) 页面图片 
```

### `<meta>` 元素

配置其他需要被插入在页面的 `<meta>` HTML 元素中的属性。支持插入多条 `<meta>` 元素。每条元素的属性的声明形如 `<attribute>=[value][;<attribute>=[value][...]]` 。例如：

```yml
head:
  meta:
    - 'name=theme-color;content=#123456'
    - 'test-attr='
```

本主题将在页面头部添加如下 HTML 元素：

```html
<meta name="theme-color" content="#123456">
<meta test-attr>
```

## 站点和主题总体

### 站点名称和作者

站点名称和作者的配置项为 Hexo 内置，并不位于本主题的默认配置文件中。若相关配置项在您的所有配置文件中均不存在，您可以自行添加。

相关配置项如下：

```yml
title: Hexo
author: John Doe
```

站点名称将会作为本站点主页的标题 (`<title>` 元素值) 。作者名将添加至页面底栏。如下图所示：

![底栏作者名](https://s4.ax1x.com/2022/02/09/H8mCXn.png)

### 主题风格

本主题基于 [Icarus](https://github.com/ppoffice/hexo-theme-icarus) 主题开发，后者支持两种主题风格： `default` 和 `cyberpunk` 。相关配置项如下：

```yml
variant: default
```

### 站点徽标和页面图标

站点徽标 (logo) 和页面图标 (favicon) 是两种不同的图片。

站点徽标在本主题中显示在两个位置：页面顶部导航栏的最左端和页面底部信息区的最顶端。如下图所示：

![站点徽标（导航栏）](https://s4.ax1x.com/2022/02/09/H8mplj.png)

![站点徽标（底部信息区）](https://s4.ax1x.com/2022/02/09/H8m96s.png)

相关配置项如下：

```yml
logo: http://example.com/logo.jpg  # URL
logo: /source/images/logo.jpg      # 博客内文件路径
```

页面图标在本主题中显示在浏览器标签页。如下图所示：

![页面图标（标签页）](https://s4.ax1x.com/2022/02/09/H8evtS.png)

相关配置项如下：

```yml
head:
  logo: http://example.com/favicon.jpg
  logo: /source/images/favicon.jpg
```

### RSS

此配置项设置站点的 RSS 的 `atom.xml` 文件路径。相关配置项如下：

```yml
head:
  rss: http://example.com/atom.xml
  rss: /source/rss/atom.xml
```

## 导航栏

导航栏位于页面顶部，包含 Hexo 博客系统和本主题的常用特殊页面和按钮。如下图所示：

![导航栏](https://s4.ax1x.com/2022/02/09/H8exfg.png)

### 菜单

本主题内置多个菜单项。相关配置项如下：

```yml
navbar:
  menu:
    Home: /                       # 主页
    Archives: /archives           # 归档
    Categories: /categories       # 分类
    Tags: /tags                   # 标签
    About: /about                 # 关于
    Album: /album                 # 相册
    Friend: /friend               # 友站
    Message: /message             # 留言
    Self-talking: /self-talking   # 碎碎念
    Music: /music                 # 音乐
    Media: /media                 # 影音
```

每个菜单项的键名为导航栏上元素的显示名称，键值为对应页面的 URL 相对于根的部分路径。若要移除部分菜单项，注释对应的配置项代码即可。

部分特殊页面的功能和具体配置将在后文予以说明。

### 链接

导航栏右侧除可能存在的搜索按钮和明暗模式切换按钮外，可以添加指向其他链接的图标。相关配置项如下：

```yml
navbar:
  links:
    Download on GitHub:
      icon: fab fa-github
      url: 'https://github.com/LittleYe233/hexo-theme-amazingremake'
```

默认值为一个指向本主题仓库的链接的图标，具体为 [Font Awesome](https://fontawesome.com/) 提供的 GitHub 图标。

可以在 `links` 键中继续添加键值，例如：

```yml
navbar:
  links:
    Button1:
      icon: fab fa-Icon1
      url: http://example.com/Button1
    Button2:
      icon: fab fa-Icon2
      url: http://example.com/Button2
```

## 底栏 (Footer)

底栏是页面底部的一块区域，用以显示部分统计数据、版权信息和一些功能性按钮等。如下图所示：

![底栏](https://s4.ax1x.com/2022/02/09/H8mSpQ.png)

### 链接

底栏右侧可以添加指向其他链接的图标。相关配置项如下：

```yml
footer:
  links:
    Creative Commons:
      icon: fab fa-creative-commons
      url: https://creativecommons.org/
    Attribution 4.0 International:
      icon: fab fa-creative-commons-by
      url: https://creativecommons.org/licenses/by/4.0/
    Download on GitHub:
      icon: fab fa-github
      url: https://github.com/LittleYe233/hexo-theme-amazingremake
```

### 版权信息

底栏可以添加支持 HTML 代码的版权信息。相关配置项如下：

```yml
footer:
  copyright: 'Copyright xxx<br>Copyright yyy'
```

**注意:** 为避免样式混淆，请尽可能避免将待显示文本等置于 HTML 元素中 (例如 `<div>Copyright</div>`) 。

### 站点建立时间

底栏可以添加站点的建立时间。相关配置项如下：

```yml
footer:
  website_start_time: 1995-12-17T13:24:00  # 推荐
  website_start_time: 1995/12/17 13:24:00
```

其中该键值需要能被 JavaScript 中 `Date` 对象的构造器 (`new Date()`) 解析。相关文档参见 [Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 。

同时该配置项在正确解析的情况下将会取其中的年份显示在作者名前。如上文图所示。

### 备案信息

底栏可以添加备案信息。目前仅支持跳转到[中华人民共和国工业和信息化部 ICP/IP 地址/域名信息备案管理系统](https://beian.miit.gov.cn/)。相关配置项如下：

```yml
footer:
  icp_licensing_no: 京ICP备04000001号
```

本主题将在页面底栏添加如下 HTML 元素：

```html
<span>&copy; <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备04000001号</a><br /></span>
```

## 文章

### 代码块

本主题的代码块功能依赖 [highlight.js](https://highlightjs.org/) 和 [clipboard.js](https://clipboardjs.com/) 。如下图所示：

![代码块](https://s4.ax1x.com/2022/02/09/H8mimq.png)

相关配置项如下：

```yml
article:
  highlight:
    enabled: true           # 控制是否启用
    theme: atom-one-light   # 高亮配色方案
    clipboard: true         # 控制是否启用剪贴板
    fold: unfolded          # 控制默认是否折叠
```

其中各配置项的详情和可取值如下：

**`enabled` ：**

- `true` ：启用
- `false` ：禁用

**注意:** `enabled` 设置为 `false` 将禁用代码块有关的所有功能 (如剪贴板) 。

**`theme` ：**

参见 [highlightjs/highlight.js/src/styles](https://github.com/highlightjs/highlight.js/tree/main/src/styles) 。该值须与该文件夹内 CSS 文件名对应。例如：

```yml
article:
  highlight:
    theme: atom-one-light
    theme: base16/github
```

**`clipboard` ：**

- `true` ：启用
- `false` ：禁用

**`fold` ：**

- `folded` ：折叠
- `unfolded` ：展开
- `''` ：禁用

此外，本主题目前支持为代码块添加标题和链接。如下图所示：

![代码块标题和链接](https://s4.ax1x.com/2022/02/09/H8mk7V.png)

目前常见的 Markdown 规范 (如 [CommonMark](https://commonmark.org/)) 中并无对代码块标题和链接的限定。本主题利用 Hexo 的 [tag plugins](https://hexo.io/docs/tag-plugins#Code-Block) 实现。如上图的渲染效果对应的源代码如下：

```ejs
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

```ejs
{% codeblock .compact http://underscorejs.org/#compact Underscore.js %}
.compact([0, 1, false, 2, ‘’, 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

### 阅读时长和字数

本主题可在主页和文章页的标题上方添加估计阅读时长和文章总字数。相关配置项如下：

```yml
article:
  readtime: true
```

### 版权信息块

本主题可在文章正文末添加版权信息块。如下图所示：

![版权信息块](https://s4.ax1x.com/2022/02/09/H8mF00.png)

相关配置项如下：

```yml
article:
  licenses:
    Creative Commons:
      icon: fab fa-creative-commons
      url: https://creativecommons.org/
    Attribution:
      icon: fab fa-creative-commons-by
      url: https://creativecommons.org/licenses/by/4.0/
    Noncommercial:
      icon: fab fa-creative-commons-nc
      url: https://creativecommons.org/licenses/by-nc/4.0/
```

## 侧边栏

本主题在页面的左右两侧设置了侧边栏。侧边栏的功能依赖于 Icarus 主题。

### 滚动

侧边栏可以设置不随页面滚动而移动，从而固定在页面顶部，除非页面达到最底端。相关配置项如下：

```yml
sidebar:
  left:
    sticky: true
  right:
    sticky: false
```

键值可取值如下：

- `true` ：侧边栏不随页面滚动而移动
- `false` ：侧边栏随页面滚动而移动

### 挂件

侧边栏可以添加挂件。有关挂件的更多信息参见 [Icarus 用户指南 - 挂件](http://ppoffice.github.io/hexo-theme-icarus/Widgets/icarus%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97-%E6%8C%82%E4%BB%B6/)。相关配置项如下：

```yml
widgets:
  -
    position: left      # 设置出现位置 (左侧或右测)
    type: Type1         # 挂件类型
    OtherSettings: ''   # 其他设置
  -
    position: right
    type: Type2
    OtherSettings: ''
```

目前本主题支持的挂件如下文所述。

### 目录

相关配置项如下：

```yml
widgets:
  -
    position: left
    type: toc
    # 是否显示序号
    index: false
```

需要显示目录的页面前 Front-matter 需要设置 `toc: true` 。

### 资料卡 (profile)

如下图所示：

![资料卡](https://s4.ax1x.com/2022/02/09/H8mEkT.png)

相关配置项如下：

```yml
widgets:
  -
    position: left
    type: profile
    # 作者名
    author: LittleYe233
    # 头衔
    author_title: 在这世间 有一个被称为「你」的奇迹
    # 位置
    location: China
    # 头像 (优先于 `gravatar` 配置项)
    avatar: https://github.com/LittleYe233.png
    # 头像是否圆角
    avatar_rounded: true
    # Gravatar 邮箱
    gravatar:
    # 关注按钮链接 
    follow_link: https://github.com/LittleYe233
    # 社交媒体按钮链接
    social_links:
      # 图标链接
      GitHub:
        icon: fab fa-github
        url: https://github.com/LittleYe233
      # 文字链接
      GitHub: https://github.com/LittleYe233
    # 是否显示一言句子
    has_hitokoto: true
```

### 友链

相关配置项如下：

```yml
widgets:
  -
    position: left
    type: links
    links:
      Hexo: https://hexo.io
```

### 最新评论

相关配置项如下：

```yml
widgets:
  -
    position: right
    type: latest_comment
```

### 最近投稿

相关配置项如下：

```yml
widgets:
  -
    position: right
    type: recent_posts
```

### 类别

相关配置项如下：

```yml
widgets:
  -
    position: right
    type: categories
```

### 归档

相关配置项如下：

```yml
widgets:
  -
    position: right
    type: archives
```

### 标签

相关配置项如下：

```yml
widgets:
  -
    position: right
    type: tags
```

### 订阅邮箱

**注意:** 本挂件被标记为 **Deprecated** 。请尽快禁用或使用替代挂件。原因参见 [Icarus 用户指南 - 挂件/Google Feedburner](https://ppoffice.github.io/hexo-theme-icarus/Widgets/icarus%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97-%E6%8C%82%E4%BB%B6/#Google-Feedburner) 。

本挂件依赖于 [Google Feedburner](https://feedburner.google.com/) 。相关配置项如下：

```yml
widgets:
  -
    position: right
    type: subscribe_email
    # 输入框占位符
    description: ''
    # Feedburner ID
    feedburner_id: ''
```

### follow.it

[follow.it](https://follow.it/) 是 Feedburner 的替代。有关 follow.it 的更多文档参见 [Icarus 用户指南 - 挂件/follow.it](https://ppoffice.github.io/hexo-theme-icarus/Widgets/icarus%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97-%E6%8C%82%E4%BB%B6/#follow-it) 。相关配置项如下：

```yml
widgets:
  -
    position: right
    type: followit
    description: ''
    # 由 follow.it 提供
    action_url: ''
    # 由 follow.it 提供
    verification_code: ''
```

## 插件

本主题的插件功能依赖于 Icarus 主题。有关插件的更多信息参见 [Icarus 用户指南 - 插件](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/)。

## CDN

考虑到中国大陆访问部分开源资源速度缓慢或失败，本主题可以配置 CDN 用以增强开源资源可访问性。相关配置项如下：

```yml
providers:
  # JavaScript 和 CSS 资源 CDN 的名称或 URL 模板
  cdn: loli
  # 字体资源 CDN 的名称或 URL 模板
  fontcdn: loli
  # Font Awesome 字体图标资源 CDN 的名称或 URL 模板
  iconcdn: loli
  # 自定义 CDN 的 URL 前缀 (优先级最高)
  my_cdn_pre: https://cdn.jsdelivr.net/gh/removeif/removeif-demo@v1.0.8/
```

本主题 CDN 配置的机制是：先尝试用自定义前缀的 CDN 替换，再尝试使用内置 CDN 。

内置 CDN 的可取值如下：

**JavaScript 和 CSS ：**

- cdnjs.com (`cdnjs`)
- jsDelivr (`jsdelivr`)
- UNPKG (`unpkg`)
- loli.net (`loli`)

**字体：**

- Google Fonts (`google`)
- loli.net (`loli`)

**Font Awesome 字体图标：**

- FontAwesome 5 (`fontawesome`)
- loli.net (`loli`)

有关自定义 CDN 的 URL 模板的更多信息，参见 [Icarus用户指南 - CDN提供商/自定义CDN提供商](https://ppoffice.github.io/hexo-theme-icarus/Configuration/icarus%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97-cdn%E6%8F%90%E4%BE%9B%E5%95%86/#%E8%87%AA%E5%AE%9A%E4%B9%89CDN%E6%8F%90%E4%BE%9B%E5%95%86)。

## 杂项

### 网易云音乐

本主题可以在页面底部 (非 footer) 设置网易云音乐播放器。此功能依赖于 [APlayer](https://github.com/DIYgod/APlayer) 和 [MetingJS](https://github.com/metowolf/MetingJS) 。相关配置项如下：

```yml
side_music_netease_id: ''
```

### Live 2D 立绘

本主题可以在页面右下部添加 Live 2D 可交互立绘。相关配置项如下：

```yml
has_live_2D_switch: true
```

### pjax 插件

本主题支持网页部分加载 (避免网易云音乐播放器被刷新) 。此功能依赖于 [defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax) 。相关配置项如下：

```yml
use_pjax: true
```
