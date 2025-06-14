import random

"""
Genera una lista de entre 1 y 20 números aleatorios
:param min:
:param max:
"""
def generate_random_numbers(min, max):
    numbers = []
    amount = random.randint(1, 20)
    
    for i in range(amount):
        numbers.append(random.randint(min, max))
    
    return numbers

data = generate_random_numbers(1, 100)

print(f"Se generaron {len(data)} números aleatorios entre 1 y 100:")

print(f"Números generados: {', '.join(map(str, data))}")

print(f"El número menor es: {min(data)}")
print(f"El número mayor es: {max(data)}")