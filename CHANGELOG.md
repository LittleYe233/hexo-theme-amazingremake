# Amazing-Remake - 更新日志和发布说明

本文件的格式基于 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) 。

考虑到一些版本控制系统可能会依照惯例读取本文件的一些区块 (section) ，文件的部分标识 (如“Unreleased”) 仍使用英文。

## [1.3.0] - 2022-12-6

### Added

- [[76cf2e6]] 添加 Twikoo 评论插件系统支持。

### Changed

- [[a43f7ec]] 更改更新日志链接样式。

### Fixed

- [[416aa21]] 修复目录挂件超出页面的问题。([@NaughtyChas])

## [1.2.1] - 2022-03-02

### Fixed

- [[071689f]] 修复 follow.it 挂件验证码未被渲染的问题。

## [1.2.0] - 2022-03-02

此处首次添加“Not Completed“部分，表示已经有对应提交但因其他原因未能实现预计功能。

### Added

- [[840da4a]] 添加 follow.it 挂件的翻译；
- [[184fa48]] 配置文件挂件配置块添加 `show_mode` 配置项。

### Changed

- [[7fae5ac]] 更改资料卡头像等 HTML 元素的悬浮动画；
- [[28df88b]] 升级 MathJax 版本至 v3 。

### Removed

- [[2cff4e0]] 移除 MathJax 行内公式定界符“\\(”和“\\)”。

### Deprecated

- [[a000789]] 移除 Google Feedburner 的配置项。

### Not Completed

- [[8cfcb5d]] 试图恢复 KaTeX 支持。

## [1.1.0] - 2022-02-20

### Changed

- [[5a5e6b9]] 重设 `footer_registered_no` 配置项位置并增加跳转地址配置项；
- [[b0a7cbf]] 重设 `footer_copyright_dsec` 配置项位置；
- [[dfb1c62]] 重设 `website_start_time` 配置项位置。

### Fixed

- [[ce8dd60]] 修复禁用评论后主页热门推荐仍存在的问题。

## [1.0.0] - 2022-02-09

此为本主题的第一个正式版。代码有较大改动。

### Dependency-related

- [[bab4599]] **(BREAKING CHANGE)** 升级 Node 和依赖包。

### Changed

- [[2e4ccc0] [05137b0] [84d3f3a]] 重写主题配置文件，修改注释，统一化代码风格；
- [[670220c]] 增加 JSON Schema 对挂件配置项的进一步支持；
- [[5ab43e0] [2acb7cf]] 优化代码，修改底栏链接；
- [[d6968ee]] 更新完善文档，重建文档结构。

### Removed

- [[530fe36]] 移除 Google AdSense 插件残留文件。

### Deprecated

- [[84d3f3a]] 部分配置项将会被移动至其他位置。
  - `search` -> `plugins.search` ；
  - `comment` -> `plugins.comment` ；
  - `donates` -> `plugins.donates` ；
  - `share` -> `plugins.share` ；
  - [[b0a7cbf]] `footer_copyright_dsec` -> `footer.copyright` ；
  - [[dfb1c62]] `website_start_time` -> `footer.website_start_time` ；
  - [[5a5e6b9]] `footer_registered_no` -> `footer.icp_licensing_no` ；
  - `side_music_netease_id` -> `plugins.side_netease_music` ；
  - `busuanzi_only_count` -> `plugins.busuanzi.only_count` 。
  
  部分新配置项尚未实现，请保持为空。具体改动以实际提交为准。

## [0.4.0] - 2022-02-06

### Added

- [[cf47b2b]] 配置文件 `article.highlight` 配置块增加启停控制选项。

### Removed

- [[b34d0e9]] 移除 Google AdSense 插件。

### Changed

- [[b34d0e9]] 修改英文翻译。

## [0.3.0] - 2022-02-06

### Added

- [[a72b886]] 配置文件 `comment` 配置块增加启停控制选项；
- [[84ffc7c]] 配置文件 `donates` 配置块增加启停控制选项；
- [[6a93424]] 配置文件 `share` 配置块增加启停控制选项。

### Changed

- [[312cb3e]] 更新文档；
- [[44674f8]] 修正 NPM 包描述；
- [[4bf3fdf]] 修改英文翻译。

### Deprecated

- 将移除 Google AdSense 组件。

## [0.2.1] - 2022-02-02

### Changed

- [[25fb961]] 重新初始化主题配置文件；
- [[56cf143]] 更新文档。

### Fixed

- [[ea79856]] 修复 Live2D 立绘被文章版权信息框遮盖的问题。

## [0.2.0] - 2022-02-02

本更新对上一版本的初始化进行部分修正。

### Added

- [[51e9334]] 侧边栏音乐控件可随博客亮暗模式更换配色方案。

### Changed

- [[18a415f]] 更改 NPM 包描述；
- [[6ea336a]] 更新文档；
- [[86db4e7]] 更改开发环境配置；
- [[436aef8]] 重新初始化主题配置文件。

