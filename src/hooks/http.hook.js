import { useState, useCallback } from 'react'
import config from '@config/config.js'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, { method, body, headers })
            const data = await response.json()

            if (!response.ok) {
                let error = config.defaultLang === 'RU' ? data.message.RU : data.message.EN
                throw new Error(error || 'Что-то пошло не так')
            }

            setLoading(false)

            return data
        } catch (error) {
            setLoading(false)
            setError(error)
            throw error
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}