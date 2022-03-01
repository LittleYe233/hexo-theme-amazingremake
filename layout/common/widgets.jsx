const logger = require('hexo-log')();
const { Component } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');
const classname = require('hexo-component-inferno/lib/util/classname');

function formatWidgets(widgets) {
    const result = {};
    if (Array.isArray(widgets)) {
        widgets.filter(widget => typeof widget === 'object').forEach(widget => {
            if ('position' in widget && (widget.position === 'left' || widget.position === 'right')) {
                if (!(widget.position in result)) {
                    result[widget.position] = [widget];
                } else {
                    result[widget.position].push(widget);
                }
            }
        });
    }
    return result;
}

function clone(Obj) {
    let buf;
    if (Obj instanceof Array) {
        buf = [];
        let i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {
        buf = {};
        for (const k in Obj) {
            buf[k] = clone(Obj[k]);
        }
        return buf;
    }
    return Obj;

}

function formatAllWidgets(widgets) {
    const result = {};
    if (Array.isArray(widgets)) {
        widgets.filter(widget => typeof widget === 'object').forEach(widget => {
            if ('position' in widget && (widget.position === 'left' || widget.position === 'right') && widget.show_mode === 'pages_and_posts') {
            // We assume that the page layout is `page` or `post`.
                const widgetNew = clone(widget);
                if (widgetNew.position === 'right') {
                    widgetNew.position = 'left';
                }
                if (!(widgetNew.position in result)) {
                    result[widgetNew.position] = [widgetNew];
                } else {
                    result[widgetNew.position].push(widgetNew);
                }
            }
        });
    }
    return result;
}

function hasColumn(widgets, position) {
    if (Array.isArray(widgets)) {
        return typeof widgets.find(widget => widget.position === position) !== 'undefined';
    }
    return false;
}

function getColumnCount(widgets) {
    return [hasColumn(widgets, 'left'), hasColumn(widgets, 'right')].filter(v => !!v).length + 1;
}

function getColumnSizeClass(columnCount) {
    switch (columnCount) {
        case 2:
            return 'is-4-tablet is-4-desktop is-4-widescreen';
        case 3:
            return 'is-4-tablet is-4-desktop is-3-widescreen';
    }
    return '';
}

function getColumnVisibilityClass(columnCount, position) {
    if (columnCount === 3 && position === 'right') {
        return 'is-hidden-touch is-hidden-desktop-only';
    }
    return '';
}

function getColumnOrderClass(position) {
    return position === 'left' ? 'order-1' : 'order-3';
}

function isColumnSticky(config, position) {
    return typeof config.sidebar === 'object'
        && position in config.sidebar
        && config.sidebar[position].sticky === true;
}

class Widgets extends Component {
    render() {
        const { site, config, helper, page, position } = this.props;
        const isPageOrPost = page.layout === 'post' || page.layout === 'page';
        const widgets = isPageOrPost ? formatAllWidgets(config.widgets, isPageOrPost)[position] || [] : formatWidgets(config.widgets)[position] || [];
        const columnCount = getColumnCount(config.widgets);

        if (!widgets.length) {
            return null;
        }

        return <div class={classname({
            'column': true,
            ['column-' + position]: true,
            [getColumnSizeClass(columnCount)]: true,
            [getColumnVisibilityClass(columnCount, position)]: true,
            [getColumnOrderClass(position)]: true,
            'is-sticky': isColumnSticky(config, position)
        })}>
            {widgets.map(widget => {
                // widget type is not defined
                if (!widget.type) {
                    return null;
                }
                try {
                    let Widget = view.require('widget/' + widget.type);
                    Widget = Widget.Cacheable ? Widget.Cacheable : Widget;
                    return <Widget site={site} helper={helper} config={config} page={page} widget={widget} />;
                } catch (e) {
                    logger.w(`Icarus cannot load widget "${widget.type}"`);
                }
                return null;
            })}

            {/* 此处放开可以在非桌面设备上并且非文章情况下展示right widget,否则不展示*/}
            {position === 'left' && hasColumn(config.widgets, 'right') ? <div class={classname({
                'column-right-shadow': true,
                'is-hidden-widescreen': true,
                'is-sticky': isColumnSticky(config, 'right')
            })}></div> : null}
        </div>;
    }
}

Widgets.getColumnCount = getColumnCount;

module.exports = Widgets;