## [0.1.0] - 2022-01-30

本更新从原主题代码仓库分支，并作必要的初始化。主题核心代码没有更改。

### Added

- 添加更新日志 [CHANGELOG.md](/CHANGELOG.md) 。

### Changed

- 更改开发环境配置。

[76cf2e6]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/76cf2e69dc3929d05b2203a609171ae0f2a1ddac
[416aa21]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/416aa21f82270d041f516fd6be5221caf7da7d5f
[a43f7ec]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/a43f7ec7a0b86e803db8d64f9340d86fb7a3e486
[071689f]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/071689f2379eee8b6f8e72bcf7854af8ceae5e5d
[840da4a]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/840da4a0768dc94bc67ed2bda4781edafe62e7d7
[184fa48]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/184fa489f8b9b70fcda0d00c7a0d075c3c9ff9b3
[7fae5ac]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/7fae5ac55c2425e39b1d3a6daf01f64777b954b5
[28df88b]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/28df88b442d1f036ad0e0c3104547931eaa80022
[2cff4e0]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/2cff4e07fcdaccf60f80b5acefaac511779d6dc1
[a000789]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/a0007896ce8bde27c90d6c94a72aad8d724c5ecf
[8cfcb5d]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/8cfcb5d3c34e85db64c0a060cf427e00e59e34ea
[5a5e6b9]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/5a5e6b94d81d192dbcec22df2694b02c359593d4
[b0a7cbf]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/b0a7cbf374baba7e9555a4371063eaca0debe02e
[dfb1c62]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/dfb1c6294ed9c65bca6a0bd9b5b304ec14f6f94a
[ce8dd60]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/ce8dd60f85e2e512e634759b56c30f8cf7b7bed0
[bab4599]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/bab459987ca05fa6123cd57af94d43bf3b271740
[2e4ccc0]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/2e4ccc071a42159af515d02d0d1fc58976ee38ee
[05137b0]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/05137b074d09dc9799c1a6fde1a7c1ab9c3d1049
[84d3f3a]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/84d3f3a3d145f44f5b72ba2ac457f155774c5ff7
[670220c]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/670220c12eb2df87d4af6046f4058be1d8abe469
[5ab43e0]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/5ab43e0c3e0ea40864330a7cd8439237cdec3a2b
[2acb7cf]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/2acb7cf3aa25c6d84453515be90ded6ee5e570bb
[d6968ee]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/d6968ee31d58d7a5896b1d4c430bed312d1bc464
[530fe36]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/530fe3613ba94240867ea115c94246bb0ac8c9db
[cf47b2b]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/cf47b2b98825e28a57e037134f4342ffcc9d501e
[b34d0e9]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/b34d0e9713e813ea8a9e6022c841aa542efd2ae8
[a72b886]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/a72b886831351849f1ee769b47476e0f12f4a708
[84ffc7c]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/84ffc7c14f1264a29e3ce5c8ff88228bd6534547
[6a93424]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/6a93424406a870ea8da1fce830d0f0db1e8ed45d
[312cb3e]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/312cb3eab431abefc73d1b91e384fbd62e51f0c8
[44674f8]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/44674f8832b5e8d68aa36a060f4167201e98ad40
[4bf3fdf]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/4bf3fdf32f484f39214894f533253d9a19f3ef24
[25fb961]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/25fb961162366ccd805a58ed6070a76f0e2e5b69
[56cf143]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/56cf14367d13424a7c4d856ba53b6be3909d9713
[ea79856]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/ea798562e1522c565be0f16c03cef64ddb5c718d
[51e9334]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/51e9334a5a60eb6969d884cf9d269fd3b5b42a08
[18a415f]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/18a415fe9176e0af69576c69ba48ed45d02089ac
[6ea336a]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/6ea336ac038b75e4456855bbd5846d9790d82506
[86db4e7]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/86db4e7505decbc9748eab69a418faf3f3ce8087
[436aef8]: https://github.com/LittleYe233/hexo-theme-amazingremake/commit/436aef8ccf13f554daf389387add56298fee0006

[1.3.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v1.3.0
[1.2.1]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v1.2.1
[1.2.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v1.2.0
[1.1.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v1.1.0
[1.0.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v1.0.0
[0.4.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v0.4.0
[0.3.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v0.3.0
[0.2.1]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v0.2.1
[0.2.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v0.2.0
[0.1.0]: https://github.com/LittleYe233/hexo-theme-amazingremake/releases/tag/v0.1.0

[@NaughtyChas]: https://github.com/NaughtyChas

<!--
Format:
## [semver] - yyyy-mm-dd

### Added: new features

### Removed: now removed features

### Fixed: any bug fixes

### Changed: changes in existing functionality

### Security: in case of vulnerabilities

### Deprecated: soon-to-be removed features
-->