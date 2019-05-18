class Sucursales:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor

    def obtener(self):
        sucursales = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute('SELECT * FROM surcursales')
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                sucursal = {
                    'id': x[0],
                    'ubicacion': x[1],
                    'codigo_postal': x[2],
                    'id_estado': x[3],
                    'id_municipio': x[4],
                    'horario_inicio': str(x[5]),
                    'horario_cierre': str(x[6])
                }
                sucursales.append(sucursal)
            return sucursales
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return sucursales

    def crear(self, ubicacion, codigo_postal, id_estado, id_municipio, horario_inicio, horario_cierre):
        #Declaracion de consulta MySQL
        insert = ('INSERT INTO surcursales(ubicacion, codigo_postal, id_estado, id_municipio, horario_inicio, horario_cierre) VALUES (%s,%s,%s,%s,%s,%s)')
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(insert, (ubicacion, codigo_postal, id_estado, id_municipio, horario_inicio, horario_cierre,))
            self.connection.commit()
            return True
        #Manejo de Errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return False

    def recuperar(self, id_sucursal):
        #Declaracion de consulta MySQL
        select = ('SELECT * FROM surcursales WHERE id = %s')
        sucursales = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(select, (id_sucursal,))
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                sucursal = {
                    'id': x[0],
                    'ubicacion': x[1],
                    'codigo_postal': x[2],
                    'id_estado': x[3],
                    'id_municipio': x[4],
                    'horario_inicio': str(x[5]),
                    'horario_cierre': str(x[6])
                }
                sucursales.append(sucursal)
            return sucursales
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return sucursales