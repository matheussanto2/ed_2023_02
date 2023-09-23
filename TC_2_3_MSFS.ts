Imagine que temos duas formas de somar os números de 1 a n usando recursão:

Recursão Direta: Nesse método, usamos uma pilha para acompanhar todas as somas que precisamos fazer. 
  Cada nova soma é colocada na pilha até chegarmos ao resultado final. Isso significa que a pilha cresce à medida que fazemos mais somas.
"função somaRecursiva(n):
  se n == 1:
    retorne 1
  senão:
    retorne n + somaRecursiva(n - 1)
"
  
Recursão de Cauda: Aqui, usamos um jeito mais eficiente. Em vez de empilhar as somas, usamos um valor chamado "resultado parcial" para guardar o que já somamos até agora. 
  Isso evita que a pilha cresça, pois não precisamos lembrar de todas as somas anteriores.
  "função somaRecursivaDeCauda(n, resultadoParcial):
  se n == 1:
    retorne resultadoParcial
  senão:
    retorne somaRecursivaDeCauda(n - 1, resultadoParcial + n)
"

A diferença principal está na pilha de chamadas: na recursão direta, ela cresce com o tamanho do problema (n), enquanto na recursão de cauda, ela fica constante, não importando o valor de n.

Portanto, mesmo que estejamos lidando com o mesmo problema (soma de 1 a n), a forma como fazemos isso pode afetar o espaço de memória necessário. 
  A recursão de cauda economiza memória porque não precisa lembrar de todas as somas anteriores, enquanto a recursão direta precisa manter todas as chamadas na memória.
