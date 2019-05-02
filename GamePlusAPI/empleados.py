import hashlib

class Empleados:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor

    #Clase para Log-in
    def ingresar(self, correo_electronico, contrasena):
        #Declaracion de consulta MySQL
        select = ('SELECT * FROM empleados WHERE correo_electronico =%s AND contrasena =%s')
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
        
    def crear(self, nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, nivel_usuario, id_sucursal):
        #Declaracion de consulta MySQL
        insert = ('INSERT INTO empleados(nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, nivel_usuario, id_sucursal) VALUES (%s,%s,%s,%s,%s,%s,%s)')
        #Encriptacion de contrasena
        h = hashlib.new('sha256', bytes(contrasena, 'utf-8'))
        h = h.hexdigest()
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(insert, (nombre, apellido_paterno, apellido_materno, correo_electronico, h, nivel_usuario, id_sucursal))
            self.connection.commit()
            return True
        #Manejo de Errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return False

    def recuperar(self, correo_electronico):
        #Declaracion de consulta MySQL
        empleados = []
        select = ('SELECT * FROM empleados WHERE correo_electronico = %s')
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(select, (correo_electronico,))
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                empleado = {
                    'id': x[0],
                    'nombre': x[1],
                    'apellido_paterno': x[2],
                    'apellido_materno': x[3],
                    'correo_electronico': x[4],
                    'nivel_usuario': x[6],
                    'id_sucursal': x[7]
                }
                empleados.append(empleado)
            return empleados
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return empleados

    def obtener(self):
        empleados = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute('SELECT * FROM empleados')
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                empleado = {
                    'id': x[0],
                    'nombre': x[1],
                    'apellido_paterno': x[2],
                    'apellido_materno': x[3],
                    'correo_electronico': x[4],
                    'nivel_usuario': x[6],
                    'id_sucursal': x[7]
                }
                empleados.append(empleado)
            return empleados
        #Manejo de errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return empleados