const logger = require('hexo-log')();
const { Component, Fragment } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');

module.exports = class extends Component {
    render() {
        const {config, page, helper} = this.props;
        const {__} = helper;
        const {comment} = config;

        if (!comment || typeof comment.type !== 'string' || comment.enabled !== true) {
            return null;
        }
        const isGitalk = comment.type === 'gitalk';
        const commentClosed = !page.comments;

        return <div class="card">
            <div class="card-content">
                {!commentClosed ? <div class="title is-5">{__('article.comments')}</div> : null}
                {(() => {
                    try {
                        if (isGitalk || !commentClosed) {
                            let Comment = view.require('comment/' + comment.type);
                            Comment = Comment.Cacheable ? Comment.Cacheable : Comment;
                            return <Comment config={config} page={page} helper={helper} comment={comment}/>;
                        }
                        return <Fragment>
                            <div id="comment-container">
                                <div class="gt-container">
                                    <h3 class="menu-label has-text-centered">{__('article.comments_closed')}</h3>
                                </div>
                            </div>
                        </Fragment>;

                    } catch (e) {
                        logger.w(`Icarus cannot load comment "${comment.type}"`);
                        return null;
                    }
                })()}
            </div>
        </div>;
    }
};
