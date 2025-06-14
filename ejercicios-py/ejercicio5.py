import random

"""
Genera un numero aleatorio entre 1 y 100

:return: un numero aleatorio entre 0 y 100
"""
def random_number():
    return random.randint(1, 100)

"""
Determina si un numero es primo
:param number: el numero a evaluar
:return: True si el numero es primo, False si no lo es
"""
def is_prime(number):
    if number <= 1:
        return False

    index = 2
    while index * index <= number:
        if number % index == 0:
            return False

        index += 1

    return True


generated_number = random_number()

print(f"El número {generated_number} {'' if is_prime(generated_number) else 'no '}es primo")