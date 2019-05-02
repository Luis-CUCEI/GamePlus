class Estados:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor

    #Obtener listado de estados
    def obtener(self):
        estados = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute('SELECT * FROM estados')
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                estado = {
                    'id' : x[0],
                   'nombre' : x[1]
                }
                estados.append(estado)
            return estados
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return estados