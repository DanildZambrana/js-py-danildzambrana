import random
import unicodedata

vowels = ['a', 'e', 'i', 'o', 'u']
words = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Arquitectura",
    "Hipopótamo"
]


"""
Obtiene las vocales presentes en el string
:param str: Palabra donde se buscaran las vocales
:return: lista de vocales encontradas, se toman en cuenta las que tienen acentos
"""
def get_vowels(string):
    found_vowels = []

    for char in string:
        cleaned_char = unicodedata.normalize('NFD', char).encode('ascii', 'ignore').decode('ascii')
        if cleaned_char.lower() in vowels:
            found_vowels.append(char.upper())
    
    return found_vowels


"""
Obtiene una palabra aleatoria de la lista
:return: palabra aleatoria
"""
def get_random_word():
    random_index = random.randint(0, len(words) - 1)
    return words[random_index]


word = get_random_word()
vowels_found = get_vowels(word)
print(f"La palabra '{word}' tiene {len(vowels_found)} vocales: {', '.join(vowels_found)}")