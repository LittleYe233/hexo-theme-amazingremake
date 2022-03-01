const { Component } = require('inferno');
const classname = require('hexo-component-inferno/lib/util/classname');
const Head = require('./common/head');
const Navbar = require('./common/navbar');
const Widgets = require('./common/widgets');
const Footer = require('./common/footer');
const Scripts = require('./common/scripts');
const Search = require('./common/search');

module.exports = class extends Component {
    render() {
        const { site, config, page, helper, body } = this.props;
        const { comment, use_pjax, has_banner } = config;
        const { __, my_cdn, url_for } = helper;

        // The setting from the page front matter is prior to that in the configuration file.
        // If MathJax and KaTeX are both selected to use, KaTeX is prior to MathJax.
        const isMath = page.mathJax !== undefined ? page.mathJax === true : config.plugins !== undefined && config.plugins.mathJax === true;
        const isKatex = page.katex !== undefined ? page.katex === true : config.plugins !== undefined && config.plugins.katex === true;
        let mathRenderer, appKey, appId, userName, userRepo, isValine;
        if (isKatex) {
            mathRenderer = 'katex';
        } else {
            mathRenderer = isMath ? 'mathjax' : undefined;
        }
        const language = page.lang || page.language || config.language;
        const columnCount = Widgets.getColumnCount(config.widgets);
        const hasComment = comment !== undefined && comment.enabled !== undefined && comment.enabled === true && comment.type !== undefined && (comment.type === 'gitalk' || comment.type === 'valine')
            && (comment.has_hot_recommended || comment.has_latest_comments);

        if (comment !== undefined && comment.type !== undefined && comment.type === 'gitalk') {
            appId = comment.client_id;
            appKey = comment.client_secret;
            userName = comment.owner;
            userRepo = comment.repo;
            isValine = false;
        } else if (comment !== undefined && comment.type !== undefined && comment.type === 'valine') {
            appId = comment.app_id;
            appKey = comment.app_key;
            userName = comment.owner;
            isValine = true;
        }
        const hotTitle = __('widget.hot_recommend');
        const hotTip = __('widget.hot_recommend_tip');

        // =====index hot_recommend
        let hotRecommendStr
            = `<div class="card widget">
            <div class="card-content">
                <h3 class="menu-label">${hotTitle}</h3><span id="index_hot_div">${hotTip}</span>
            </div>
        </div>`;

        // =====index banner
        const bannerStr
            = `<div class="card widget">
            <div class="card-content1 card-image">
                <span id="banner"><div class="card-content ">Banner ${hotTip}</div></span>
            </div>
        </div>`;

        const mathJaxJs = `function loadMathJax() { // 加载mathjax
            window.MathJax = {
                tex: {
                    inlineMath: [['$', '$']],
                    autoload: {
                        color: [],
                        colorv2: ['color']
                    },
                    packages: {'[+]': ['noerrors']}
                },
                options: {
                    ignoreHtmlClass: 'tex2jax_ignore',
                    processHtmlClass: 'tex2jax_process'
                },
                loader: {
                    load: ['input/asciimath', '[tex]/noerrors']
                }
            };
            $.getScript('//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
        };loadMathJax();`;

        const pjaxJs = `var pjax = new Pjax({
            elements: "a",//代表点击链接就更新
            selectors: [  //代表要更新的节点
                ".section",
                "title"
            ],
            cache: true,
            cacheBust:false
        })

        function loadBusuanzi(){
        $.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js", function () {});
        }

        function loadMathJax() { // 加载mathjax
            window.MathJax = {
                tex: {
                    inlineMath: [['$', '$']],
                    autoload: {
                        color: [],
                        colorv2: ['color']
                    },
                    packages: {'[+]': ['noerrors']}
                },
                options: {
                    ignoreHtmlClass: 'tex2jax_ignore',
                    processHtmlClass: 'tex2jax_process'
                },
                loader: {
                    load: ['input/asciimath', '[tex]/noerrors']
                }
            };
            $.getScript('//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
        };

        // 开始 PJAX 执行的函数
        document.addEventListener('pjax:send', function () {
        });
        
        // PJAX 完成之后执行的函数，可以和上面的重载放在一起
        document.addEventListener('pjax:complete', function () {
            $(".section").css({opacity:1});
            if(${hasComment}){
                $.getScript('${my_cdn(url_for('/js/comment-issue-data.js'))}',function(){loadIssueData('${appId}','${appKey}','${userName}','${userRepo}',${isValine});});
            }
            if('${mathRenderer}' === 'mathjax'){
                loadMathJax();
            }
            loadMainJs(jQuery, window.moment, window.ClipboardJS, window.IcarusThemeSettings);
            loadBackTop();
            loadBusuanzi();
            if(typeof loadBanner == 'function'){
                loadBanner();
            }
        });`;

        if (!hasComment
            || comment.type !== 'gitalk'
            || comment.has_hot_recommended === undefined
            || !comment.has_hot_recommended) {
            hotRecommendStr = '';
        }

        let indexTopData = hotRecommendStr;

        const hasBanner = has_banner !== undefined && has_banner;

        if (indexTopData === '' && hasBanner) {
            indexTopData = bannerStr;
        }

        if (page.path !== 'index.html') {
            indexTopData = '';
        }

        const isPageOrPost = page.layout === 'page' || page.layout === 'post';
        return <html lang={language ? language.substr(0, 2) : ''}>
            <Head site={site} config={config} helper={helper} page={page} />
            <body className={`is-${columnCount}-column has-navbar-fixed-top`}>
                <Navbar config={config} helper={helper} page={page} />
                <script type="text/javascript" src={my_cdn(url_for('/js/theme-setting.js'))}></script>
                <section class="section">
                    <div class="container">
                        <div class="columns">
                            <div class={classname({
                                column: true,
                                'order-2': true,
                                'column-main': true,
                                'is-12': columnCount === 1,
                                'is-8-tablet is-8-desktop is-6-widescreen': (page.layout !== 'post' && page.layout !== 'page') && columnCount === 3,
                                'is-8-tablet is-8-desktop is-9-widescreen': columnCount === 2 || page.layout === 'post'
                            })} dangerouslySetInnerHTML={{__html: indexTopData + body}}></div>
                            <Widgets site={site} config={config} helper={helper} page={page} position={'left'}/>
                            {isPageOrPost ? null : <Widgets site={site} config={config} helper={helper} page={page} position={'right'}/>}
                        </div>
                    </div>
                </section>
                <Footer config={config} helper={helper} />
                <Scripts site={site} config={config} helper={helper} page={page} />
                <Search config={config} helper={helper} />
                {use_pjax ? <script src="https://cdn.jsdelivr.net/npm/pjax@0.2.8/pjax.js"></script> : null}
                {use_pjax ? <script type="text/javascript" dangerouslySetInnerHTML={{ __html: pjaxJs }}></script> : null}
                {mathRenderer === 'mathjax' ? <script type="text/javascript" dangerouslySetInnerHTML={{ __html: mathJaxJs }}></script> : null}
            </body>
        </html>;
    }
};
