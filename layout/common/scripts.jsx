const { Component, Fragment } = require('inferno');
const Plugins = require('./plugins');

module.exports = class extends Component {
    render() {
        const { site, config, helper, page } = this.props;
        const { url_for, cdn, my_cdn } = helper;
        const { external_link, article, comment, has_banner } = config;
        const language = page.lang || page.language || config.language || 'en';
        const hasComment = comment !== undefined && comment.enabled !== undefined && comment.enabled === true && comment.type !== undefined && (comment.type === 'gitalk' || comment.type === 'valine');
        let hasHotRecommend = false;
        const hasBanner = has_banner !== undefined && has_banner;
        let appKey,
            appId,
            userName,
            userRepo,
            isValine;

        if (hasComment && comment.type === 'gitalk') {
            hasHotRecommend = comment.has_hot_recommended !== undefined && comment.has_hot_recommended;
            appId = comment.client_id;
            appKey = comment.client_secret;
            userName = comment.owner;
            userRepo = comment.repo;
            isValine = false;
        } else if (hasComment && comment.type === 'valine') {
            appId = comment.app_id;
            appKey = comment.app_key;
            userName = comment.owner;
            isValine = true;
        }

        const js = `$.getScript('${my_cdn(url_for('/js/comment-issue-data.js'))}',function(){loadIssueData('${appId}','${appKey}','${userName}','${userRepo}',${isValine});})`;
        let externalLink = null;
        if (typeof external_link === 'boolean') {
            externalLink = { enable: external_link, exclude: [] };
        } else {
            // eslint-disable-next-line no-unused-vars
            externalLink = {
                enable: typeof external_link.enable === 'boolean' ? external_link.enable : true,
                exclude: external_link.exclude || []
            };
        }

        let enabled = false;
        let fold = 'unfolded';
        let clipboard = true;
        if (article && article.highlight) {
            if (typeof article.highlight.enabled === 'boolean') {
                enabled = article.highlight.enabled;
            }
            if (typeof article.highlight.clipboard !== 'undefined') {
                clipboard = !!article.highlight.clipboard;
            }
            if (typeof article.highlight.fold === 'string') {
                fold = article.highlight.fold;
            }
        }

        const embeddedConfig = `var IcarusThemeSettings = {
            article: {
                highlight: {
                    enabled: ${enabled},
                    clipboard: ${clipboard},
                    fold: '${fold}'
                }
            }
        };`;

        return <Fragment>
            <script src={cdn('moment', '2.22.2', 'min/moment-with-locales.min.js')}></script>
            {clipboard && <script src={cdn('clipboard', '2.0.4', 'dist/clipboard.min.js')} async></script>}
            <script dangerouslySetInnerHTML={{ __html: `moment.locale("${language}");` }}></script>
            <script dangerouslySetInnerHTML={{ __html: embeddedConfig }}></script>
            <script src={my_cdn(url_for('/js/column.js'))}></script>
            <Plugins site={site} config={config} page={page} helper={helper} head={false} />
            <script src={my_cdn(url_for('/js/main.js'))} defer></script>
            {hasHotRecommend || !hasBanner ? null : <script src={my_cdn(url_for('/js/banner.js'))}></script>}
            {hasComment ? <script dangerouslySetInnerHTML={{ __html: js }}></script> : null}
        </Fragment>;
    }
};
