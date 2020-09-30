module.exports = (
    code,
    headers = { 'Content-Type': 'application/json' },
    body
) => ({
    code,
    headers,
    body: JSON.stringify(body)
})
