const {Component} = require('inferno');
const {cacheComponent} = require('hexo-component-inferno/lib/util/cache');

class RecommendPosts extends Component {
    render() {
        const {recommendPost, relatePost, recommend_title, related_title} = this.props;

        let i = 0; let j = 0;
        return <div class="recommend-area">
            {relatePost.length > 0
                ? <div class="recommend-post">
                    <span class="is-size-6 has-text-grey has-mr-7">#&nbsp;{related_title}</span>
                    <br/>
                    {relatePost.map(post => {
                        j++;
                        return <span>&nbsp;&nbsp;{j}.<a href={post.url} class="is-size-6"
                            target="_blank" rel="noreferrer">{post.title}</a><br/></span>;
                    })}
                </div>
                : null}
            {recommendPost.length > 0
                ? <div class="recommend-post">
                    <span class="is-size-6 has-text-grey has-mr-7">#&nbsp;{recommend_title}</span>
                    <br/>
                    {recommendPost.map(post => {
                        i++;
                        return <span>&nbsp;&nbsp;{i}.<a href={post.url} class="is-size-6"
                            target="_blank" rel="noreferrer">{post.title}</a><br/></span>;
                    })}
                </div>
                : null}
        </div>;
    }
}

RecommendPosts.Cacheable = cacheComponent(RecommendPosts, 'widget.recommendposts', props => {
    const {mysite, helper, curPost} = props;
    const {url_for, __} = helper;
    if (!mysite.posts.length) {
        return null;
    }
    let relatePost = [];
    let recommendPost = [];

    function isRelatePost(curCategories, postCategories) {
        let cur = '';
        let post = '';
        curCategories.forEach(cat => {
            cur += cat.name;
        });
        postCategories.forEach(cat => {
            post += cat.name;
        });
        return cur === post;
    }

    relatePost = mysite.posts.filter(post => isRelatePost(curPost.categories, post.categories) && curPost.permalink !== post.permalink).sort('date', -1).limit(8).map(post => ({
        url: url_for(post.link || post.path),
        title: post.title
    }));

    recommendPost = mysite.posts.filter((item, index, arr) => item.encrypt !== true && item.recommend !== undefined && item.recommend > 0).sort('recommend', -1).sort('recommend', -1).limit(6).map(post => ({
        url: url_for(post.link || post.path),
        title: post.title
    }));

    return {
        recommendPost,
        relatePost,
        recommend_title: __('widget.recommend_posts'),
        related_title: __('widget.related_posts')
    };
});

module.exports = RecommendPosts;
