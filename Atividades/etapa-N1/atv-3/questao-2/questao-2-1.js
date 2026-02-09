const configuracoes = { cache: null }

console.log(configuracoes.cache?.tempoExpiracao) // undefined
console.log(configuracoes.cache?.tempoExpiracao ?? 600) // 600

configuracoes.cache = {tempoExpiracao: 0}
console.log(configuracoes.cache?.tempoExpiracao) // 0
console.log(configuracoes.cache?.tempoExpiracao ?? 600) // 0