function $url(additionalRules, body) {
    return $fetch(additionalRules, {
        baseURL: "http://localhost:6200/api",
        method: "POST",
        body,
    })
}
export default $url
