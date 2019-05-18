class Municipios:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor

    #Obtener listado de estados
    def obtener(self, id_estado):
        #Declaracion de consulta MySQL
        select = ('SELECT * FROM municipios WHERE id_estado =%s')
        municipios = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(select, (id_estado,))
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                municipio = {
                    'id': x[0],
                    'nombre': x[1],
                    'id_estado': x[2]
                }
                municipios.append(municipio)
            return municipios
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return municipios

    #Obtener listado de estados
    def recuperar(self, id_municipio):
        #Declaracion de consulta MySQL
        select = ('SELECT * FROM municipios WHERE id =%s')
        municipios = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute(select, (id_municipio,))
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                municipio = {
                    'id': x[0],
                    'nombre': x[1],
                    'id_estado': x[2]
                }
                municipios.append(municipio)
            return municipios
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return municipios
