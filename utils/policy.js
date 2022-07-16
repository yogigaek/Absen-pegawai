const { Ability, AbilityBuilder } = require('@casl/ability')

const policies = {
	guest(user, {can}) {
		can('read', 'User')
	},
	user(user, {can}) {
		can('view', 'Departement')
		can('create', 'Leave', {user_id: user._id})
		can('read', 'Departement', {user_id: user._id})
		can('update', 'Departement', {user_id: user._id})
		can('delete', 'Departement', {user_id: user._id})
		can('read', 'Leave', {user_id: user._id})
	},
	admin(user, {can}) {
		can('manage', 'all')
	}
}

const policyFor = user => {
	let builder = new AbilityBuilder()
	if(user && typeof policies[user.role] === 'function') {
		policies[user.role](user, builder)
	} else {
		policies['guest'](user, builder)
	}

	return new Ability(builder.rules)
}

module.exports = policyFor