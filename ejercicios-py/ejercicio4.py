import random

"""
Genera un numero aleatorio entre 1 y 10

:return: un numero aleatorio entre 0 y 10
"""
def random_number():
    return random.randint(1, 10)

generated_number = random_number()

print(f"Tabla de multiplicar del {generated_number}")

for i in range(1, 11):
    print(f"{generated_number} x {i} = {generated_number * i}")