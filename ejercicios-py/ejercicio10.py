import random
import string

"""
Genera un string de entre 16 y 40 caracteres aleatorios con letras y números.
:return: La contrasña generada
"""
def generate_string():
    length = random.randint(16, 40)
    password = ''
    
    chars = string.ascii_lowercase + string.digits
    
    while len(password) < length:
        password += random.choice(chars)
    
    return password[:length]

generated_str = generate_string()

print(f"La contraseña generada es: '{generated_str}' y tiene {len(generated_str)} caracteres")