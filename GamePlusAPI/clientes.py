import hashlib

class Clientes:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor

    #Clase para Log-in
    def ingresar(self, correo_electronico, contrasena):
        #Declaracion de consulta MySQL
        select = ('SELECT * FROM clientes WHERE correo_electronico =%s AND contrasena = %s')
        #Encriptacion de contraseña
        h = hashlib.new('sha256', bytes(contrasena, 'utf-8'))
        h = h.hexdigest()
        #Ejecucion de Consulta SQL
        try:
            self.cursor.execute(select, (correo_electronico, h,))
            result = self.cursor.fetchall()
            #Respuesta de consulta
            if result:
                return True
            else:
                return False
        #Manejo de Errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return False

    #Clase para nuevo usuario
    def crear(self, nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, telefono, rfc, nivel_usuario, id_estado):
        #Declaracion de consulta SQL
        insert = ('INSERT INTO clientes(nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, telefono, rfc, nivel_usuario, id_estado) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)')
        #Encriptacion de contraseña
        h = hashlib.new('sha256', bytes(contrasena, 'utf-8'))
        h = h.hexdigest()
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(insert, (nombre, apellido_paterno, apellido_materno, correo_electronico, h, telefono, rfc, nivel_usuario, id_estado))
            self.connection.commit()
            return True
        #Manejo de Errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return False

    #Clase para obtener lista de clientes
    def obtener(self):
        clientes = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute('SELECT * FROM clientes')
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                cliente = {
                    'codigo_cliente': x[0],
                    'nombre': x[1],
                    'apellido_paterno': x[2],
                    'apellido_materno': x[3],
                    'correo_electronico': x[4],
                    'telefono': x[6],
                    'rfc': x[7],
                    'nivel_usuario': x[8],
                    'id_estado': x[9]
                }
                clientes.append(cliente)
            return clientes
        #Manejo de errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return clientes
