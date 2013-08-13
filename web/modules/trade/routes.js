module.exports = function(router, master, authorize) {
    return router
    .add(/^trade$/, function() {
        router.go('trade/BTCNOK/instant/buy', true)
    })
    .add(/^trade\/orders$/, function() {
        if (!authorize.user()) return
        master(require('./orders')(), 'trade')
    })
    .add(/^trade\/([A-Z]{6})\/(instant|advanced)\/(buy|sell)$/,
        function(market, mode, type)
    {
        if (!authorize.user(2)) return
        mode = mode == 'instant' ? 'market' : 'limit'
        type = type == 'buy' ? 'bid' : 'ask'
        master(require('./market')(market, mode, type), 'trade')
    })
}
