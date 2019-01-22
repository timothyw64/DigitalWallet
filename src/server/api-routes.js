/*
 * API routes methods.
 *
 */

// Imports.
let router = require('express').Router();
const Profile = require('./models/Profile')

// Set default API response
router.get('/', function (req, res) {

	// Lookup info in mongo, allow filtering
	// via request query.
	Profile.find(req.query)
    .then(profiles => {
        res.json({
            status: 'success',
            data: profiles
        })
    })
    .catch(err => {
        res.json({
            status: 'fail',
            message: err.message
        })
    })
});

// Perform POST action.
router.post('/profile', (req, res) => {

	Profile.create(req.body)
	.then(profile => {
		res.json({
			status: 'success',
			data: profile
		});
	})
	.catch(err => {
		res.json({
			status: 'fail',
			message: err.message
		});
	});
})

// Perform PUT based on 'id'.
router.put('/profile/:id', (req, res) => {

	Profile.findOneAndUpdate(req.params.id, req.body, {new:true})
	.then(profile => {
		res.json({
			status: 'success',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			status: 'fail',
			message: err.message
		})
    })
})

// Export API routes
module.exports = router;