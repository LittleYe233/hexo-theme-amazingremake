# Amazing-Remake Documentation - 安装

## 准备

### 版本号

本主题所需主要软件和依赖包及其适合版本如下：

| 软件或依赖包 | 适合版本 |
| :-: | :-: |
| Node.js | >=12.13.0 |
| Hexo | ^6.0.0 |

### Hexo

使用本主题前需要建立 Hexo 工作目录。具体步骤参见 Hexo 官方文档的[概述](https://hexo.io/zh-cn/docs/)和[建站](https://hexo.io/zh-cn/docs/setup)章节。

## 安装

### 当前主题

可以使用 `npm` 命令安装主题：

```bash
npm install hexo-theme-amazingremake hexo-renderer-inferno@^0.1.3 bulma-stylus@0.8.0 --save
```

*更多有关 `hexo-renderer-inferno` 和 `bulma-stylus` 包需要被安装至博客目录下 `node_modules` 中的说明，参见 [ppoffice/hexo-theme-icarus 的 issue#855](https://github.com/ppoffice/hexo-theme-icarus/issues/855#issuecomment-812881200) 。*

再修改博客根目录下 `_config.yml` 中的 `theme` 键值：

```yml
theme: amazingremake
```

### 原主题

若要使用本代码库安装原主题，则需在博客目录中克隆已回退到 [7fea32f](https://github.com/LittleYe233/hexo-theme-amazingremake/tree/7fea32fa88ef79b3ca0c697ed55ee3213f72bb2b) 处的 `master` 分支，其他步骤按照原代码库的 [README.md](https://github.com/LittleYe233/hexo-theme-amazingremake/blob/7fea32fa88ef79b3ca0c697ed55ee3213f72bb2b/README.md) 即可：

```bash
cd /path/to/hexo/blog
git clone https://github.com/LittleYe233/hexo-theme-amazingremake.git themes/amazing
git checkout master
git reset --hard 7fea32fa88ef79b3ca0c697ed55ee3213f72bb2b
```

若要安装原主题的最新版本，参阅原主题代码库最新版本的 [README.md](https://github.com/removeif/hexo-theme-amazing/blob/master/README.md) 。