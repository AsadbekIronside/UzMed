const mainRouter = (app) => {
    function isUserAllowed(req, res, next) {
        if (req.cookies['user']) {
            next();
        }
        else {
            res.redirect('/error-500');
        }
    }
    // session middle
    // app.use(isUserAllowed);
    app.get('get-user-data', (req, res) => {
        console.log(req);
        console.log("Ko't");
    });
};
export default mainRouter;
