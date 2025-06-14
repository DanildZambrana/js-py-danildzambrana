import random

"""
Genera un numero aleatorio entre 1 y 100

:return: un numero aleatorio entre 0 y 100
"""
def random_number():
    return random.randint(1, 100)


"""
Calcula el factorial de un número.
:param number: El número para calcular el factorial.
:return: El factorial del número.
"""
def factorial(number):
    if number < 0:
        return float('nan')

    if number == 0:
        return 1

    return number * factorial(number - 1)


generated_number = random_number()

print(f"{generated_number}! = {factorial(generated_number)}")
