# Amazing-Remake: Hexo 主题 amazing 的重制

## 简介

本主题 (Amazing-Remake) 为 Hexo 主题 [amazing](https://github.com/removeif/hexo-theme-amazing) 的重制，主题标识名为 `amazingremake` 。考虑到原主题暂停更新时间过长，本主题将在原主题基础上做出增减和更改，并对文档做出改进。

## 历史

本代码库系于 2022-01-26 (UTC+8) 由 [removeif/hexo-theme-amazing](https://github.com/removeif/hexo-theme-amazing) 代码库导入至本账号而被创建，在本代码库中的对应提交为 [master 分支的 7fea32f](https://github.com/LittleYe233/hexo-theme-amazingremake/tree/7fea32fa88ef79b3ca0c697ed55ee3213f72bb2b) 。

本代码库将在上述提交处创建 `dev` 分支，用以后续的开发，并在必要时合并入 `master` 分支。目前本代码库在 GitHub 上的默认分支为 `dev` 分支。

## 安装

### 当前主题

可以使用 `npm` 命令安装主题：

```bash
npm install hexo-theme-amazingremake --save
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

## 配置

以下配置说明均假定安装当前主题。

### 配置文件优先级

安装主题后，为方便未来可能的配置迁移，建议在博客根目录下创建 `_config.amazingremake.yml` 文件，用以存储本主题的个性化配置。

创建完成后，博客目录树内应含有至少三个配置文件：

- `_config.amazingremake.yml` ： 本主题的**用户**配置文件；
- `_config.yml` ： Hexo 的**默认**配置文件；
- `node_modules/hexo-theme-amazingremake/_config.yml` ： 本主题的**默认**配置文件。

以上配置文件的优先级由上而下依次递减，对于同字段**非空**配置项，优先级高的配置文件中的内容会覆盖优先级低的。

为避免各配置文件间的配置相互混淆，可以直接复制 `_config.yml` 的内容到 `_config.amazingremake.yml` ，此后所有配置的更改均在后者中完成。

注意在覆盖配置时，若要关闭一些功能，不可直接注释相关配置 (因为 YAML 会认为相关配置项不存在，无法覆盖优先级低的配置) ，而应用空字符串 `''` 占位。例如，若 `_config.amazingremake.yml` 和 `node_modules/hexo-theme-amazingremake/_config.yml` 中分别有如下配置项：

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

继而将 `funcA` 相关配置保持默认并禁用 `funcB` 相关配置。