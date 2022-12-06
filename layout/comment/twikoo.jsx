/**
 * @see https://www.anzifan.com/post/icarus_to_candy_2
 */

const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class Twikoo extends Component {
    render() {
        let {
            env_id,
            lang
        } = this.props;
        lang = lang ?? 'zh-CN';
        const js = `twikoo.init({
      envId: '${env_id}',
      lang: '${lang}',
      el: '#twikoo'
    });`;
        return (
            <Fragment>
                <div id="twikoo" class="content twikoo"></div>
                <script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.all.min.js"></script>
                <script dangerouslySetInnerHTML={{ __html: js }}></script>
            </Fragment>
        );
    }
}

Twikoo.Cacheable = cacheComponent(Twikoo, 'comment.twikoo', (props) => {
    const { comment } = props;
    return {
        env_id: comment.env_id,
        lang: comment.lang ?? 'zh-CN'
    };
});

module.exports = Twikoo;
