## React Context

1. Создать контекст
2. Обернуть в провайдер Context.Provider
3. Создать value для провайдера:
-- state получить из редьюсера useReducer(reducer, initialState)
-- actions создать с помощью dispatch
4. В конечном компоненте вызвать контекст useContext(context)