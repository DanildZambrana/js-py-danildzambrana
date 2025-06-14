import random

"""
Genera un número aleatorio entre 0 y 100
:return: el número generado
"""
def generate_number():
    return random.randint(0, 100)


"""
Determina si un número es par o impar
:param number: el número a evaluar
:return: True si el número es par, False si es impar
"""
def is_even(number):
    return number % 2 == 0


print('Números aleatorios')

for i in range(10):
    number = generate_number()
    print(f"El número {number} {'es par' if is_even(number) else 'es impar'}")