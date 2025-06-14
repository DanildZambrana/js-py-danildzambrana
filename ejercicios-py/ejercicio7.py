import random

words = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Hola",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Arquitectura",
    "Hipopótamo",
]

# word = words[random.randint(0, len(words) - 1)].invert()

"""
Obtiene una palabra aleatoria de la lista
:return: palabra aleatoria
"""
def get_random_word():
    random_index = random.randint(0, len(words) - 1)
    return words[random_index]

"""
Invierte una palabra
:param word: palabra a invertir
:return: palabra invertida
"""
def invert(inputWord):
    return inputWord[::-1]

word = get_random_word()

print(f"La palabra '{word}' invertida es: '{invert(word).lower()}'")