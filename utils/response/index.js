module.exports = (
    code,
    body,
    headers = { 'Content-Type': 'application/json' }
) => ({
    code,
    headers,
    body: JSON.stringify(body)
})
