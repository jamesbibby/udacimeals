import { combineReducers } from 'redux'
import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions'

const food = (state = {}, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			const { recipe } = action
			return {
				...state,
				[recipe.label]: recipe,
			}
		default:
			return state
	}
}

const daysOfWeek = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
]
const initialCalendarState = daysOfWeek.reduce((memo, day) => {
	memo[day] = { breakfast: null, lunch: null, dinner: null }
	return memo
}, {})

const calendar = (state = initialCalendarState, action) => {
	const { day, recipe, meal } = action
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				[day]: {
					...state[day],
					[meal]: recipe.label,
				},
			}
		case REMOVE_FROM_CALENDAR:
			return {
				...state,
				[day]: {
					...state[day],
					[meal]: null,
				},
			}
		default:
			return state
	}
}

export default combineReducers({
	food,
	calendar,
})
