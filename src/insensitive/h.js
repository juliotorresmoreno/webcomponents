;
(function () {

    function h() {
        var args = [].slice.call(arguments),
            e = null

        function item(l) {

            function parseClass(string) {
                var m = string.split(/([\.#]?[a-zA-Z0-9_-]+)/)
                m.forEach(function (v) {
                    var s = v.substring(1, v.length)
                    if (!v) return
                    if (!e)
                        e = document.createElement(v)
                    else if (v[0] === '.')
                        e.classList.add(s)
                    else if (v[0] === '#')
                        e.setAttribute('id', s)
                })
            }

            if (l == null)
            ;
            else if ('string' === typeof l) {
                if (!e)
                    parseClass(l)
                else
                    e.appendChild(document.createTextNode(l))
            } else if ('number' === typeof l ||
                'boolean' === typeof l ||
                l instanceof Date ||
                l instanceof RegExp) {
                e.appendChild(document.createTextNode(l.toString()))
            } else if (Array.isArray(l))
                l.forEach(item)
            else if (l instanceof HTMLElement)
                e.appendChild(l)
            else if ('function' === typeof l) {
                if (l.toString().indexOf('class') === 0) {
                    e = new l(args[0]).renderComponent();
                } else {
                    e = l(args[0]);
                }
            } else if ('object' === typeof l) {
                for (var k in l) {
                    if ('function' === typeof l[k]) {
                        if (!e.listeners)
                            e.listeners = {};
                        let event = k;
                        let obj = e;
                        e.listeners[k] = l[event];
                        e.addEventListener(k, (...args) => {
                            if (typeof obj.listeners[event] === 'function')
                                obj.listeners[event](...args);
                        });
                    } else if (k === 'style') {
                        for (var s in l[k])
                            e.style.setProperty(s, l[k][s])
                    } else
                        e.setAttribute(k, l[k])
                }
            }
        }
        while (args.length) {
            item(args.shift())
        }
        return e;
    }

    if (typeof module === 'object')
        module.exports = h
    else
        this.h = h
})()